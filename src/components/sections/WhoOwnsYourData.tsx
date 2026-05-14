"use client";

import { RevealText } from "@/components/ui/RevealText";

export function WhoOwnsYourData() {
  return (
    <section className="relative py-32 px-6 bg-[#6c44fc] text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <RevealText>
            <h2 className="text-sm font-bold tracking-widest text-white/60 uppercase mb-4">
              02. My Shadow
            </h2>
          </RevealText>
          <RevealText delay={0.1}>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8">
              Seeing those ads made me realize something terrifying.
            </h3>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium">
              If they can use my daily conversations just to sell me things, my voice is definitely open for other uses without my consent. My voice, my location, and my call logs aren't just invisible data points—they are my actual life being traded.
            </p>
          </RevealText>
        </div>

        <div className="hidden"></div>
      </div>
    </section>
  );
}
