import React, { useEffect, useState } from 'react'
import './style.css'
import { X as CloseIcon } from 'lucide-react';
import Astras from './hathiiyaar'
const Weapons = () => {
  const [showItems, SetShowItems] = useState(false);
  const [showDetails, SetShowDetails] = useState('');
  const Colors = [
    "text-yellow-600",
    "text-red-600",
    "text-blue-600",
    "text-green-600",
    "text-yellow-600",
    "text-green-600",
    "text-red-600",
    "text-yellow-600",
    "text-red-600",
    "text-blue-600"];
  console.log(showDetails)
  console.log(showItems)
  useEffect(() => {

  }, [showItems]);
  return (
    <div className={'colors' + '   border-t border-blue-900   relative pb-40'}>
      <div className='flex flex-col justify-center items-center mt-30 gap-5 flex-wrap  '>
        <h1 className=' mainfont text-3xl text-blue-400 '>AstraVerse</h1>
        <h1 className=' SecondMain  min-[400px]:text-2xl sm:text-4xl md:text-5xl lg:text-5xl text-white text-center '>Sacred Astras of the  <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 font-bold'>Ramayana</span></h1>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-[1330px] mx-auto mt-10 p-5 auto-rows-fr ">
        {Astras.map((items, index) => {
          return (
            <div
              key={index}
              className="group colorss min-w-[250px]   text-center w-full border border-blue-300 rounded-[10px] flex flex-col justify-between transition-all duration-200 hover:scale-[1.025] mt-4   " onClick={() => {
                SetShowItems(prev => prev = true);
                SetShowDetails(prev => prev = items)
              }}
            >


              <div className="flex flex-col gap-1 py-5 px-7 h-full" >
                <h1 className={Colors[index] + " maintext text-2xl opacity-65 group-hover:opacity-100"}>
                  {items.name}
                </h1>
                <p className="group-hover:text-white/90 text-white/70 text-[13px] opacity-65 group-hover:opacity-100 ">{items.summary}</p>
              </div>
            </div>
          );
        })}
        {

          showItems ?
            <div className='absolute   sm:top-[25%] md:top-[30%] lg:top-[10%]  left-0 w-full backdrop-blur-[5px] bg-black/10 border-b  px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-14 md:py-15'>
              <div className=' mx-auto group border border-blue-800 bg-gradient-to-b from-[#050d15] via-[#030b1c] to-[#000000] overflow-hidden max-w-[520px] rounded-xl shadow-xl'>
                <div className="w-full relative h-48 overflow-hidden">

                  <CloseIcon
                    size={26}
                    className='absolute right-3 top-3 z-50 cursor-pointer 
                  text-[#7098f5db] opacity-70 hover:text-[#2e6dff]'
                    onClick={(e) => {
                      e.stopPropagation();
                      SetShowItems(false);
                      SetShowDetails('');
                    }}
                  />

                  <img
                    src={showDetails.image}
                    alt={showDetails.image}
                    className="w-full h-full object-cover object-[center_20%]  
                  transition-transform duration-500 ease-out
                  group-hover:scale-105"
                  />


                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                </div>


                <div className='flex flex-col gap-3 p-5'>


                  <div className="flex justify-between items-center">
                    <span className='text-blue-400 text-xs tracking-wide'>
                      {showDetails.category}
                    </span>

                    <span className="text-xs text-yellow-400 font-medium">
                      ⚡ {showDetails.powerLevel}/10
                    </span>
                  </div>


                  <h1 className='text-white text-2xl font-semibold tracking-wide'>
                    {showDetails.name}
                  </h1>


                  <p className='text-gray-300 text-sm leading-relaxed'>
                    “{showDetails.description}”
                  </p>

                  <hr className='border-blue-500 opacity-20' />


                  <div className="grid grid-cols-2 gap-3 text-xs">

                    <div>
                      <p className="text-blue-400">Origin</p>
                      <p className="text-gray-300">{showDetails.origin}</p>
                    </div>

                    <div>
                      <p className="text-blue-400">Element</p>
                      <p className="text-gray-300 capitalize">{showDetails.element}</p>
                    </div>

                    <div>
                      <p className="text-blue-400">Wielder</p>
                      <p className="text-gray-300">
                        {showDetails.wielder.join(", ")}
                      </p>
                    </div>

                    <div>
                      <p className="text-blue-400">Used Against</p>
                      <p className="text-gray-300">
                        {showDetails.usedAgainst.join(", ")}
                      </p>
                    </div>

                  </div>


                  <div>
                    <p className="text-blue-400 text-xs">Symbolism</p>
                    <p className="text-gray-400 text-xs italic">
                      {showDetails.symbolism}
                    </p>
                  </div>


                  <div className='flex flex-wrap gap-2 mt-2'>
                    {showDetails.effects.map((power, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-[10px] bg-blue-900/30 
                    border border-blue-700 rounded-full text-blue-200"
                      >
                        {power}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div> : ''
        }
      </div>
    </div>
  )
}
export default Weapons