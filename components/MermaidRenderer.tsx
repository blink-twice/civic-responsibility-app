"use client";

import { useEffect, useRef, useState } from "react";

type MermaidRendererProps = {
  chart: string;
};

const MermaidRenderer = ({ chart }: MermaidRendererProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const renderChart = async () => {
      try {
        const mermaid = (await import("mermaid")).default;

        mermaid.initialize({
          startOnLoad: false,
          theme: "default",
          securityLevel: "loose",
        });

        const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);

        if (isMounted && containerRef.current) {
          containerRef.current.innerHTML = svg;
          setError(null);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) {
          setError("Failed to render Mermaid diagram.");
        }
      }
    };

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  if (error) {
    return (
      <div className="rounded-md border border-rose-300 bg-rose-50 p-4 text-sm text-rose-800">
        {error}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div ref={containerRef} />
    </div>
  );
};

export default MermaidRenderer;