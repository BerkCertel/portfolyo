"use client";

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
import LogoLoop from "../LogoLoop";
import { useTheme } from "next-themes";
import Image from "next/image";

// Alternative with image sources
// const imageLogos = [
//   {
//     src: "/better-auth-logo.png",
//     alt: "Company 1",
//     href: "https://company1.com",
//   },
// ];

export default function LogoLoopSection() {
  const theme = useTheme();

  const techLogos = [
    { node: <SiHtml5 />, title: "HTML5" },

    { node: <SiCss3 />, title: "CSS3" },
    { node: <SiJavascript />, title: "JavaScript" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
    },
    { node: <SiReact />, title: "React" },
    { node: <SiNextdotjs />, title: "Next.js" },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
    },
    {
      node: <SiDrizzle />,
      title: "Drizzle",
    },
    {
      node: <SiPrisma />,
      title: "Prisma",
    },
    {
      node: <SiMongodb />,
      title: "MongoDB",
    },
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
          alt="PostgreSQL"
          height={80}
          width={80}
          className="bg-none"
        />
      ),
      title: "PostgreSQL",
    },
  ];

  return (
    <div className="overflow-hidden h-[200px] relative flex flex-col items-center justify-center gap-5 ">
      <LogoLoop
        logos={techLogos}
        speed={70}
        direction="left"
        logoHeight={34}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor={theme?.theme == "dark" ? "#000000" : "#ffffff"}
        ariaLabel="Technology partners"
      />
    </div>
  );
}
