'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface LiquidEtherProps {
  mouseForce?: number;
  cursorSize?: number;
  isViscous?: boolean;
  viscous?: number;
  iterationsViscous?: number;
  iterationsPoisson?: number;
  dt?: number;
  BFECC?: boolean;
  resolution?: number;
  isBounce?: boolean;
  colors?: string[];
  style?: React.CSSProperties;
  className?: string;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
  takeoverDuration?: number;
  autoResumeDelay?: number;
  autoRampDuration?: number;
}

const defaultColors = ['#5227FF', '#FF9FFC', '#B497CF'];

export default function LiquidEther({
  mouseForce = 20,
  cursorSize = 100,
  isViscous = false,
  viscous = 30,
  iterationsViscous = 32,
  iterationsPoisson = 32,
  dt = 0.014,
  BFECC = true,
  resolution = 0.5,
  isBounce = false,
  colors = defaultColors,
  style = {},
  className = '',
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
  takeoverDuration = 0.25,
  autoResumeDelay = 1000,
  autoRampDuration = 0.6
}: LiquidEtherProps): React.ReactElement {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const isVisibleRef = useRef<boolean>(true);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    container.style.position = container.style.position || 'relative';
    container.style.overflow = container.style.overflow || 'hidden';

    function makePaletteTexture(stops: string[]): THREE.DataTexture {
      let arr: string[];
      if (Array.isArray(stops) && stops.length > 0) {
        arr = stops.length === 1 ? [stops[0], stops[0]] : stops;
      } else {
        arr = ['#ffffff', '#ffffff'];
      }
      const w = arr.length;
      const data = new Uint8Array(w * 4);
      for (let i = 0; i < w; i++) {
        const c = new THREE.Color(arr[i]);
        data[i * 4 + 0] = Math.round(c.r * 255);
        data[i * 4 + 1] = Math.round(c.g * 255);
        data[i * 4 + 2] = Math.round(c.b * 255);
        data[i * 4 + 3] = 255;
      }
      const tex = new THREE.DataTexture(data, w, 1, THREE.RGBAFormat);
      tex.magFilter = THREE.LinearFilter;
      tex.minFilter = THREE.LinearFilter;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.generateMipmaps = false;
      tex.needsUpdate = true;
      return tex;
    }

    const paletteTex = makePaletteTexture(colors);
    const bgVec4 = new THREE.Vector4(0, 0, 0, 0);

    // Minimal Common
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const rect = container.getBoundingClientRect();
    let cWidth = Math.max(1, Math.floor(rect.width));
    let cHeight = Math.max(1, Math.floor(rect.height));

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.autoClear = false;
    renderer.setClearColor(new THREE.Color(0x000000), 0);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(cWidth, cHeight);
    const el = renderer.domElement;
    el.style.width = '100%';
    el.style.height = '100%';
    el.style.display = 'block';
    container.prepend(el);

    const clock = new THREE.Clock();
    clock.start();
    let time = 0;
    let delta = 0;

    // Mouse
    const mouseCoords = new THREE.Vector2(0, 0);
    const mouseOld = new THREE.Vector2(0, 0);
    const mouseDiff = new THREE.Vector2(0, 0);
    let mouseMoved = false;
    let mouseTimer: number | null = null;
    let isHoverInside = false;
    let hasUserControl = false;
    let isAutoActive = false;
    let lastUserInteraction = performance.now();

    const onMouseMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) return;
      isHoverInside = true;
      lastUserInteraction = performance.now();
      if (mouseTimer) window.clearTimeout(mouseTimer);
      const nx = (e.clientX - r.left) / r.width;
      const ny = (e.clientY - r.top) / r.height;
      mouseCoords.set(nx * 2 - 1, -(ny * 2 - 1));
      mouseMoved = true;
      hasUserControl = true;
      isAutoActive = false;
      mouseTimer = window.setTimeout(() => { mouseMoved = false; }, 100);
    };
    const onMouseLeave = () => { isHoverInside = false; };
    window.addEventListener('mousemove', onMouseMove);
    container.ownerDocument?.addEventListener('mouseleave', onMouseLeave);

    // Auto driver
    let autoActive = false;
    const autoCurrent = new THREE.Vector2(0, 0);
    const autoTarget = new THREE.Vector2(Math.random() * 2 - 1, Math.random() * 2 - 1);
    let autoLastTime = performance.now();
    let autoActivationTime = 0;

    // Simulation shaders
    const face_vert = `attribute vec3 position; uniform vec2 px; uniform vec2 boundarySpace; varying vec2 uv; precision highp float; void main(){ vec3 pos=position; vec2 scale=1.0-boundarySpace*2.0; pos.xy=pos.xy*scale; uv=vec2(0.5)+(pos.xy)*0.5; gl_Position=vec4(pos,1.0); }`;
    const mouse_vert = `precision highp float; attribute vec3 position; attribute vec2 uv; uniform vec2 center; uniform vec2 scale; uniform vec2 px; varying vec2 vUv; void main(){ vec2 pos=position.xy*scale*2.0*px+center; vUv=uv; gl_Position=vec4(pos,0.0,1.0); }`;
    const advection_frag = `precision highp float; uniform sampler2D velocity; uniform float dt; uniform bool isBFECC; uniform vec2 fboSize; uniform vec2 px; varying vec2 uv; void main(){ vec2 ratio=max(fboSize.x,fboSize.y)/fboSize; if(isBFECC==false){ vec2 vel=texture2D(velocity,uv).xy; vec2 uv2=uv-vel*dt*ratio; vec2 nv=texture2D(velocity,uv2).xy; gl_FragColor=vec4(nv,0.0,0.0); } else { vec2 sn=uv; vec2 vo=texture2D(velocity,uv).xy; vec2 so=sn-vo*dt*ratio; vec2 vn1=texture2D(velocity,so).xy; vec2 sn2=so+vn1*dt*ratio; vec2 err=sn2-sn; vec2 sn3=sn-err/2.0; vec2 v2=texture2D(velocity,sn3).xy; vec2 so2=sn3-v2*dt*ratio; vec2 nv2=texture2D(velocity,so2).xy; gl_FragColor=vec4(nv2,0.0,0.0); } }`;
    const color_frag = `precision highp float; uniform sampler2D velocity; uniform sampler2D palette; uniform vec4 bgColor; varying vec2 uv; void main(){ vec2 vel=texture2D(velocity,uv).xy; float lenv=clamp(length(vel),0.0,1.0); vec3 c=texture2D(palette,vec2(lenv,0.5)).rgb; vec3 outRGB=mix(bgColor.rgb,c,lenv); float outA=mix(bgColor.a,1.0,lenv); gl_FragColor=vec4(outRGB,outA); }`;
    const divergence_frag = `precision highp float; uniform sampler2D velocity; uniform float dt; uniform vec2 px; varying vec2 uv; void main(){ float x0=texture2D(velocity,uv-vec2(px.x,0.0)).x; float x1=texture2D(velocity,uv+vec2(px.x,0.0)).x; float y0=texture2D(velocity,uv-vec2(0.0,px.y)).y; float y1=texture2D(velocity,uv+vec2(0.0,px.y)).y; float d=(x1-x0+y1-y0)/2.0; gl_FragColor=vec4(d/dt); }`;
    const externalForce_frag = `precision highp float; uniform vec2 force; uniform vec2 center; uniform vec2 scale; uniform vec2 px; varying vec2 vUv; void main(){ vec2 circle=(vUv-0.5)*2.0; float d=1.0-min(length(circle),1.0); d*=d; gl_FragColor=vec4(force*d,0.0,1.0); }`;
    const poisson_frag = `precision highp float; uniform sampler2D pressure; uniform sampler2D divergence; uniform vec2 px; varying vec2 uv; void main(){ float p0=texture2D(pressure,uv+vec2(px.x*2.0,0.0)).r; float p1=texture2D(pressure,uv-vec2(px.x*2.0,0.0)).r; float p2=texture2D(pressure,uv+vec2(0.0,px.y*2.0)).r; float p3=texture2D(pressure,uv-vec2(0.0,px.y*2.0)).r; float div=texture2D(divergence,uv).r; float nP=(p0+p1+p2+p3)/4.0-div; gl_FragColor=vec4(nP); }`;
    const pressure_frag = `precision highp float; uniform sampler2D pressure; uniform sampler2D velocity; uniform vec2 px; uniform float dt; varying vec2 uv; void main(){ float step=1.0; float p0=texture2D(pressure,uv+vec2(px.x*step,0.0)).r; float p1=texture2D(pressure,uv-vec2(px.x*step,0.0)).r; float p2=texture2D(pressure,uv+vec2(0.0,px.y*step)).r; float p3=texture2D(pressure,uv-vec2(0.0,px.y*step)).r; vec2 v=texture2D(velocity,uv).xy; vec2 gradP=vec2(p0-p1,p2-p3)*0.5; v=v-gradP*dt; gl_FragColor=vec4(v,0.0,1.0); }`;
    const viscous_frag = `precision highp float; uniform sampler2D velocity; uniform sampler2D velocity_new; uniform float v; uniform vec2 px; uniform float dt; varying vec2 uv; void main(){ vec2 old=texture2D(velocity,uv).xy; vec2 n0=texture2D(velocity_new,uv+vec2(px.x*2.0,0.0)).xy; vec2 n1=texture2D(velocity_new,uv-vec2(px.x*2.0,0.0)).xy; vec2 n2=texture2D(velocity_new,uv+vec2(0.0,px.y*2.0)).xy; vec2 n3=texture2D(velocity_new,uv-vec2(0.0,px.y*2.0)).xy; vec2 nv=4.0*old+v*dt*(n0+n1+n2+n3); nv/=4.0*(1.0+v*dt); gl_FragColor=vec4(nv,0.0,0.0); }`;
    const line_vert = `attribute vec3 position; uniform vec2 px; precision highp float; varying vec2 uv; void main(){ vec3 pos=position; uv=0.5+pos.xy*0.5; vec2 n=sign(pos.xy); pos.xy=abs(pos.xy)-px*1.0; pos.xy*=n; gl_Position=vec4(pos,1.0); }`;

    // FBOs
    const isIOS = /(iPad|iPhone|iPod)/i.test(navigator.userAgent);
    const floatType = isIOS ? THREE.HalfFloatType : THREE.FloatType;
    const fboOpts = { type: floatType, depthBuffer: false, stencilBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping } as const;
    const simW = Math.max(1, Math.round(resolution * cWidth));
    const simH = Math.max(1, Math.round(resolution * cHeight));
    const cellScale = new THREE.Vector2(1/simW, 1/simH);
    const boundarySpace = new THREE.Vector2().copy(cellScale);

    const makeFBO = () => new THREE.WebGLRenderTarget(simW, simH, fboOpts);
    const vel0 = makeFBO(), vel1 = makeFBO();
    const velVisc0 = makeFBO(), velVisc1 = makeFBO();
    const divFBO = makeFBO();
    const press0 = makeFBO(), press1 = makeFBO();

    // Helper: render a material to a target
    const renderPass = (mat: THREE.RawShaderMaterial, target: THREE.WebGLRenderTarget | null) => {
      const s = new THREE.Scene();
      const c = new THREE.Camera();
      s.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));
      renderer.setRenderTarget(target);
      renderer.render(s, c);
      renderer.setRenderTarget(null);
    };

    // Materials
    const advMat = new THREE.RawShaderMaterial({ vertexShader: face_vert, fragmentShader: advection_frag, uniforms: { boundarySpace: { value: cellScale }, px: { value: cellScale }, fboSize: { value: new THREE.Vector2(simW, simH) }, velocity: { value: vel0.texture }, dt: { value: dt }, isBFECC: { value: true } } });
    const forceMat = new THREE.RawShaderMaterial({ vertexShader: mouse_vert, fragmentShader: externalForce_frag, blending: THREE.AdditiveBlending, depthWrite: false, uniforms: { px: { value: cellScale }, force: { value: new THREE.Vector2(0, 0) }, center: { value: new THREE.Vector2(0, 0) }, scale: { value: new THREE.Vector2(cursorSize, cursorSize) } } });
    const viscMat = new THREE.RawShaderMaterial({ vertexShader: face_vert, fragmentShader: viscous_frag, uniforms: { boundarySpace: { value: boundarySpace }, velocity: { value: vel1.texture }, velocity_new: { value: velVisc0.texture }, v: { value: viscous }, px: { value: cellScale }, dt: { value: dt } } });
    const divMat = new THREE.RawShaderMaterial({ vertexShader: face_vert, fragmentShader: divergence_frag, uniforms: { boundarySpace: { value: boundarySpace }, velocity: { value: velVisc0.texture }, px: { value: cellScale }, dt: { value: dt } } });
    const poisMat = new THREE.RawShaderMaterial({ vertexShader: face_vert, fragmentShader: poisson_frag, uniforms: { boundarySpace: { value: boundarySpace }, pressure: { value: press0.texture }, divergence: { value: divFBO.texture }, px: { value: cellScale } } });
    const presMat = new THREE.RawShaderMaterial({ vertexShader: face_vert, fragmentShader: pressure_frag, uniforms: { boundarySpace: { value: boundarySpace }, pressure: { value: press0.texture }, velocity: { value: velVisc0.texture }, px: { value: cellScale }, dt: { value: dt } } });
    const colorMat = new THREE.RawShaderMaterial({ vertexShader: face_vert, fragmentShader: color_frag, transparent: true, depthWrite: false, uniforms: { velocity: { value: vel0.texture }, boundarySpace: { value: new THREE.Vector2() }, palette: { value: paletteTex }, bgColor: { value: bgVec4 } } });

    // Advection boundary
    const advScene = new THREE.Scene();
    const advCamera = new THREE.Camera();
    advScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), advMat));
    const bndG = new THREE.BufferGeometry();
    bndG.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]), 3));
    const bndM = new THREE.RawShaderMaterial({ vertexShader: line_vert, fragmentShader: advection_frag, uniforms: advMat.uniforms });
    const bndLine = new THREE.LineSegments(bndG, bndM);
    advScene.add(bndLine);

    // Force scene
    const forceScene = new THREE.Scene();
    const forceCamera = new THREE.Camera();
    forceScene.add(new THREE.Mesh(new THREE.PlaneGeometry(1, 1), forceMat));

    // Color output scene
    const colorScene = new THREE.Scene();
    const colorCamera = new THREE.Camera();
    colorScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), colorMat));

    function simulate() {
      // Advection
      advMat.uniforms.velocity.value = vel0.texture;
      advMat.uniforms.dt.value = dt;
      advMat.uniforms.isBFECC.value = BFECC;
      bndLine.visible = isBounce;
      renderer.setRenderTarget(vel1);
      renderer.render(advScene, advCamera);

      // External force
      const forceX = (mouseDiff.x / 2) * mouseForce;
      const forceY = (mouseDiff.y / 2) * mouseForce;
      const csX = cursorSize * cellScale.x;
      const csY = cursorSize * cellScale.y;
      const cx = Math.min(Math.max(mouseCoords.x, -1 + csX + cellScale.x * 2), 1 - csX - cellScale.x * 2);
      const cy = Math.min(Math.max(mouseCoords.y, -1 + csY + cellScale.y * 2), 1 - csY - cellScale.y * 2);
      forceMat.uniforms.force.value.set(forceX, forceY);
      forceMat.uniforms.center.value.set(cx, cy);
      forceMat.uniforms.scale.value.set(cursorSize, cursorSize);
      renderer.setRenderTarget(vel1);
      renderer.render(forceScene, forceCamera);

      // Viscous
      let vel = vel1;
      if (isViscous) {
        let fIn: THREE.WebGLRenderTarget, fOut: THREE.WebGLRenderTarget;
        for (let i = 0; i < iterationsViscous; i++) {
          if (i % 2 === 0) { fIn = velVisc0; fOut = velVisc1; } else { fIn = velVisc1; fOut = velVisc0; }
          viscMat.uniforms.velocity_new.value = fIn.texture;
          viscMat.uniforms.velocity.value = vel1.texture;
          viscMat.uniforms.v.value = viscous;
          viscMat.uniforms.dt.value = dt;
          renderPass(viscMat, fOut);
          vel = fOut;
        }
      } else {
        // Copy vel1 -> velVisc0 conceptually (just point to vel1)
        vel = vel1;
      }

      // Divergence
      divMat.uniforms.velocity.value = vel.texture;
      renderPass(divMat, divFBO);

      // Poisson
      let pOut: THREE.WebGLRenderTarget = press1;
      for (let i = 0; i < iterationsPoisson; i++) {
        const pIn = i % 2 === 0 ? press0 : press1;
        pOut = i % 2 === 0 ? press1 : press0;
        poisMat.uniforms.pressure.value = pIn.texture;
        renderPass(poisMat, pOut);
      }

      // Pressure
      presMat.uniforms.velocity.value = vel.texture;
      presMat.uniforms.pressure.value = pOut.texture;
      presMat.uniforms.dt.value = dt;
      renderPass(presMat, vel0);
    }

    let running = true;
    function loop() {
      if (!running) return;

      // Auto driver
      if (autoDemo) {
        const now = performance.now();
        const idle = now - lastUserInteraction;
        if (idle >= autoResumeDelay && !isHoverInside) {
          if (!autoActive) {
            autoActive = true;
            autoCurrent.copy(mouseCoords);
            autoLastTime = now;
            autoActivationTime = now;
          }
          isAutoActive = true;
          let dtSec = (now - autoLastTime) / 1000;
          autoLastTime = now;
          if (dtSec > 0.2) dtSec = 0.016;
          const dir = new THREE.Vector2().subVectors(autoTarget, autoCurrent);
          const dist = dir.length();
          if (dist < 0.01) {
            autoTarget.set(Math.random() * 1.6 - 0.8, Math.random() * 1.6 - 0.8);
          } else {
            dir.normalize();
            let ramp = 1;
            if (autoRampDuration > 0) {
              const t = Math.min(1, (now - autoActivationTime) / (autoRampDuration * 1000));
              ramp = t * t * (3 - 2 * t);
            }
            const step = autoSpeed * dtSec * ramp;
            const move = Math.min(step, dist);
            autoCurrent.addScaledVector(dir, move);
            mouseCoords.copy(autoCurrent);
            mouseMoved = true;
          }
        } else {
          if (autoActive) { autoActive = false; isAutoActive = false; }
        }
      }

      // Mouse update
      mouseDiff.subVectors(mouseCoords, mouseOld);
      mouseOld.copy(mouseCoords);
      if (mouseOld.x === 0 && mouseOld.y === 0) mouseDiff.set(0, 0);
      if (isAutoActive) mouseDiff.multiplyScalar(autoIntensity);

      // Common update
      delta = clock.getDelta();
      time += delta;

      // Sim
      if (isBounce) boundarySpace.set(0, 0);
      else boundarySpace.copy(cellScale);
      simulate();

      // Render color
      colorMat.uniforms.velocity.value = vel0.texture;
      renderer.setRenderTarget(null);
      renderer.clear(true, true, true);
      renderer.render(colorScene, colorCamera);

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);

    // Observers
    const io = new IntersectionObserver(entries => {
      const entry = entries[0];
      const vis = entry.isIntersecting && entry.intersectionRatio > 0;
      isVisibleRef.current = vis;
      if (vis && !document.hidden) { if (!running) { running = true; loop(); } }
      else { running = false; if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; } }
    }, { threshold: [0, 0.01, 0.1] });
    io.observe(container);

    const onVisibility = () => {
      if (document.hidden) { running = false; if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; } }
      else if (isVisibleRef.current) { if (!running) { running = true; loop(); } }
    };
    document.addEventListener('visibilitychange', onVisibility);

    const ro = new ResizeObserver(() => {
      const r = container.getBoundingClientRect();
      cWidth = Math.max(1, Math.floor(r.width));
      cHeight = Math.max(1, Math.floor(r.height));
      renderer.setSize(cWidth, cHeight, false);
    });
    ro.observe(container);

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      container.ownerDocument?.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisibility);
      io.disconnect();
      ro.disconnect();
      try {
        if (el.parentNode) el.parentNode.removeChild(el);
        renderer.dispose();
        renderer.forceContextLoss();
      } catch { /* noop */ }
    };
  }, [BFECC, cursorSize, dt, isBounce, isViscous, iterationsPoisson, iterationsViscous, mouseForce, resolution, viscous, colors, autoDemo, autoSpeed, autoIntensity, takeoverDuration, autoResumeDelay, autoRampDuration]);

  return (
    <div
      ref={mountRef}
      className={`w-full h-full relative overflow-hidden pointer-events-none touch-none ${className || ''}`}
      style={style}
    />
  );
}
