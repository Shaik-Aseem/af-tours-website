"use client";

import * as React from "react";

type RevealSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function RevealSection({ children, className }: RevealSectionProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // Fallback: show immediately if IntersectionObserver is not available
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const base = "reveal-section";
  const visibleClass = visible ? " reveal-section--visible" : "";
  const extra = className ? ` ${className}` : "";

  return (
    <div ref={ref} className={`${base}${visibleClass}${extra}`}>
      {children}
    </div>
  );
}

