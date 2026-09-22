"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { destinations } from "../data/destinations";
import DestImage from "./DestImage";

export default function DestinationOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-[#0A0A09]">
      {/* Section header */}
      <div className="sticky top-0 z-20 bg-[#0A0A09] py-16 px-8 md:px-12 lg:px-16">
        {/* Section counter */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="text-[9px] tracking-[0.3em] text-[#E8E4DC]/20 uppercase font-mono">
            01 / DESTINATION UNIVERSE
          </span>
          <div className="h-px flex-1 bg-[#E8E4DC]/10" />
        </motion.div>

        {/* Title */}
        <motion.h2
          className="select-none leading-[0.9] tracking-tighter mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <motion.div
            className="text-[12vw] font-bold text-left text-[#E8E4DC]"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            WHERE COULD
          </motion.div>
          <motion.div
            className="text-[12vw] font-bold text-right text-[#E8E4DC] mt-[-0.05em]"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            YOU GO?
          </motion.div>
        </motion.h2>

        {/* Supporting copy */}
        <motion.p
          className="mt-6 text-[11px] tracking-[0.18em] text-[#E8E4DC]/40 uppercase max-w-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          A curated universe of places that might make sense — soon.
        </motion.p>

        {/* Editorial line */}
        <motion.div
          className="editorial-line w-32 mt-10"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Destination sequence */}
      <div className="px-0 md:px-8 lg:px-16 pb-20">
        <div ref={ref} className="flex flex-col">
          {destinations.map((dest, i) => {
            const isLeft = i % 2 === 0;
            const isLarge = i % 3 === 0;
            const hasImages = dest.images.length > 0;

            return (
              <motion.div
                key={dest.id}
                className={`relative flex min-h-[70vh] overflow-hidden ${
                  isLeft ? "flex-row" : "flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image area */}
                <div
                  className={`relative ${
                    isLarge ? "h-[65vh] flex-[1.2]" : "h-[50vh] flex-[0.8]"
                  } overflow-hidden flex-shrink-0`}
                >
                  <DestImage
                    images={dest.images}
                    gradient={dest.gradient}
                    isHovered={false}
                  />
                  {/* Destination info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[9px] tracking-[0.3em] text-[#E8E4DC]/30 uppercase font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-[#E8E4DC]/10" />
                    </div>
                    <h3 className="text-[4vw] md:text-[3vw] font-bold tracking-[0.1em] leading-[0.95] text-[#E8E4DC]">
                      {dest.title}
                    </h3>
                    <p className="text-[10px] tracking-[0.2em] text-[#E8E4DC]/40 uppercase mt-1">
                      {dest.country}
                    </p>
                    {/* Tags */}
                    <div className="flex gap-2 mt-3">
                      {dest.preferences.map((pref) => (
                        <span
                          key={pref}
                          className="text-[8px] tracking-[0.15em] text-[#C95A3D]/60 uppercase font-mono border border-[#C95A3D]/20 px-2 py-0.5"
                        >
                          {pref}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Bottom gradient fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09] via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
