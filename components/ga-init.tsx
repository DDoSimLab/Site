"use client";

import { useEffect } from "react";
import { initGA } from "@/lib/ga";

export function GAInit() {
  useEffect(() => {
    initGA();
  }, []);

  return null;
}
