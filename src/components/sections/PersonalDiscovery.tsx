"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealText } from "@/components/ui/RevealText";
import Image from "next/image";
import { X } from "lucide-react";

export function PersonalDiscovery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const discoveries = [
    {
      title: "The Exposure",
      desc: "I discovered my personal email, my phone number, and even my company email sitting in plain text on Google. Pieces of my life were just out there, feeling completely improper.",
      image: "/google-search.jpeg"
    },
    {
      title: "The Permissions",
      desc: "I dug into my phone's privacy settings. I found that apps which have absolutely no business knowing my location or seeing my call logs were quietly holding onto access. I was so disappointed.",
      image: "/privacy.jpeg"
    },
    {
      title: "The Echo",
      desc: "The most unsettling part was the 'listening.' I would have a private conversation about buying a specific product, only to open an app minutes later and see an ad for that exact thing.",
      image: "/echo.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.05,
      },
    },
    hover: {
      boxShadow: "0 20px 60px rgba(108, 68, 252, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const imageModalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="discovery" className="relative py-32 px-6 overflow-hidden bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <RevealText>
            <h2 className="text-sm font-semibold tracking-widest text-[#6c44fc] uppercase mb-4">
              01. My Audit
            </h2>
          </RevealText>
          <RevealText delay={0.1}>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-[#111111]">
              I expected Siri to come back empty-handed.
            </h3>
          </RevealText>

          <div className="space-y-6 text-[#444444] text-lg font-medium">
            <RevealText delay={0.2}>
              <p>
                Instead, she started reading my life back to me.
              </p>
            </RevealText>
          </div>
        </motion.div>

        {/* Discovery Cards with Images */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {discoveries.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Card */}
              <motion.div
                className={idx % 2 === 1 ? "lg:order-2" : ""}
                variants={cardVariants}
                whileHover="hover"
              >
                <GlassCard glowColor="none" className="h-full !bg-gradient-to-br from-[#6c44fc]/8 to-[#6c44fc]/3 border-[#6c44fc]/30 hover:border-[#6c44fc]/50 backdrop-blur-xl p-8 transition-all duration-300">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6c44fc]/30 to-[#6c44fc]/10 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-4 h-4 bg-[#6c44fc] rounded-sm" />
                  </motion.div>
                  <h4 className="text-2xl font-bold mb-4 text-[#111111]">{item.title}</h4>
                  <p className="text-[#444444] text-base leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </GlassCard>
              </motion.div>

              {/* Image */}
              <motion.div
                className={idx % 2 === 1 ? "lg:order-1" : ""}
                variants={imageVariants}
                whileHover="hover"
              >
                <motion.button
                  onClick={() => setSelectedImage(item.image)}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/10 w-full cursor-pointer group"
                  whileHover={{ boxShadow: "0 30px 80px rgba(108, 68, 252, 0.2)" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={600}
                    className="w-full h-96 object-cover"
                    priority={idx === 0}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm rounded-full p-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="w-6 h-6 text-[#6c44fc]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.172 9.172a.75.75 0 011.06 0L12 10.94l1.768-1.768a.75.75 0 111.06 1.06L13.06 12l1.768 1.768a.75.75 0 11-1.06 1.06L12 13.06l-1.768 1.768a.75.75 0 11-1.06-1.06L10.94 12l-1.768-1.768a.75.75 0 010-1.06z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              variants={imageModalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full view"
                width={1200}
                height={800}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />

              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-2 transition-all duration-200"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6 text-black" />
              </motion.button>

              {/* Keyboard hint */}
              <motion.p
                className="text-center text-white/60 text-sm mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Press ESC or click outside to close
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard handler for ESC key */}
      {selectedImage && (
        <motion.div
          onKeyDown={(e) => {
            if (e.key === "Escape") setSelectedImage(null);
          }}
          tabIndex={-1}
          autoFocus
        />
      )}
    </section>
  );
}
