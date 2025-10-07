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

export default function IcodeWith() {
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

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
      node: mounted ? (
        <Image
          src={
            theme === "dark"
              ? "/better-auth-logo.png"
              : "/better-auth-logo-light.png"
          }
          alt="Better Auth"
          height={34}
          width={34}
          className="object-contain"
        />
      ) : (
        <div className="size-[34px]" />
      ),
      title: "Better Auth",
      description: "Modern kimlik doğrulama altyapısı.",
    },
  ];

  return (
    <section className="w-full">
      <div className="py-10 md:py-20 px-4 ">
        <div>
          <div className="flex flex-col items-center justify-center py-10 bg-background">
            <div className="w-full  text-center px-4">
              <BlurText
                text="Hangi Teknolojilerle Kodluyorum?"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold  mb-6 leading-tight"
              />

              <BlurText
                text="Portfolyomda yenilikçi, modern ve verimli projeler geliştirirken kullandığım teknolojiler aşağıda kategorilere ayrılmış şekilde yer alıyor. Her bir teknolojiyle yazılımı daha güçlü, daha akıllı ve kullanıcı dostu bir hale getiriyorum."
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
            <TechSection title="Frontend">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
