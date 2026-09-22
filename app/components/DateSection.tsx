"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface DateSectionProps {
  departureDate: string;
  setDepartureDate: (date: string) => void;
  returnDate: string;
  setReturnDate: (date: string) => void;
  onSubmit: () => void;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "—";
  const date = new Date(dateStr + "T00:00:00");
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

export default function DateSection({
  departureDate,
  setDepartureDate,
  returnDate,
  setReturnDate,
  onSubmit,
}: DateSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative flex min-h-screen overflow-hidden bg-[#0A0A09]">
      {/* Main content column */}
      <div className="relative z-10 flex flex-col justify-center pb-20 pt-16 px-8 md:px-12 lg:px-16 lg:pb-28 lg:w-[60%]">
        {/* Section counter */}
        <motion.div
          className="absolute top-16 right-8 md:right-12 lg:right-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-[9px] tracking-[0.3em] text-[#E8E4DC]/20 uppercase font-mono">
            02 / 04
          </span>
        </motion.div>

        {/* Large typography */}
        <motion.h2
          className="select-none leading-[0.9] tracking-tighter"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            className="text-[12vw] font-bold text-left text-[#E8E4DC]"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            WHEN
          </motion.div>
          <motion.div
            className="text-[12vw] font-bold text-center text-[#E8E4DC] mt-[-0.05em]"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.75, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            ARE
          </motion.div>
          <motion.div
            className="text-[12vw] font-bold text-right text-[#E8E4DC] mt-[-0.05em]"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            YOU
          </motion.div>
          <motion.div
            className="text-[12vw] font-bold text-left text-[#E8E4DC] mt-[-0.05em]"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            LEAVING?
          </motion.div>
        </motion.h2>

        {/* Thin separator */}
        <motion.div
          className="editorial-line w-28 mt-10"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
        />

        {/* Date fields displayed as editorial fields */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-lg">
          {/* Departure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.7 }}
          >
            <label className="text-[9px] tracking-[0.3em] text-[#E8E4DC]/30 uppercase font-mono mb-3 block">
              Departure
            </label>
            <div className="relative">
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full px-5 py-4 bg-transparent border-b border-[#E8E4DC]/15 text-[#E8E4DC] text-base font-mono rounded-none focus:outline-none focus:border-[#E8E4DC]/40 transition-colors placeholder:text-[#E8E4DC]/20"
              />
            </div>
            <motion.div
              className="mt-2 text-[#E8E4DC]/60 text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={isInView && departureDate ? { opacity: 1 } : {}}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              {formatDate(departureDate)}
            </motion.div>
          </motion.div>

          {/* Return */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            <label className="text-[9px] tracking-[0.3em] text-[#E8E4DC]/30 uppercase font-mono mb-3 block">
              Return
            </label>
            <div className="relative">
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full px-5 py-4 bg-transparent border-b border-[#E8E4DC]/15 text-[#E8E4DC] text-base font-mono rounded-none focus:outline-none focus:border-[#E8E4DC]/40 transition-colors placeholder:text-[#E8E4DC]/20"
              />
            </div>
            <motion.div
              className="mt-2 text-[#E8E4DC]/60 text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={isInView && returnDate ? { opacity: 1 } : {}}
              transition={{ delay: 1.7, duration: 0.5 }}
            >
              {formatDate(returnDate)}
            </motion.div>
          </motion.div>
        </div>

        {/* Movement line between dates and button */}
        <motion.div
          className="mt-14 flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="h-px flex-1 bg-[#E8E4DC]/10" />
          <span className="text-[#C95A3D]/60 text-[9px] tracking-[0.3em] uppercase font-mono">
            departure
          </span>
          <div className="h-px flex-1 bg-[#E8E4DC]/10" />
        </motion.div>

        {/* Action button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          <motion.button
            onClick={onSubmit}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 px-8 py-5 bg-[#C95A3D] text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-none transition-all duration-300 hover:bg-[#C95A3D]/90 group"
          >
            <span>Find My Trip</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-base leading-none"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      {/* Right side: thin editorial accent column */}
      <div className="hidden lg:flex lg:w-[40%] relative">
        {/* Thin vertical movement line */}
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-px bg-[#C95A3D]/10"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
        {/* Small dot at the intersection */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#C95A3D]/40 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.8 }}
        />
      </div>
    </section>
  );
}
