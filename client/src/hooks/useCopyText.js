import { useState } from "react";

export const useCopyText = (resetMs = 2000) => {
  const [copied, setCopied] = useState(false);

  const copy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), resetMs);
      return true;
    } catch {
      return false;
    }
  };

  return { copied, copy };
};
