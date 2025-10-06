"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PageProvider from "../providers/PageProvider";
import GradientText from "../GradientText";
import TextType from "../TextType";

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const titles = [
      "Software Developer",
      "Frontend Developer",
      "Backend Developer",
      "Full-Stack Engineer",
    ];
    const currentFullText = titles[currentTitle];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitle]);

  return (
    <PageProvider>
      <section
        id="home"
        className="min-h-screen pt-20  flex flex-col md:flex-row items-center md:justify- between  justify-center gap-2 "
      >
        {/* Content  */}
        <div className="text-center text-white w-full md:w-1/2">
          {/* Greeting */}
          <div className=" text-lg ">
            <p>Merhaba, ben</p>
          </div>
          {/* Name */}

          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-heading mb-4 text-balance">
              Berk Certel
            </h1>
          </GradientText>

          {/* Animated Title */}
          <div className=" h-16 sm:h-20 w-full">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground mb-8">
              <GradientText
                colors={["#4079ff", "#40ffaa", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                {displayedText} <span className="animate-pulse">|</span>
              </GradientText>
            </h2>
          </div>
          {/* Description */}
          <div className="hidden md:block">
            <TextType
              text={[
                "Yazılım geliştirme konusunda tutkulu, yenilikçi ve çözüm odaklı bir profesyonelim. Teknolojiyi kullanarak etkileyici dijital deneyimler yaratmayı seviyorum.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-2 items-center justify-center ">
            <Button size="lg" className=" transition-all duration-500">
              Profilimi Görüntüle
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border transition-all duration-500"
            >
              İletişime Geç
            </Button>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end items-center">
          <Image
            src="/profile-foto.jpeg"
            alt="Profile Photo"
            width={450}
            height={450}
            className="hidden md:block  object-cover   border  rounded-md p-2"
          />
        </div>
      </section>
    </PageProvider>
  );
}
