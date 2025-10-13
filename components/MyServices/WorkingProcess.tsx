"use client";
import { useTranslations } from "next-intl";
import { Lightbulb, Wrench, Bug, Rocket, PencilRuler } from "lucide-react";

// Icon mapping for each step
const icons = [Lightbulb, PencilRuler, Wrench, Bug, Rocket];

// Steps data to be i18n-friendly
const STEPS = [
  { key: "analysis" },
  { key: "design" },
  { key: "coding" },
  { key: "testing" },
  { key: "deployment" },
];

export default function WorkingProcess() {
  const t = useTranslations("WorkingProcess");
  return (
    <section className="py-16 bg-background">
      <div className=" text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
        <div className="w-16 mx-auto h-0.5 bg-primary mb-6" />
        <p className="mb-10 text-muted-foreground text-base md:text-lg">
          {t("subtitle")}
        </p>
        <div className="flex flex-wrap gap-y-10 md:gap-y-0 md:gap-x-2 justify-center">
          {STEPS.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={step.key}
                className="flex flex-col items-center flex-1 max-w-xs px-2"
                style={{ minWidth: 200 }}
              >
                <div className="relative mb-4">
                  <span className="block rounded-full bg-primary p-6 md:p-8">
                    <Icon className="w-8 h-8 text-white" />
                  </span>
                  <span className="absolute -top-2 -right-2 bg-neutral-700 text-white rounded-full w-7 h-7 flex items-center justify-center font-semibold border-2 border-white text-sm shadow">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {t(`steps.${step.key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
