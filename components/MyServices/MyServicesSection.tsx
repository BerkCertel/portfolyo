"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { myServicesData } from "@/constant/MyServicesData";
import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import BlurText from "../BlurText";
import { motion } from "framer-motion";

export default function MyServicesSection() {
  const t = useTranslations("MyServices");

  return (
    <section className="py-16 md:py-24 dark:bg-transparent">
      <div className="px-3 ">
        <div className="flex flex-col items-center justify-center mb-5 ">
          <div className="flex items-center justify-center">
            <BlurText
              text={t("sectionTitle")}
              delay={100}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold  mb-6 leading-tight"
            />
            <Sparkles className="inline-block size-8 " />
          </div>

          <BlurText
            text={t("sectionDescription")}
            delay={100}
            animateBy="words"
            direction="top"
            className="text-center text-muted-foreground text-base md:text-lg mt-2 font-medium"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center md:mt-16 ">
          {myServicesData.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className=" group shadow-zinc-950/5 h-[380px]">
                  <CardHeader>
                    <CardDecorator>
                      <Icon className="size-6" aria-hidden />
                    </CardDecorator>
                    <h3 className="mt-2 font-medium">
                      {t(`items.${service.key}.title`)}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className=" text-sm">{t(`items.${service.key}.desc`)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
