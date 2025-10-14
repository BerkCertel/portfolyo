// components/WhoAmI.tsx
"use client";

import { useTranslations } from "next-intl";
import BlurText from "@/components/BlurText";
import PageProvider from "../providers/PageProvider";

export default function WhoAmI() {
  const t = useTranslations();

  return (
    <PageProvider>
      <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-8">
        <BlurText
          text={t("sectionTitle")}
          delay={100}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-center"
        />
        <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-6">
          <BlurText
            text={t("aboutMe")}
            delay={100}
            animateBy="words"
            direction="top"
            className="text-lg md:text-xl text-muted-foreground text-center"
          />
        </div>
      </section>
    </PageProvider>
  );
}
