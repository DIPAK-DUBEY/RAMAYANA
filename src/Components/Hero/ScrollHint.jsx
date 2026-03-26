import React from "react";
import { motion } from "framer-motion";
 const ScrollHint = () => (
  <div className="absolute bottom-6 w-full flex justify-center">
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="text-blue-300 text-xs tracking-widest opacity-70"
    >
      Scroll ↓
    </motion.div>
  </div>
);
export default ScrollHint;