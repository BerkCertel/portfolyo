"use client";
import { useTranslations } from "next-intl";
import SplitText from "@/components/SplitText";
import React from "react";

export function useTimelineData() {
  const t = useTranslations("TimelinePage");
  const steps = t.raw("steps") as { title: string; content: string }[];

  // ReactNode olarak SplitText ile döndür
  return steps.map((step, idx) => ({
    id: (idx + 1).toString(),
    title: step.title,
    content: (
      <div className="text-xs md:text-sm max-w-2xl">
        <SplitText
          text={step.content}
          className="mb-2"
          tag="p"
          splitType="chars"
          delay={20}
          duration={0.6}
          ease="power3.out"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      </div>
    ),
  }));
}
