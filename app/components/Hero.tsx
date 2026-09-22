"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { destinations } from "../data/destinations";
import DestImage from "./DestImage";

export default function Hero() {
  const featured = destinations.slice(0, 6);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative flex min-h-screen overflow-hidden bg-[#0A0A09]">
      {/* Left column: Typography */}
      <div className="relative z-10 flex flex-col justify-center pb-20 pt-16 px-8 md:px-12 lg:px-16 lg:pb-28 lg:w-[45%]">
        {/* Section counter */}
        <motion.div
          className="absolute top-16 right-8 md:right-12 lg:right-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-[9px] tracking-[0.3em] text-[#E8E4DC]/20 uppercase font-mono">
            01 / 04
          </span>
        </motion.div>

        {/* Metadata — bottom-left */}
        <motion.div
          className="absolute bottom-20 left-8 md:left-12 lg:left-16 flex flex-col gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="text-[9px] tracking-[0.35em] text-[#E8E4DC]/40 uppercase font-mono">
            FROM SHANGHAI
          </span>
          <span className="text-[9px] tracking-[0.2em] text-[#E8E4DC]/25 font-mono">
            31°14&rsquo;N / 121°28&rsquo;E
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="select-none leading-[0.9] tracking-tighter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            className="text-[13vw] font-bold text-left text-[#E8E4DC]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            WHERE
          </motion.div>
          <motion.div
            className="text-[13vw] font-bold text-center text-[#E8E4DC] mt-[-0.05em]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            COULD
          </motion.div>
          <motion.div
            className="text-[13vw] font-bold text-right text-[#E8E4DC] mt-[-0.05em]"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            YOU GO?
          </motion.div>
        </motion.h1>

        {/* Thin separator */}
        <motion.div
          className="editorial-line w-28 mt-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
        />

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-[11px] tracking-[0.18em] text-[#E8E4DC]/40 uppercase max-w-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          A curated universe of places that might make sense — soon.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
        >
          <span className="text-[8px] tracking-[0.3em] text-[#E8E4DC]/25 uppercase font-mono">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-4 h-px bg-[#E8E4DC]/20"
          />
        </motion.div>
      </div>

      {/* Right column: Destination photography grid */}
      <div className="hidden lg:flex lg:w-[55%] relative">
        {/* Large featured image — top right */}
        <motion.div
          className="absolute right-0 top-0 h-[55%] w-[55%] overflow-hidden"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            zIndex: hoveredIndex === 0 ? 20 : 1,
          }}
        >
          <DestImage images={featured[0].images} gradient={featured[0].gradient} isHovered={hoveredIndex === 0} />
          {/* Editorial label */}
          <div className="absolute bottom-6 left-6 z-10">
            <span className="text-[9px] tracking-[0.3em] text-[#E8E4DC]/30 uppercase font-mono">
              01
            </span>
            <p className="text-sm tracking-[0.15em] text-[#E8E4DC]/60 mt-1">
              {featured[0].city}
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09] via-transparent to-transparent" />
        </motion.div>

        {/* Smaller images below — asymmetric */}
        <div className="absolute bottom-0 left-0 right-0 flex h-[45%]">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden ${i === 1 ? "w-[40%]" : "flex-1"}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.15, duration: 0.7 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                zIndex: hoveredIndex === i ? 20 : 1,
              }}
            >
              <DestImage images={featured[i + 1].images} gradient={featured[i + 1].gradient} isHovered={hoveredIndex === i} />
              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-[8px] tracking-[0.3em] text-[#E8E4DC]/25 uppercase font-mono">
                  0{i + 1}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09] via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Thin movement line on photo area */}
        <motion.div
          className="absolute bottom-[45%] left-0 right-[40%] h-px bg-[#C95A3D]/30"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 2.0, duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      {/* Mobile: photo strip at the bottom */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 h-32 overflow-hidden z-0">
        <div
          className="w-full h-full"
          style={{ background: featured[0].gradient }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09] via-transparent to-transparent" />
      </div>
    </section>
  );


