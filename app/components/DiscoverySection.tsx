"use client";

import { motion } from "framer-motion";

interface DiscoverySectionProps {
  month: string;
}

export default function DiscoverySection({ month }: DiscoverySectionProps) {
  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen px-6 py-32"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -80 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center gap-0 max-w-3xl">
        <motion.div
          className="w-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="h-px bg-[#E8E4DC]/10 w-full mb-16" />
        </motion.div>

        <motion.h2
          className="text-[12vw] font-bold tracking-[0.1em] leading-[0.9] select-none"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            MANY PLACES
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            YOU COULD GO.
          </motion.div>
        </motion.h2>

        <motion.div
          className="w-full mt-20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="h-px bg-[#E8E4DC]/10 w-full mb-16" />
        </motion.div>

        <motion.h3
          className="text-[8vw] font-bold tracking-[0.15em] leading-[0.95] text-[#E8E4DC]/60 select-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            BUT ONLY
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.35, duration: 0.5 }}
          >
            A FEW
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            MAKE SENSE
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.65, duration: 0.5 }}
          >
            RIGHT NOW.
          </motion.div>
        </motion.h3>

        <motion.p
          className="mt-16 text-sm tracking-[0.12em] text-[#E8E4DC]/30 uppercase text-center leading-relaxed max-w-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.7 }}
        >
          Based on your departure in {month}
        </motion.p>
      </div>
    </motion.section>
  );
}
