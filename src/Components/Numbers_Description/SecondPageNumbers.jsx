import React from 'react'
import { motion } from "framer-motion";
import './SecondPage.css'

const SecondPageNumbers = () => {
  const data = [
    { value: "24,000", label: "SACRED VERSES" },
    { value: "VII", label: "KĀṆḌAS — BOOKS" },
    { value: "500+", label: "SARGAS — CHAPTERS" },
    { value: "ETERNAL", label: "JOURNEY OF DHARMA" }
  ];

  return (
    <div className="w-full py-16 sm:py-20 colors  border-t border-blue-900 border-b border-blue-900">

      <div className="max-w-7xl mx-auto px-6 grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-10 text-center">

        {data.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group flex flex-col items-center justify-center"
          >

            <motion.h2
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="
                fontchange 
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                font-bold 

                text-transparent bg-clip-text 
                bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500

                transition-all duration-500

                filter drop-shadow-[0_0_6px_rgba(59,130,246,0.4)]
                group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,1)]
                group-hover:scale-110

                group-hover:from-blue-500 
                group-hover:via-blue-600 
                group-hover:to-blue-700
              "
            >
              {item.value}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.25 }}
              className="
                mt-3 
                text-blue-200 
                text-[10px] sm:text-xs md:text-sm 
                tracking-widest 
                opacity-80 
                group-hover:opacity-100 
                transition-all duration-500
              "
            >
              {item.label}
            </motion.p>

          </motion.div>
        ))}

      </div>
    </div>
  )
}

export default SecondPageNumbers
