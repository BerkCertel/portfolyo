"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LuGithub } from "react-icons/lu";
import { Link } from "@/i18n/navigation";
import { projectsData } from "@/constant/projectsData";
import { useTranslations } from "next-intl";
import ProjectsImageSlider from "@/components/projects/ProjectsImageSlider";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const t = useTranslations("ProjectsPage");

  return (
    <section className=" py-16 md:py-26 ">
      <div>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance text-primary">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-5xl mx-auto text-balance">
            {t("description")}
          </p>
          <hr className="border-t border-primary mt-4" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image slider */}
                <ProjectsImageSlider images={project.images} />

                {/* Card content */}
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">
                    {project.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow">
                  <CardDescription className="text-base leading-relaxed">
                    {t(project.descriptionKey)}
                  </CardDescription>
                </CardContent>

                {/* GitHub link */}
                <CardFooter className="flex gap-2 items-center justify-between">
                  <Button
                    variant="outline"
                    className={` ${
                      project.demoStatus ? "w-1/2" : "w-full"
                    } group bg-transparent`}
                    asChild
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-xs"
                    >
                      <LuGithub className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      View on GitHub
                    </Link>
                  </Button>
                  {project.demoStatus === true && (
                    <Button
                      variant="outline"
                      disabled={project.demoStatus}
                      className="w-1/2 group bg-transparent"
                      asChild
                    >
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2  text-xs"
                      >
                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        See Demo & Live
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
