"use client";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "motion/react";

import Image from "next/image";
import { ModeToggle } from "../mode-toggle";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const supportedLocales = [
    { code: "tr", label: "Türkçe" },
    { code: "en", label: "English" },
  ];

  const changeLanguage = (lang: string) => {
    router.push(pathname, { locale: lang });
    setMenuState(false);
  };

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed z-100 top-0 right-0 left-0 w-full  transition-colors duration-150 max-w-screen",
          scrolled && " backdrop-blur-xl"
        )}
      >
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Image src="/logo.png" alt="logo" width={40} height={40} />

                {/* <span className="text-2xl font-bold">Berk C</span> */}
              </Link>

              <div className="flex items-center gap-4">
                {/* Mobile toggle and lang button */}
                <div className="flex items-center gap-2  lg:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon-sm">
                        <Globe className="size-[1.2rem]" />
                        <span className="sr-only">Change language</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {supportedLocales.map((lang) => (
                        <DropdownMenuItem
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={cn(
                            "cursor-pointer",
                            locale === lang.code && "bg-accent"
                          )}
                        >
                          {lang.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <ModeToggle />
                </div>
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <ul className="flex  gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              {/* Desktop Menu items */}
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Desktop toggle and lang button */}
              <div className="flex  w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <div className="hidden lg:flex items-center gap-2">
                  <ModeToggle />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon-sm">
                        <Globe className="size-[1.2rem]" />
                        <span className="sr-only">Change language</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center">
                      {supportedLocales.map((lang) => (
                        <DropdownMenuItem
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={cn(
                            "cursor-pointer",
                            locale === lang.code && "bg-accent"
                          )}
                        >
                          {lang.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
