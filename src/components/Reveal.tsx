import React from "react";
import { useReveal } from "@/hooks/useReveal";

export default function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{
        transition: "all 900ms cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(40px)",
        filter: visible ? "blur(0px)" : "blur(6px)",
      }}
    >
      {children}
    </div>
  );
}