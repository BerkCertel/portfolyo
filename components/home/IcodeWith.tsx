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
import LogoLoop from "../LogoLoop";
import { useTheme } from "next-themes";

// Frontend alt başlıklarıyla sıralanmış
const frontendFrameworks = [
  {
    node: <SiReact />,
    title: "React",
    description: "Yenilikçi ve component tabanlı web projeleri.",
  },
  {
    node: <SiNextdotjs />,
    title: "Next.js",
    description:
      "Sunucu tarafı render ve hızlı geliştirme için modern framework.",
  },
];

const frontendUI = [
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    description: "Hızlı ve esnek UI geliştirme için utility-first CSS.",
  },
  {
    node: <SiShadcnui />,
    title: "shadcn/ui",
    description: "Gelişmiş ve erişilebilir React UI bileşenleri.",
  },
  {
    node: <SiPrimereact />,
    title: "PrimeReact",
    description: "Kapsamlı ve güçlü React UI component kütüphanesi.",
  },
];

const frontendState = [
  {
    node: <SiTypescript />,
    title: "TypeScript",
    description: "Güvenli ve ölçeklenebilir kod için tip desteği.",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    description: "Dinamik ve interaktif kullanıcı deneyimi için temel dil.",
  },
  {
    node: <SiRedux />,
    title: "Redux",
    description: "Global state yönetimi için güçlü ve popüler bir kütüphane.",
  },
];

const frontendCore = [
  {
    node: <SiHtml5 />,
    title: "HTML5",
    description: "Modern web uygulamalarının temel yapı taşı.",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
    description: "Duyarlı ve şık arayüzler için stil ve animasyon.",
  },
];

// Backend
const backendTech = [
  {
    node: <FaNode />,
    title: "Node.js",
    description: "Yüksek performanslı sunucu tarafı JavaScript.",
  },
  {
    node: <SiExpress />,
    title: "Express.js",
    description: "Hafif ve hızlı backend geliştirme.",
  },
];

// ORM & Database
const ormDatabaseTech = [
  {
    node: <SiDrizzle />,
    title: "Drizzle",
    description: "Veritabanı yönetimi için modern ORM.",
  },
  {
    node: <SiPrisma />,
    title: "Prisma",
    description: "Tip güvenli ve kolay veritabanı sorguları.",
  },
  {
    node: <SiMongodb />,
    title: "MongoDB",
    description: "NoSQL veritabanı ile esnek veri yönetimi.",
  },
  {
    node: <BiLogoPostgresql />,
    title: "PostgreSQL",
    description: "Güçlü ve gelişmiş açık kaynaklı ilişkisel veritabanı.",
  },
];

// Auth & UI
const authUiTech = [
  {
    node: <SiJsonwebtokens />,
    title: "JWT",
    description: "Güvenli kimlik doğrulama ve oturum yönetimi.",
  },
  {
    node: <SiClerk />,
    title: "Clerk",
    description: "Modern kimlik yönetimi ve kullanıcı oturumları.",
  },
  {
    node: (
      <Image
        src={
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "/better-auth-logo.png"
            : "/better-auth-logo-light.png"
        }
        alt="Better Auth"
        height={34}
        width={34}
        className="object-contain"
      />
    ),
    title: "Better Auth",
    description: "Modern kimlik doğrulama altyapısı.",
  },
];

// Tüm logoları logo kaydırıcı için birleştir
const allLogos = [
  ...frontendFrameworks,
  ...frontendUI,
  ...frontendState,
  ...frontendCore,
  ...backendTech,
  ...ormDatabaseTech,
  ...authUiTech,
];

export default function IcodeWith() {
  const theme = useTheme();

  return (
    <section>
      <div className="py-10 md:py-20">
        <div>
          <div className="text-center mb-10">
            <h2 className="text-balance text-3xl font-bold md:text-4xl">
              I Code With
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Portfolyomda yenilikçi, modern ve verimli projeler geliştirirken
              kullandığım teknolojiler aşağıda kategorilere ayrılmış şekilde yer
              alıyor. Her bir teknolojiyle yazılımı daha güçlü, daha akıllı ve
              kullanıcı dostu bir hale getiriyorum.
            </p>
          </div>
          <div className="overflow-hidden h-[120px] relative flex flex-col items-center justify-center gap-3 mb-10">
            <LogoLoop
              logos={allLogos}
              speed={70}
              direction="left"
              logoHeight={34}
              gap={30}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor={theme?.theme == "dark" ? "#000000" : "#ffffff"}
              ariaLabel="Kullandığım Teknolojiler"
            />
          </div>
          {/* Satır satır, mantıklı başlıklarla */}
          <div className="flex flex-col gap-5">
            <TechSection title="Frontend">
              <div className="flex flex-wrap md:flex-nowrap gap-2 w-full">
                <TechSubSection
                  title="Core Web Technologies"
                  techList={frontendCore}
                />
                <TechSubSection
                  title="Frameworks / Library"
                  techList={frontendFrameworks}
                />
                <TechSubSection title="UI Libraries" techList={frontendUI} />
                <TechSubSection
                  title="State Management & Language"
                  techList={frontendState}
                />
              </div>
            </TechSection>
            <div className="flex flex-wrap justify-between gap-2">
              <TechSection title="Backend">
                <TechSubSection techList={backendTech} />
              </TechSection>
              <TechSection title="ORM & Database">
                <TechSubSection techList={ormDatabaseTech} />
              </TechSection>
              <TechSection title="Auth & UI">
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
  <div>
    <h3 className="text-xl font-bold mb-4 text-center bg-primary p-1 rounded-lg">
      {title}
    </h3>
    <div className="flex flex-col gap-2">{children}</div>
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
  <div>
    {title && (
      <h4 className="text-base font-semibold mb-2 ml-2 min-w-full">{title}</h4>
    )}
    <div className="flex flex-row flex-wrap gap-2">
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
    <Card className="p-3 rounded-lg w-[160px] min-h-[110px] flex-shrink-0">
      <div className="relative flex flex-col items-center">
        <div className="*:size-8 mb-1">{children}</div>
        <div className="space-y-1 py-1 text-center">
          <h4 className="text-xs font-semibold">{title}</h4>
          <p className="text-muted-foreground line-clamp-2 text-xs">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};
