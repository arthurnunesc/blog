"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleCopy();
      }}
      className="mx-2 rounded p-1 transition-colors sm:hover:bg-zinc-200 dark:sm:hover:bg-zinc-700"
    >
      {copied ? (
        <Check strokeWidth={1.4} className="size-4 text-green-600" />
      ) : (
        <Copy strokeWidth={1.4} className="size-4 text-black dark:text-white" />
      )}
    </button>
  );
}
