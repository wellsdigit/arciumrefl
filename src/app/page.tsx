import { Hero } from "@/components/sections/Hero";
import { PersonalDiscovery } from "@/components/sections/PersonalDiscovery";
import { WhoOwnsYourData } from "@/components/sections/WhoOwnsYourData";
import { WhatIsArcium } from "@/components/sections/WhatIsArcium";
import { EventShowcase } from "@/components/sections/EventShowcase";
import { ReflectionMessage } from "@/components/sections/ReflectionMessage";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0a0a0a] overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200">
      <Hero />
      <PersonalDiscovery />
      <WhoOwnsYourData />
      <WhatIsArcium />
      <EventShowcase />
      <ReflectionMessage />
      <FinalCTA />
    </main>
  );
}
