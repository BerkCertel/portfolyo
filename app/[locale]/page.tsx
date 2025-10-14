"use client";

import DarkVeil from "@/components/background/DarkVeil";
import Hero from "@/components/home/Hero";
import IcodeWith from "@/components/home/IcodeWith";
import ScrollArrow from "@/components/home/ScrollArrow";
import WhoAmI from "@/components/home/WhoAmI";
import MyServices from "@/components/MyServices/MyServicesSection";
import WorkingProcess from "@/components/MyServices/WorkingProcess";
import PageProvider from "@/components/providers/PageProvider";
import { Timeline } from "@/components/ui/timeline";
import { useTimelineData } from "@/constant/timelineData";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const parentRef = useRef<HTMLDivElement>(null);
  const [veilReady, setVeilReady] = useState(false);
  const timelineData = useTimelineData();

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;
    if (parent.clientWidth > 0 && parent.clientHeight > 0) {
      setVeilReady(true);
    } else {
      const obs = new ResizeObserver(() => {
        if (parent.clientWidth > 0 && parent.clientHeight > 0) {
          setVeilReady(true);
          obs.disconnect();
        }
      });
      obs.observe(parent);
      return () => obs.disconnect();
    }
  }, []);

  return (
    <>
      <div
        ref={parentRef}
        className="w-full h-screen overflow-hidden relative "
      >
        {veilReady && (
          <DarkVeil
            hueShift={396}
            noiseIntensity={0.07}
            scanlineIntensity={0.08}
            scanlineFrequency={0.03}
            warpAmount={0.02}
            resolutionScale={1}
            speed={2}
          />
        )}
        <div className="absolute inset-0 overflow-hidden ">
          <PageProvider>
            <Hero />
          </PageProvider>
          <ScrollArrow />
        </div>
      </div>
      <PageProvider>
        <WhoAmI />
        <div className="hidden md:block">
          <MyServices />
        </div>
        <IcodeWith />
        <Timeline data={timelineData} />
        <WorkingProcess />
      </PageProvider>
    </>
  );
}
