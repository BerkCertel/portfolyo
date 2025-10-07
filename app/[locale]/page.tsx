import DarkVeil from "@/components/background/DarkVeil";
// import CallToAction from "@/components/call-to-action";
import Hero from "@/components/home/Hero";
import IcodeWith from "@/components/home/IcodeWith";
import PageProvider from "@/components/providers/PageProvider";
import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/constant/timelineData";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen  relative ">
        <DarkVeil
          hueShift={396} // 160-200 arası mavi, daha az koyu
          noiseIntensity={0.07}
          scanlineIntensity={0.08}
          scanlineFrequency={0.03}
          warpAmount={0.02}
          resolutionScale={1}
          speed={2}
        />
        <div className="absolute inset-0 ">
          <PageProvider>
            <Hero />
          </PageProvider>
        </div>
      </div>
      <PageProvider>
        <IcodeWith />
        <Timeline data={timelineData} />
      </PageProvider>
    </div>
  );
}
