"use client";

import { motion } from "framer-motion";
import { RevealText } from "@/components/ui/RevealText";

export function EventShowcase() {
  return (
    <section className="relative py-32 px-6 bg-[#331c8a] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <RevealText>
            <h2 className="text-sm font-bold tracking-widest text-white/60 uppercase mb-4">
              04. In Real Life
            </h2>
          </RevealText>
          <RevealText delay={0.1}>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8">
              Building Privacy<br />Conversations
            </h3>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium">
              Community, technology, and the future of confidential computing brought together.
            </p>
          </RevealText>
        </div>

        {/* Video Feature */}
        <RevealText delay={0.3}>
          <div className="relative rounded-3xl overflow-hidden aspect-video max-w-4xl mx-auto mb-16 shadow-[0_0_50px_rgba(255,255,255,0.1)] group border border-white/10">
            <video 
              src="/assets/video.mp4" 
              className="w-full h-full object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Arcium IRL Meetup</h4>
                <p className="text-purple-400 font-medium">Ilorin, Nigeria</p>
              </div>
            </div>
          </div>
        </RevealText>

        {/* Masonry Image Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {[
            { src: "/assets/img1.jpg", delay: 0.1 },
            { src: "/assets/img2.jpg", delay: 0.2 },
            { src: "/assets/img3.jpg", delay: 0.3 },
            { src: "/assets/img4.jpg", delay: 0.4 },
            { src: "/assets/img5.jpg", delay: 0.5 },
            { src: "/assets/img6.jpg", delay: 0.6 }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="relative rounded-2xl overflow-hidden break-inside-avoid group cursor-pointer"
            >
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 transition-colors duration-500 z-10" />
              <img 
                src={item.src} 
                alt={`Event highlight ${idx + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
