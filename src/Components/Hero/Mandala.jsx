import React from "react";
import { motion } from "framer-motion";

 const Mandala = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      className="absolute w-[90vw] max-w-[820px] h-[90vw] max-h-[820px] opacity-[0.06]"
      style={{
        background:
          "repeating-conic-gradient(rgba(59,130,246,0.35) 0deg 1deg, transparent 1deg 8deg)"
      }}
    />

    <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute w-[95vw] max-w-[900px] h-[95vw] max-h-[900px] rounded-full border border-blue-500/10" />
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }} className="absolute w-[80vw] max-w-[760px] h-[80vw] max-h-[760px] rounded-full border border-blue-500/12" />
    <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute w-[65vw] max-w-[620px] h-[65vw] max-h-[620px] rounded-full border border-blue-500/15" />
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="absolute w-[50vw] max-w-[500px] h-[50vw] max-h-[500px] rounded-full border border-blue-500/18" />
    <motion.div animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="absolute w-[38vw] max-w-[380px] h-[38vw] max-h-[380px] rounded-full border border-blue-500/22" />
  </div>
);
export default Mandala;