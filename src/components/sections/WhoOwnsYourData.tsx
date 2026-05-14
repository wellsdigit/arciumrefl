"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/ui/RevealText";
import { GlassCard } from "@/components/ui/GlassCard";

const contextCards = [
  { title: "NIN & SIM Registration", desc: "Biometrics mapped to every phone call." },
  { title: "Banking Apps", desc: "Financial habits silently profiled for credit scoring." },
  { title: "Ride-Hailing", desc: "Real-time location logs of every trip taken in Lagos." },
  { title: "Public WiFi", desc: "Unencrypted traffic exposed in cafes and hubs." }
];

export function WhoOwnsYourData() {
  return (
    <section className="relative py-32 px-6 bg-[#6c44fc] text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <RevealText>
            <h2 className="text-sm font-bold tracking-widest text-white/60 uppercase mb-4">
              02. The Reality
            </h2>
          </RevealText>
          <RevealText delay={0.1}>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8">
              Who really owns<br />your data?
            </h3>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium">
              How much of your identity exists in systems you cannot see? In Nigeria, our digital footprint grows daily, often without our active consent.
            </p>
          </RevealText>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contextCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard glowColor="none" className="h-full !bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-2xl">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
                </div>
                <h4 className="text-xl font-bold mb-3">{card.title}</h4>
                <p className="text-white/90 text-sm leading-relaxed font-medium">
                  {card.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 relative rounded-3xl overflow-hidden bg-[#5833cc] border border-white/10 p-1 lg:p-20 flex flex-col items-center text-center shadow-2xl">
          <RevealText delay={0.3}>
            <p className="text-3xl md:text-5xl font-medium leading-tight max-w-4xl mx-auto tracking-tight">
              "Every time you hand over your phone for a repair, or connect to an open network... a piece of your privacy is traded for convenience."
            </p>
          </RevealText>
        </div>
      </div>
    </section>
  );
}
