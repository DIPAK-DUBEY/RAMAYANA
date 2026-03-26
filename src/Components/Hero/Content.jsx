import React from "react";
import { motion } from "framer-motion";
 const Content = () => (
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-blue-200 mb-6 text-lg sm:text-xl md:text-2xl font-semibold"
    >
      ॥ श्रीरामाय नमः ॥
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="text-5xl sm:text-7xl md:text-9xl font-bold bg-linear-to-r from-blue-300 via-blue-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"
    >
      RAMAYANA
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-4 text-blue-200 text-sm sm:text-base md:text-lg font-semibold"
    >
      THE TIMELESS EPIC OF LORD RAM
    </motion.p>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-3 text-blue-300 italic text-sm sm:text-base max-w-md sm:max-w-xl"
    >
      The journey of dharma, devotion, and righteousness.
    </motion.p>

    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      whileHover={{ scale: 1.05 }}
      className="mt-6 px-4 sm:px-6 py-2 border border-blue-400 rounded-full text-xs sm:text-sm bg-white/5 hover:bg-blue-500/20 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
    >
      Explore Story
    </motion.button>
  </div>
);
export default Content;