"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/ui/RevealText";
import Link from "next/link";

export function YourTurn() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden bg-[#f3f4f8] text-[#111111]">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <RevealText>
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-[#6c44fc] uppercase mb-4">
              03. The Challenge
            </h2>
          </RevealText>
          <RevealText delay={0.1}>
            <h3 className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-6 md:mb-8 leading-[1.1]">
              I realized privacy isn't just a tech buzzword; it's deeply personal when it happens to you.
            </h3>
          </RevealText>
        </div>

        <div className="space-y-6 text-base md:text-lg lg:text-xl text-[#666666] font-medium leading-relaxed">
          <RevealText delay={0.2}>
            <p>
              I don't want anyone to just take my word for it. I challenge you to ask your own voice assistant to find you. Check which apps are holding your call logs right now. Once I saw how much of myself was already out there, I finally understood why things need to change.
            </p>
          </RevealText>
          <RevealText delay={0.3}>
            <p className="text-[#111111] bg-white p-4 md:p-6 lg:p-8 rounded-2xl border border-black/5 shadow-lg mt-6 md:mt-8">
              <span className="font-bold">A personal realization prompted by <Link
               href="https://arcium.com" target="_blank" rel="noopener noreferrer" className="text-[#6c44fc] hover:underline">
                Arcium
              </Link>.</span>
            </p>
          </RevealText>
        </div>
      </div>

      {/* Subtle floating elements */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as const }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#6c44fc]/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"
      />
    </section>
  );
}
