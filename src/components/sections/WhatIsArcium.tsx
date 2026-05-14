"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealText } from "@/components/ui/RevealText";
import { Shield, Activity, Fingerprint, Coins } from "lucide-react";

const arciumUseCases = [
  {
    icon: Activity,
    title: "Private Medical Records",
    desc: "Hospitals can analyze patient data for outbreaks without seeing individual identities."
  },
  {
    icon: Coins,
    title: "Secure Fintech",
    desc: "Verify income for a loan without exposing your actual bank statements or balance."
  },
  {
    icon: Fingerprint,
    title: "Confidential Identity",
    desc: "Prove you are a Nigerian citizen over 18 without revealing your NIN or date of birth."
  },
  {
    icon: Shield,
    title: "Safe Community Systems",
    desc: "Run secure, verifiable local elections without tracking who voted for whom."
  }
];

export function WhatIsArcium() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden bg-[#4828b8] text-white">
      <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-2">
            <RevealText>
              <h2 className="text-xs md:text-sm font-bold tracking-widest text-white/60 uppercase mb-4">
                03. The Solution
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <h3 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-6 md:mb-8 leading-[1.1]">
                Compute data<br />without seeing it.
              </h3>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/80 mb-6 md:mb-8 font-medium leading-relaxed">
                That is what Arcium does. It is a confidential computing network that allows applications to process data while keeping the data encrypted.
              </p>
            </RevealText>
            <RevealText delay={0.3}>
              <div className="p-4 md:p-6 rounded-2xl bg-[#6c44fc] border border-white text-white shadow-xl">
                <p className="font-medium text-base md:text-lg">
                  "Arcium helps people use the internet without exposing the data itself."
                </p>
              </div>
            </RevealText>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 md:gap-6">
            {arciumUseCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                >
                  <GlassCard glowColor="none" className="h-full !bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-xl p-4 md:p-6 lg:p-8 group transition-all duration-500">
                    <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-full bg-white/5 inline-block border border-white/10 group-hover:bg-white flex items-center justify-center transition-colors">
                      <Icon className="w-5 md:w-6 h-5 md:h-6 text-white group-hover:text-[#4828b8]" />
                    </div>
                    <h4 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3">{useCase.title}</h4>
                    <p className="text-white/90 text-xs md:text-sm leading-relaxed font-medium">
                      {useCase.desc}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
