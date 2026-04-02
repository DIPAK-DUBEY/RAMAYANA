import React, { useState } from 'react'
import './style.css'
import Astras from './hathiiyaar'
const Weapons = () => {
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
  return (
    <div className='colors border-t border-blue-900 '>
      <div className='flex flex-col justify-center items-center mt-30 gap-5 flex-wrap'>
        <h1 className=' mainfont text-3xl text-blue-400 '>AstraVerse</h1>
        <h1 className=' SecondMain  min-[400px]:text-2xl sm:text-4xl md:text-5xl lg:text-5xl text-white text-center '>Sacred Astras of the  <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 font-bold'>Ramayana</span></h1>
      </div>
      
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-[1330px] mx-auto mt-10 p-5">
        {Astras.map((items, index) => {
          return (
            <div
              key={index}
              className="colorss min-w-[220px] text-center w-full border border-blue-300 rounded-[10px] flex flex-col justify-between transition-all duration-200 hover:scale-[1.025] mt-4"
            >
              <div className="flex flex-col gap-1 py-5 px-7 h-full">
                <h1 className={Colors[index] + " maintext text-2xl"}>
                  {items.name}
                </h1>
                <p className="hover:text-white/80 text-white/60 text-[13px]">{items.summary}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
export default Weapons