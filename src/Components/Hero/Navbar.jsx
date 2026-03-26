import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AudioPlayingButton from "./AudioPlayingButton";
const Navbar = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/10 border-b border-blue-600/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
          <h1 className="text-blue-400 text-base sm:text-lg font-semibold">
            रामायण
          </h1>

         <AudioPlayingButton/>
        </div>
      </div>
    </>
  )
};
export default Navbar;