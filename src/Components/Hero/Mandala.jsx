import React from "react";
import { motion } from "framer-motion";

const Mandala = () => (
  <div className="absolute inset-0 flex items-center justify-center">

    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      className="absolute w-[70vw] max-w-[600px] h-[70vw] max-h-[600px] opacity-[0.06]"
      style={{
        background:
          "repeating-conic-gradient(rgba(59,130,246,0.35) 0deg 1deg, transparent 1deg 8deg)"
      }}
    />

    <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute w-[75vw] max-w-[650px] h-[75vw] max-h-[650px] rounded-full border border-blue-500/10" />

    <motion.div animate={{ rotate: 360 }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }} className="absolute w-[60vw] max-w-[520px] h-[60vw] max-h-[520px] rounded-full border border-blue-500/12" />

    <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute w-[50vw] max-w-[440px] h-[50vw] max-h-[440px] rounded-full border border-blue-500/15" />

    <motion.div animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="absolute w-[40vw] max-w-[360px] h-[40vw] max-h-[360px] rounded-full border border-blue-500/18" />

    <motion.div animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="absolute w-[30vw] max-w-[280px] h-[30vw] max-h-[280px] rounded-full border border-blue-500/22" />

  </div>
);

export default Mandala;