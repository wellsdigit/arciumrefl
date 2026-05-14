"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealText } from "@/components/ui/RevealText";
import Image from "next/image";

export function PersonalDiscovery() {
  return (
    <section id="discovery" className="relative py-32 px-6 overflow-hidden bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Narrative Content */}
          <div>
            <RevealText>
              <h2 className="text-sm font-semibold tracking-widest text-[#6c44fc] uppercase mb-4">
                01. The Discovery
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 text-[#111111]">
                Googling Godwin Salami.
              </h3>
            </RevealText>
            
            <div className="space-y-6 text-[#444444] text-lg font-medium">
              <RevealText delay={0.2}>
                <p>
                  As a frontend developer, I spend my life building on the web. But recently, I decided to search for my own name online. What started as a casual search quickly turned into a profound realization.
                </p>
              </RevealText>
              <RevealText delay={0.3}>
                <p>
                  I saw myself reflected back in search results—my professional profiles, code repositories, and mentions scattered across platforms I had forgotten about.
                </p>
              </RevealText>
              <RevealText delay={0.4}>
                <p>
                  It made me realize how much data we passively leave behind. Every commit, every account, every interaction builds a digital footprint sitting in databases we cannot control.
                </p>
              </RevealText>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative h-[500px] w-full flex items-center justify-center">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[#6c44fc]/5 rounded-full blur-[80px]" />
            
            {/* Floating Image */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute z-10 w-full max-w-md shadow-2xl rounded-xl overflow-hidden border border-black/5"
            >
              <Image 
                src="/searched-myself.png" 
                alt="Google Search for Godwin Salami" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute right-0 -bottom-10 z-20 w-72"
            >
              <GlassCard className="p-5 bg-white/80 backdrop-blur-xl border-black/10 shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#6c44fc]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#6c44fc] animate-pulse" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-black">Data Fragment</div>
                    <div className="text-xs text-neutral-500">Public Indexing</div>
                  </div>
                </div>
                <div className="p-3 rounded bg-neutral-50 border border-neutral-200">
                  <p className="text-xs text-neutral-600 font-mono">"Frontend Developer | Godwin Salami"</p>
                </div>
              </GlassCard>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
