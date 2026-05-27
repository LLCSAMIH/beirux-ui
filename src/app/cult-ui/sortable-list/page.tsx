"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import {
  SortableList,
  SortableListItem,
  type Item,
} from "@/components/ui/sortable-list";
import { BackLink } from "@/components/back-link";

const initialItems: Item[] = [
  {
    id: 1,
    text: "Design homepage",
    checked: false,
    description: "Create wireframes and visual design for the landing page.",
  },
  {
    id: 2,
    text: "Build API routes",
    checked: false,
    description: "Set up REST endpoints for user authentication and data.",
  },
  {
    id: 3,
    text: "Write tests",
    checked: false,
    description: "Unit tests for core business logic and integration tests.",
  },
  {
    id: 4,
    text: "Deploy to production",
    checked: false,
    description: "Push to Vercel, verify environment variables, run smoke tests.",
  },
  {
    id: 5,
    text: "Update documentation",
    checked: false,
    description: "Document API changes and update the README with setup instructions.",
  },
];

function SortableListDemo() {
  const [items, setItems] = useState<Item[]>(initialItems);

  const handleComplete = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <SortableList
      items={items}
      setItems={setItems}
      onCompleteItem={handleComplete}
      renderItem={(item, order, onComplete, onRemove) => (
        <SortableListItem
          key={item.id}
          item={item}
          order={order}
          onCompleteItem={onComplete}
          onRemoveItem={onRemove}
          handleDrag={() => {}}
          isExpanded={false}
          renderExtra={(item) => (
            <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
              {item.description}
            </p>
          )}
        />
      )}
    />
  );
}

function CompactListDemo() {
  const [items, setItems] = useState<Item[]>([
    { id: 10, text: "Buy groceries", checked: false, description: "" },
    { id: 11, text: "Call dentist", checked: true, description: "" },
    { id: 12, text: "Review PR #42", checked: false, description: "" },
  ]);

  const handleComplete = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <SortableList
      items={items}
      setItems={setItems}
      onCompleteItem={handleComplete}
      renderItem={(item, order, onComplete, onRemove) => (
        <SortableListItem
          key={item.id}
          item={item}
          order={order}
          onCompleteItem={onComplete}
          onRemoveItem={onRemove}
          handleDrag={() => {}}
          isExpanded={false}
        />
      )}
    />
  );
}

export default function SortableListPage() {
  return (
    <div className="dark min-h-screen bg-[#18181b] text-white">
      <BackLink href="/cult-ui" label="Cult UI" />
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-3">
            Sortable List
          </h1>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            Cult UI
          </p>
        </div>

        <div className="space-y-16">
          {/* Task list */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Task List with Descriptions
            </h2>
            <p className="text-sm text-neutral-400 mb-8">
              Drag items to reorder. Check items to mark complete, then
              swipe to reveal the delete button.
            </p>
            <div className="max-w-md mx-auto">
              <SortableListDemo />
            </div>
          </section>

          {/* Compact list */}
          <section>
            <h2 className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-6">
              Compact List
            </h2>
            <div className="max-w-md mx-auto">
              <CompactListDemo />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
