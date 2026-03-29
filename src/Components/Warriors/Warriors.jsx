import React from 'react'
import { Warriorss } from './index.js'
import './style.css'
import { motion } from 'framer-motion'
const Warriors = () => {
  return (
    <div className='flex flex-col bg-black text-white items-center px-4 sm:px-6 lg:px-10 py-10'>
      <div className='flex flex-col mt-10 py-10 gap-4 text-center'>
        <h1 className='text-lg sm:text-xl text-blue-400'>
          The Eternal Heroes
        </h1>
        <h1 className='MaintextWarriors text-3xl sm:text-5xl lg:text-6xl'>
          Warriors Of{" "}
          <span className='text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700'>
            Ramayana
          </span>
        </h1>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl'
      >
        {
          Warriorss.map((items, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, y: 70 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.9,
                    ease: "easeOut"
                  }
                }
              }}
              className='group border border-blue-300 hover:border-blue-800 
bg-gradient-to-b from-[#050d15] via-[#030b1c] to-[#000000] 
overflow-hidden'
            >

              <div className="w-full h-44 sm:h-48 overflow-hidden">
                <img
                  src={items.image}
                  alt={items.name}
                  className="w-full h-full object-cover object-top 
    transition-transform duration-500 ease-out
    group-hover:scale-120"
                />
              </div>

              {/* Content */}
              <div className='flex flex-col gap-2 p-4 sm:p-5'>

                <h2 className='text-blue-600 text-xs sm:text-sm WarriorIdentity'>
                  {items.identity}
                </h2>

                <h1 className='text-white text-lg sm:text-xl warriorsNames'>
                  {items.name}
                </h1>

                <p className='text-blue-200 text-xs sm:text-sm leading-relaxed'>
                  “{items.summary}”
                </p>

                <hr className='border-blue-500 opacity-30 my-2' />

                {/* Powers */}
                <div className='flex flex-wrap gap-2'>
                  {
                    items.powers.map((power, i) => (
                      <div key={i} className='flex items-center gap-2'>

                        {/* subtle spiritual pulse */}
                        <motion.div
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                          className="w-1.5 h-1.5 rounded-full bg-blue-400"
                        />

                        <span className='text-[10px] sm:text-xs text-gray-300 tracking-wide'>
                          {power}
                        </span>
                      </div>
                    ))
                  }
                </div>

              </div>

            </motion.div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Warriors