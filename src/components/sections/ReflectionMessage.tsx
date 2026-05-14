"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/ui/RevealText";

export function ReflectionMessage() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#f3f4f8] text-[#111111]">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <RevealText>
          <h2 className="text-sm font-bold tracking-widest text-[#6c44fc] uppercase mb-8">
            04. The Takeaway
          </h2>
        </RevealText>
        <RevealText delay={0.1}>
          <h3 className="text-6xl md:text-8xl font-medium tracking-tight mb-12 leading-[1.1]">
            Privacy became<br />personal.
          </h3>
        </RevealText>
        
        <div className="space-y-8 text-2xl md:text-3xl text-[#666666] font-medium leading-relaxed tracking-tight">
          <RevealText delay={0.2}>
            <p>
              This exercise changed my thinking. Most people never realize their digital footprint exists until it is used against them.
            </p>
          </RevealText>
          <RevealText delay={0.3}>
            <p>
              We often think of privacy as secrecy—something only criminals need. But privacy is really about control. It's the right to choose what the world knows about you.
            </p>
          </RevealText>
          <RevealText delay={0.4}>
            <p className="text-[#111111] bg-white p-6 rounded-2xl border border-black/5 shadow-lg mt-12">
              Normal people deserve control over their information. 
              We shouldn't have to choose between participating in the digital economy and keeping our lives private.
            </p>
          </RevealText>
        </div>
      </div>
      
      {/* Subtle floating elements */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as const }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6c44fc]/5 rounded-full blur-[100px] pointer-events-none"
      />
    </section>
  );
}
