"use client";

import Marquee from "react-fast-marquee";
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
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function LogoLoopSection() {
  const theme = useTheme();

  const techLogos = [
    { node: <SiHtml5 />, title: "HTML5" },
    { node: <SiCss3 />, title: "CSS3" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <SiTypescript />, title: "TypeScript" },
    { node: <SiReact />, title: "React" },
    { node: <SiNextdotjs />, title: "Next.js" },
    { node: <SiTailwindcss />, title: "Tailwind CSS" },
    { node: <SiDrizzle />, title: "Drizzle" },
    { node: <SiPrisma />, title: "Prisma" },
    { node: <SiMongodb />, title: "MongoDB" },
    { node: <FaNode />, title: "Node.js" },
    { node: <SiExpress />, title: "Express.js" },
    { node: <SiJsonwebtokens />, title: "JWT" },
    { node: <SiClerk />, title: "Clerk" },
    { node: <SiShadcnui />, title: "shadcn/ui" },
    { node: <SiPrimereact />, title: "PrimeReact" },
    { node: <BiLogoPostgresql />, title: "PostgreSQL" },
    {
      node: (
        <Image
          src={
            theme?.theme === "dark"
              ? "/better-auth-logo.png"
              : "/better-auth-logo-light.png"
          }
          alt="Better Auth"
          height={40}
          width={40}
        />
      ),
      title: "Better Auth",
    },
  ];

  return (
    <Marquee gradient={false} speed={40} className="py-8">
      {techLogos.map((logo, idx) => (
        <div key={idx} className="mx-8 flex items-center justify-center">
          <div className="text-black dark:text-white text-5xl">{logo.node}</div>
        </div>
      ))}
    </Marquee>
  );
}
