"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/ui/RevealText";
import { Menu, ChevronRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToNext = () => {
    document.getElementById("discovery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#f3f4f8]">
      {/* Navbar */}
      <header className="w-full flex items-center justify-center px-8 py-6 z-50">
        <div className="flex-shrink-0">
          <Image 
            src="/logo.svg" 
            alt="Arcium" 
            width={140} 
            height={60} 
            className="h-6 w-auto"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8 relative z-10 pb-16 md:pb-20">
        <RevealText delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[100px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-6 md:mb-8">
            I thought I was invisible.
          </h1>
        </RevealText>

        <RevealText delay={0.3}>
          <p className="text-base md:text-lg lg:text-xl text-[#666666] max-w-2xl mx-auto mb-8 md:mb-10 font-medium leading-relaxed">
            I wasn't going to participate in this RTG. I honestly figured I had no digital footprint to find. So, I sat in my room and asked, <em>"Hey Siri, surf the internet, check for Godwin, and tell me who I am."</em> The result made me lock in instantly.
          </p>
        </RevealText>

        <RevealText delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={scrollToNext} variant="primary" className="min-w-full sm:min-w-[160px] text-sm md:text-base">
              Enter Reflection <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </RevealText>
      </div>

      {/* Background Dot Matrix Particles */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-64 h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjYmQ1ZTEiLz48L3N2Zz4=')] opacity-60 mask-image:linear-gradient(to_right,black,transparent)] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-64 h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjYmQ1ZTEiLz48L3N2Zz4=')] opacity-60 mask-image:linear-gradient(to_left,black,transparent)] pointer-events-none" />
      
      {/* Massive Bottom Text Cutoff */}
      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none overflow-hidden h-64 flex items-end justify-center">
        <h2 className="text-[25vw] font-bold text-black/5 leading-none select-none tracking-tighter">
          ARCIUM
        </h2>
      </div>
    </section>
  );
}
