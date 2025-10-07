import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const links = [
  {
    group: "Product",
    items: [
      {
        title: "Features",
        href: "#",
      },
    ],
  },
  {
    group: "Solution",
    items: [
      {
        title: "Startup",
        href: "#",
      },
    ],
  },
  {
    group: "Company",
    items: [
      {
        title: "About",
        href: "#",
      },
    ],
  },
];

const socialLinks = [
  {
    label: "GitHub",
    icon: <FaGithub className="size-6" />,
    url: "https://github.com/BerkCertel", // kendi github url'inle değiştir
  },
  {
    label: "Instagram",
    icon: <FaInstagram className="size-6" />,
    url: "https://instagram.com/berkcertel", // kendi instagram url'inle değiştir
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin className="size-6" />,
    url: "https://linkedin.com/in/berkcertel", // kendi linkedin url'inle değiştir
  },
];

export default function FooterSection() {
  return (
    <footer className="border-b bg-white pt-10 md:pt-20 dark:bg-transparent border-t ">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row   gap-5 ">
          <div className="w-full md:w-1/2 flex items-center justify-center md:grid md:grid-cols-1">
            <Link
              href="/"
              aria-label="go home"
              className=" size-fit flex justify-center items-center gap-2 font-bold text-2xl text-primary "
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={80}
                priority
              />
              <span>Berk Certel</span>
            </Link>
          </div>

          <div className="w-full md:w-1/2 flex justify-between gap-4  ">
            {links.map((link, index) => (
              <div key={index} className="space-y-4 text-sm">
                <span className="block font-medium">{link.group}</span>
                {link.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary block duration-150"
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t py-6">
        <div className="w-full flex items-center justify-between max-w-7xl mx-auto gap-4 px-4 md:px-8 lg:px-10">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            © {new Date().getFullYear()} Berk Certel, All rights reserved.
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-muted-foreground hover:text-primary block"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
