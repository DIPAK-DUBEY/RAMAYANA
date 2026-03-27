import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react';
import Music from '../RamSiyaRam.mp3'
const AudioPlayingButton = () => {
  const AudioRef = useRef(null);
  const [isPlaying,setIsPlaying]= useState(false);
  const ToggleAudio = ()=>{
    if(!AudioRef.current) return;
    if(isPlaying){
      AudioRef.current.pause();
    }else{
      AudioRef.current.play();
      AudioRef.current.volume=0.1;
    }
    setIsPlaying((prev)=>!prev);
  }
  useEffect(()=>{

    
  },[isPlaying])
  return (
    <>
      <button className="flex items-center gap-2 text-blue-200 text-xs sm:text-sm px-4 sm:px-5 py-1.5 rounded-[2px] border border-blue-400/40 bg-white/5 hover:bg-blue-500/20 hover:text-white transition-all duration-300 backdrop-blur-md shadow-[0_0_10px_rgba(59,130,246,0.3)]"
        onClick={ToggleAudio}
      >
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-blue-400"
        />
        {isPlaying ? "Pause Music " : "Play Music "}
      </button>
      <audio
        ref={AudioRef}
        src={Music}
        onEnded={() => setIsPlaying(false)}
      />
    </>
  )
}

export default AudioPlayingButton