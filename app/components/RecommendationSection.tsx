"use client";

import { motion } from "framer-motion";
import { Destination } from "../data/destinations";
import { buildFlightDeepLink } from "../data/destinations";

interface RecommendationSectionProps {
  recommendations: {
    top: Destination[];
    more: Destination[];
    totalResults: number;
  };
  departureDate: string;
  returnDate: string;
}

export default function RecommendationSection({
  recommendations,
  departureDate,
  returnDate,
}: RecommendationSectionProps) {
  return (
    <section className="relative bg-[#0A0A09]">
      {/* Section header */}
      <div className="sticky top-0 z-20 bg-[#0A0A09] py-8 px-8 md:px-12 lg:px-16">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="text-[9px] tracking-[0.3em] text-[#E8E4DC]/20 uppercase font-mono">
            04 / 04
          </span>
          <div className="h-px flex-1 bg-[#E8E4DC]/10" />
        </motion.div>

        <motion.h2
          className="select-none leading-[0.9] tracking-tighter mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <motion.div
            className="text-[10vw] font-bold text-left text-[#E8E4DC]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            WHAT
          </motion.div>
          <motion.div
            className="text-[10vw] font-bold text-right text-[#E8E4DC] mt-[-0.05em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            MAKES
          </motion.div>
          <motion.div
            className="text-[10vw] font-bold text-left text-[#E8E4DC] mt-[-0.05em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            SENSE
          </motion.div>
          <motion.div
            className="text-[10vw] font-bold text-right text-[#E8E4DC] mt-[-0.05em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.5 }}
          >
            RIGHT NOW?
          </motion.div>
        </motion.h2>

        <motion.p
          className="mt-6 text-[11px] tracking-[0.18em] text-[#E8E4DC]/40 uppercase max-w-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.7 }}
        >
          Based on your dates and preferences.
        </motion.p>
      </div>

      {/* Destination recommendations */}
      <div className="px-8 md:px-12 lg:px-16 pb-20">
        {recommendations.top.map((dest, i) => (
          <motion.div
            key={dest.id}
            className="relative flex items-center justify-center min-h-[80vh] overflow-hidden"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background gradient */}
            <div
              className="absolute inset-0"
              style={{ background: dest.gradient }}
            />

            {/* Darken overlay */}
            <div className="absolute inset-0 bg-[#0A0A09]/70" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start max-w-3xl w-full">
              {/* Number and city */}
              <div className="flex items-end gap-6 mb-4">
                <motion.span
                  className="text-[10vw] font-bold text-[#E8E4DC]/20 leading-none select-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 + 0.1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <div>
                  <motion.h3
                    className="text-[5vw] font-bold tracking-[0.1em] leading-[0.95]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 + 0.2 }}
                  >
                    {dest.title}
                  </motion.h3>
                  <motion.p
                    className="text-[11px] tracking-[0.25em] text-[#E8E4DC]/40 uppercase mt-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
                  >
                    {dest.country}
                  </motion.p>
                </div>
              </div>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap gap-x-10 gap-y-2 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.4 }}
              >
                <span className="text-[11px] tracking-[0.15em] text-[#E8E4DC]/50 uppercase">
                  GOOD SEASON
                </span>
                <span className="text-[11px] tracking-[0.15em] text-[#C95A3D]/60 uppercase">
                  {dest.bestMonths[0]} — {dest.bestMonths[1]}
                </span>
                <span className="text-[11px] tracking-[0.15em] text-[#E8E4DC]/50 uppercase">
                  {dest.flightHours}–{dest.flightHours + 2} H FLIGHT
                </span>
              </motion.div>

              {/* Tags */}
              <motion.div
                className="flex gap-3 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.5 }}
              >
                {dest.preferences.map((pref) => (
                  <span
                    key={pref}
                    className="text-[9px] tracking-[0.2em] text-[#C95A3D]/60 uppercase font-mono border border-[#C95A3D]/20 px-3 py-1"
                  >
                    {pref}
                  </span>
                ))}
              </motion.div>

              {/* Why now */}
              <motion.p
                className="text-sm text-[#E8E4DC]/50 leading-relaxed max-w-md mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.6 }}
              >
                {dest.seasonReason}
              </motion.p>

              {/* Entry note + flight link */}
              <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 + 0.7 }}
              >
                <span className="text-[10px] tracking-[0.2em] text-[#E8E4DC]/25 uppercase font-mono">
                  {dest.entryNote}
                </span>
                <a
                  href={buildFlightDeepLink(dest, departureDate, returnDate)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-5 bg-[#C95A3D] text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-none transition-all duration-300 hover:bg-[#C95A3D]/90"
                >
                  <span>CHECK LIVE FLIGHTS</span>
                  <span className="text-base leading-none">→</span>
                </a>
              </motion.div>
            </div>

            {/* Thin horizontal movement accent */}
            <motion.div
              className="absolute bottom-10 left-0 right-0 h-px bg-[#C95A3D]/20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12 + 0.9, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
