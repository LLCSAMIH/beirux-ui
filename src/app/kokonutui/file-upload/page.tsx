"use client";

export const dynamic = "force-dynamic";

import FileUpload from "@/components/kokonutui/file-upload";
import { BackLink } from "@/components/back-link";

export default function FileUploadPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b]">
      <BackLink href="/kokonutui" label="KokonutUI" />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
          KokonutUI
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
          File Upload
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mb-6">
          A drag-and-drop file upload zone with animated SVG illustration,
          colorful spinning progress rings during upload, file type/size
          validation, and error toasts.
        </p>
        <div className="flex gap-3 text-xs text-neutral-500">
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            motion
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            drag and drop
          </span>
          <span className="rounded-full border border-neutral-800 px-3 py-1">
            upload
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Default (5MB limit)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <FileUpload
              onUploadSuccess={(file) =>
                console.log("Uploaded:", file.name)
              }
            />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Images Only (2MB limit)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <FileUpload
              acceptedFileTypes={["image/png", "image/jpeg", "image/gif"]}
              maxFileSize={2 * 1024 * 1024}
            />
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-32">
        <section>
          <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-8">
            Slow Upload (5 seconds)
          </h2>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 flex items-center justify-center">
            <FileUpload uploadDelay={5000} />
          </div>
        </section>
      </div>
    </div>
  );
}
