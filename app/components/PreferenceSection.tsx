"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TravelPreference } from "../data/destinations";

interface PreferenceSectionProps {
  selectedPreferences: TravelPreference[];
  onTogglePreference: (pref: TravelPreference) => void;
}

const preferences: { key: TravelPreference; en: string; cn: string }[] = [
  { key: "culture", en: "CULTURE", cn: "人文" },
  { key: "scenery", en: "SCENERY", cn: "风景" },
  { key: "hiking", en: "HIKING", cn: "徒步" },
];

export default function PreferenceSection({
  selectedPreferences,
  onTogglePreference,
}: PreferenceSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative flex min-h-screen overflow-hidden bg-[#0A0A09]">
      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center pb-20 pt-16 px-8 md:px-12 lg:px-16 lg:pb-28 lg:w-[60%]">
        {/* Section counter */}
        <motion.div
          className="absolute top-16 right-8 md:right-12 lg:right-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-[9px] tracking-[0.3em] text-[#E8E4DC]/20 uppercase font-mono">
            03 / 04
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
            WHAT
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
            LOOKING FOR?
          </motion.div>
        </motion.h2>

        {/* Thin separator */}
        <motion.div
          className="editorial-line w-28 mt-10"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
        />

        {/* Preference options */}
        <div className="mt-14 flex flex-col gap-5 max-w-xs">
          {preferences.map((pref, i) => {
            const isSelected = selectedPreferences.includes(pref.key);
            return (
              <motion.button
                key={pref.key}
                onClick={() => onTogglePreference(pref.key)}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-between px-6 py-5 bg-transparent border border-[#E8E4DC]/20 text-left rounded-none transition-all duration-300 ${
                  isSelected
                    ? "border-[#C95A3D] bg-[#C95A3D]/10"
                    : "hover:border-[#E8E4DC]/40"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 + i * 0.15, duration: 0.7 }}
              >
                <div>
                  <span
                    className={`text-[11px] tracking-[0.2em] uppercase font-mono ${
                      isSelected ? "text-[#C95A3D]" : "text-[#E8E4DC]/70"
                    }`}
                  >
                    {pref.en}
                  </span>
                  <p
                    className={`text-[10px] mt-1 ${
                      isSelected ? "text-[#E8E4DC]/50" : "text-[#E8E4DC]/25"
                    }`}
                  >
                    {pref.cn}
                  </p>
                </div>
                <span
                  className={`text-[10px] font-mono ${
                    isSelected ? "text-[#C95A3D]" : "text-[#E8E4DC]/20"
                  }`}
                >
                  {isSelected ? "✓" : "—"}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Movement line */}
        <motion.div
          className="mt-14 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          <div className="h-px flex-1 bg-[#E8E4DC]/10" />
          <span className="text-[#C95A3D]/60 text-[9px] tracking-[0.3em] uppercase font-mono">
            your taste
          </span>
          <div className="h-px flex-1 bg-[#E8E4DC]/10" />
        </motion.div>
      </div>

      {/* Right side: vertical accent line */}
      <div className="hidden lg:flex lg:w-[40%] relative">
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-px bg-[#C95A3D]/10"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#C95A3D]/40 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.8 }}
        />
        <motion.div
          className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#C95A3D]/30 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        />
      </div>
    </section>
  );
}
