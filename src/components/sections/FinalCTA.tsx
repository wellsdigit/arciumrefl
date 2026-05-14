"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/ui/RevealText";
import { useEffect, useState } from "react";

export function FinalCTA() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-32 px-4 md:px-6 bg-black text-white">
      {/* Immersive background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(108,68,252,0.15)_0%,rgba(0,0,0,1)_80%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>
      
      {/* Floating particles - reduced on mobile, full on desktop */}
      {isDesktop && Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, Math.random() * -100, 0],
            x: [0, (Math.random() - 0.5) * 50, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute w-1 h-1 bg-white/40 rounded-full blur-[1px]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <RevealText>
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight mb-8 leading-[1.1]">
            The future shouldn't require<br />sacrificing privacy.
          </h2>
        </RevealText>
        
        <RevealText delay={0.2}>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-12 md:mt-16">
            <a href="https://arcium.com" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="min-w-full sm:min-w-[200px] text-sm md:text-base">Explore Arcium</Button>
            </a>
            <Button variant="secondary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="min-w-full sm:min-w-[200px] text-sm md:text-base border-white/20 text-white hover:bg-white/10">
              Restart Journey
            </Button>
          </div>
        </RevealText>

        <RevealText delay={0.4}>
          <div className="flex flex-col items-center justify-center mt-16 md:mt-32">
            <img src="/logo-bottom.svg" alt="Arcium Logo" className="w-8 md:w-10 h-8 md:h-10 mb-4 opacity-60 invert" />
            <p className="text-white/50 text-xs md:text-sm font-medium tracking-wider uppercase mb-4 md:mb-6">
              Built for the RTG Reflection Quest. Powered by Arcium.
            </p>
            <p className="text-white/40 text-xs font-medium">
              A personal audit prompted by{" "}
              <a 
                href="https://twitter.com/arcium" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors underline"
              >
                @Arcium
              </a>
            </p>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
