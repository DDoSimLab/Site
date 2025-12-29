"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidDiagramProps {
  chart: string;
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const [isRendered, setIsRendered] = useState(false);
  const idRef = useRef(
    `mermaid-${Math.random().toString(36).substring(2, 11)}`
  );

  useEffect(() => {
    if (!mermaidRef.current || isRendered) return;

    // Detect dark mode
    const isDark = document.documentElement.classList.contains("dark");
    const theme = isDark ? "dark" : "default";

    mermaid.initialize({
      startOnLoad: false,
      theme: theme,
      securityLevel: "loose",
      fontFamily: "inherit",
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: "basis",
      },
    });

    const renderMermaid = async () => {
      if (mermaidRef.current && !isRendered) {
        try {
          const { svg } = await mermaid.render(idRef.current, chart);
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = svg;
            setIsRendered(true);
          }
        } catch (error) {
          console.error("Mermaid rendering error:", error);
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = `<div class="text-red-500 dark:text-red-400 p-4 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-800">
              <p class="font-semibold mb-2">Error rendering diagram</p>
              <p class="text-sm">${
                error instanceof Error ? error.message : "Unknown error"
              }</p>
            </div>`;
          }
        }
      }
    };

    renderMermaid();
  }, [chart, isRendered]);

  return (
    <div className="my-10 flex justify-center">
      <div
        ref={mermaidRef}
        className="mermaid-container w-full max-w-full overflow-x-auto bg-muted/30 dark:bg-muted/20 p-6 rounded-lg border border-border"
      />
    </div>
  );
}
