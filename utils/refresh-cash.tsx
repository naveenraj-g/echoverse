"use client";

import { useEffect } from "react";

export function RefreshCashe({ check }: { check: () => Promise<void> }) {
  useEffect(() => {
    const onFocus = () => check();

    window.addEventListener("focus", onFocus);

    return () => {
      window.removeEventListener("focus", onFocus);
    };
  });

  return null;
}
