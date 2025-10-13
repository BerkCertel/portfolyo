"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { NAV_LINKS } from "@/constant/NavLink";

const CONTACT_INFO = {
  mail: "m.berkcertel@outlook.com",
  phone: "+90 546 546 5857",
};

const SOCIAL_LINKS = [
  {
    key: "github",
    icon: <FaGithub className="size-6" />,
    url: "https://github.com/BerkCertel",
  },
  {
    key: "linkedin",
    icon: <FaLinkedin className="size-6" />,
    url: "https://www.linkedin.com/in/mehmet-berk-certel-38223b254/",
  },
  {
    key: "instagram",
    icon: <FaInstagram className="size-6" />,
    url: "https://www.instagram.com/lberkcertel/",
  },
];

export default function FooterSection() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("NavLinks");

  return (
    <footer className="border-b bg-white pt-10 dark:bg-transparent border-t">
      <div className="mx-auto max-w-7xl pb-5 px-4 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
          {/* Logo & Contact Info */}
          <div className="flex flex-col items-center md:items-start md:w-1/3">
            <Link
              href="/"
              aria-label="go home"
              className="flex items-center gap-2 font-bold text-2xl text-primary"
            >
              <Image
                src="/Logo.png"
                alt="Logo"
                width={60}
                height={60}
                priority
              />
              <span className="hidden sm:inline">Berk Certel</span>
            </Link>
            <div className="flex flex-col items-center md:items-start text-xs text-muted-foreground space-y-1">
              <a
                href={`mailto:${CONTACT_INFO.mail}`}
                className="hover:text-primary transition"
              >
                {t("mail")}: {CONTACT_INFO.mail}
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="hover:text-primary transition"
              >
                {t("phone")}: {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:w-1/3 my-6 md:my-0">
            {NAV_LINKS.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className="text-muted-foreground hover:text-primary font-medium px-2 py-1 rounded transition duration-150"
              >
                {tNav(key)}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 md:w-1/3 justify-center md:justify-end">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.key}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(`social.${item.key}`)}
                className="text-muted-foreground hover:text-primary block"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 border-t">
        <div className="text-center px-4 md:px-8 lg:px-10 gap-4">
          <span className="text-muted-foreground text-center text-sm">
            © {new Date().getFullYear()} Berk Certel, {t("copyright")}
          </span>
        </div>
      </div>
    </footer>
  );
}
