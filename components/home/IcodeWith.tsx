"use client";

import { Card } from "@/components/ui/card";
import * as React from "react";
import Image from "next/image";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDrizzle,
  SiPrisma,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJsonwebtokens,
  SiClerk,
  SiShadcnui,
  SiPrimereact,
  SiRedux,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { useTheme } from "next-themes";
import LogoLoopSection from "./LogoLoopSection";
import BlurText from "../BlurText";
import { useTranslations } from "next-intl";

export default function IcodeWith() {
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();
  const t = useTranslations("IcodeWithPage"); // <--- Kategoriyle kullan!

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Frontend alt başlıklarıyla sıralanmış
  const frontendFrameworks = [
    {
      node: <SiReact />,
      title: t("React.title"),
      description: t("React.desc"),
    },
    {
      node: <SiNextdotjs />,
      title: t("Nextjs.title"),
      description: t("Nextjs.desc"),
    },
  ];

  const frontendUI = [
    {
      node: <SiTailwindcss />,
      title: t("TailwindCSS.title"),
      description: t("TailwindCSS.desc"),
    },
    {
      node: <SiShadcnui />,
      title: t("shadcnui.title"),
      description: t("shadcnui.desc"),
    },
    {
      node: <SiPrimereact />,
      title: t("PrimeReact.title"),
      description: t("PrimeReact.desc"),
    },
  ];

  const frontendState = [
    {
      node: <SiTypescript />,
      title: t("TypeScript.title"),
      description: t("TypeScript.desc"),
    },
    {
      node: <SiJavascript />,
      title: t("JavaScript.title"),
      description: t("JavaScript.desc"),
    },
    {
      node: <SiRedux />,
      title: t("Redux.title"),
      description: t("Redux.desc"),
    },
  ];

  const frontendCore = [
    {
      node: <SiHtml5 />,
      title: t("HTML5.title"),
      description: t("HTML5.desc"),
    },
    {
      node: <SiCss3 />,
      title: t("CSS3.title"),
      description: t("CSS3.desc"),
    },
  ];

  // Backend
  const backendTech = [
    {
      node: <FaNode />,
      title: t("Nodejs.title"),
      description: t("Nodejs.desc"),
    },
    {
      node: <SiExpress />,
      title: t("Expressjs.title"),
      description: t("Expressjs.desc"),
    },
  ];

  // ORM & Database
  const ormDatabaseTech = [
    {
      node: <SiDrizzle />,
      title: t("Drizzle.title"),
      description: t("Drizzle.desc"),
    },
    {
      node: <SiPrisma />,
      title: t("Prisma.title"),
      description: t("Prisma.desc"),
    },
    {
      node: <SiMongodb />,
      title: t("MongoDB.title"),
      description: t("MongoDB.desc"),
    },
    {
      node: <BiLogoPostgresql />,
      title: t("PostgreSQL.title"),
      description: t("PostgreSQL.desc"),
    },
  ];

  const authUiTech = [
    {
      node: <SiJsonwebtokens />,
      title: t("JWT.title"),
      description: t("JWT.desc"),
    },
    {
      node: <SiClerk />,
      title: t("Clerk.title"),
      description: t("Clerk.desc"),
    },
    {
      node: mounted ? (
        <Image
          src={
            theme === "dark"
              ? "/better-auth-logo.png"
              : "/better-auth-logo-light.png"
          }
          alt={t("BetterAuth.title")}
          height={34}
          width={34}
          className="object-contain"
        />
      ) : (
        <div className="size-[34px]" />
      ),
      title: t("BetterAuth.title"),
      description: t("BetterAuth.desc"),
    },
  ];

  return (
    <section className="w-full">
      <div className="py-10 md:py-20 px-4 ">
        <div>
          <div className="flex flex-col items-center justify-center py-10 bg-background">
            <div className="w-full  text-center px-4">
              <BlurText
                text={t("title")}
                delay={150}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold  mb-6 leading-tight"
              />

              <BlurText
                text={t("desc")}
                delay={100}
                animateBy="words"
                direction="top"
                className="text-muted-foreground text-base md:text-lg mt-2 font-medium"
              />
            </div>
          </div>
          <div className="overflow-hidden h-[100px] md:h-[120px] relative flex flex-col items-center justify-center gap-3 mb-10">
            <LogoLoopSection />
          </div>
          <div className="flex flex-col gap-6 lg:gap-8">
            <TechSection title={t("Frontend")}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <TechSubSection
                  title={t("CoreWebTechnologies")}
                  techList={frontendCore}
                />
                <TechSubSection
                  title={t("FrameworksLibrary")}
                  techList={frontendFrameworks}
                />
                <TechSubSection
                  title={t("UILibraries")}
                  techList={frontendUI}
                />
                <TechSubSection
                  title={t("StateManagementLanguage")}
                  techList={frontendState}
                />
              </div>
            </TechSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <TechSection title={t("Backend")}>
                <TechSubSection techList={backendTech} />
              </TechSection>
              <TechSection title={t("ORM_Database")}>
                <TechSubSection techList={ormDatabaseTech} />
              </TechSection>
              <TechSection title={t("Auth_UI")}>
                <TechSubSection techList={authUiTech} />
              </TechSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TechSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="h-full">
    <h3 className="text-lg md:text-xl font-bold mb-4 text-center bg-primary p-2 rounded-lg">
      {title}
    </h3>
    <div className="flex flex-col gap-3">{children}</div>
  </div>
);

const TechSubSection = ({
  title,
  techList,
}: {
  title?: string;
  techList: Array<{
    node: React.ReactNode;
    title: string;
    description: string;
  }>;
}) => (
  <div className="h-full">
    {title && (
      <h4 className="text-sm md:text-base font-semibold mb-3 ml-1">{title}</h4>
    )}
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
      {techList.map((tech) => (
        <TechCard
          key={tech.title}
          title={tech.title}
          description={tech.description}
        >
          {tech.node}
        </TechCard>
      ))}
    </div>
  </div>
);

const TechCard = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className="p-3 rounded-lg w-full min-h-[110px] md:min-h-[120px] flex">
      <div className="relative flex flex-col items-center justify-start w-full">
        <div className="*:size-7 md:*:size-8 mb-2">{children}</div>
        <div className="space-y-1 text-center flex-1 flex flex-col justify-start">
          <h4 className="text-xs md:text-sm font-semibold leading-tight">
            {title}
          </h4>
          <p className="text-muted-foreground line-clamp-2 text-[10px] md:text-xs leading-tight">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};
