"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";
import PageProvider from "@/components/providers/PageProvider";

// About data (i18n keys)
const aboutData = {
  image: "/profile-fotoo.jpg",
  nameKey: "AboutPage.name",
  titleKey: "AboutPage.title",
  bioKey: "AboutPage.bio",
  educationKey: "AboutPage.education",
};

export default function AboutPage() {
  const t = useTranslations();

  // Education data from i18n
  const education = t.raw(aboutData.educationKey) as {
    degree: string;
    school: string;
    period: string;
  }[];

  return (
    <PageProvider>
      <section className="py-16 md:py-30  bg-background flex items-center justify-center">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left Side - Image with border */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center items-center"
          >
            <div className="relative w-full flex items-center justify-center bg-background">
              {/* Yükseklik ve genişlik sabit, responsive için md: ile büyüyor */}

              <Image
                src={aboutData.image}
                alt={t(aboutData.nameKey)}
                width={450}
                height={450}
                className="hidden md:block object-cover border rounded-md p-2"
              />
            </div>
          </motion.div>

          {/* Right Side - Bio & Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex flex-col justify-center gap-8"
          >
            {/* Name & Title & Bio */}
            <Card>
              <CardContent className="p-6 flex flex-col items-start">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                  {t(aboutData.nameKey)}
                </h2>
                <span className="text-lg text-primary font-semibold mb-3">
                  {t(aboutData.titleKey)}
                </span>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {t(aboutData.bioKey)}
                </p>
              </CardContent>
            </Card>
            {/* Education */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t("AboutPage.educationTitle")}
                </h3>
                <div className="space-y-4">
                  {education.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                      className="border-l-2 border-primary pl-4"
                    >
                      <h4 className="font-semibold text-foreground text-base md:text-lg">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-primary">
                        {edu.school} • {edu.period}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </PageProvider>
  );
}
