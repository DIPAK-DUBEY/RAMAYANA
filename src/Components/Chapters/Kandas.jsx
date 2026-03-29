import React, { useState } from "react";
import { motion } from "framer-motion";
import './style.css'
export const kandas = [
  {
    id: 1,
    title: "Bala Kanda",
    subtitle: "Book of Childhood",
    content:
      "Birth of Rama, his early life, and marriage to Sita after breaking Shiva’s bow."
  },
  {
    id: 2,
    title: "Ayodhya Kanda",
    subtitle: "Book of Ayodhya",
    content:
      "Rama is exiled due to Kaikeyi’s demand; Bharata rules Ayodhya in his name."
  },
  {
    id: 3,
    title: "Aranya Kanda",
    subtitle: "Book of the Forest",
    content:
      "Life in exile and Sita’s abduction by Ravana, triggering the central conflict."
  },
  {
    id: 4,
    title: "Kiskindha Kanda",
    subtitle: "Book of Kishkindha",
    content:"Rama allies with Sugriva and Hanuman to begin the search for Sita."
  },
  {
    id: 5,
    title: "Sundara Kanda",
    subtitle: "Book of Beauty",
    content:
      "Hanuman finds Sita in Lanka and proves his strength by burning the city."
  },
  {
    id: 6,
    title: "Yuddha Kanda",
    subtitle: "Book of War",
    content:
      "Great war in Lanka where Rama defeats Ravana and rescues Sita."
  },
  {
    id: 7,
    title: "Uttara Kanda",
    subtitle: "The Final Book",
    content:
      "Sita’s exile, Lava-Kusha’s story, and Rama’s final return to divinity."
  }
];
export default function Kandas() {
  const [active, setActive] = useState(null);
  return (
    <div className=" bg-black border-2 border-t-blue-800">
      <div className="flex flex-col items-center mt-8 sm:mt-12 gap-2 px-4">
        <h1 className="FontMain text-blue-400 text-lg sm:text-xl md:text-2xl text-center">
          The Seven Kandas
        </h1>
        <h1 className="SecondMain text-white text-3xl sm:text-5xl md:text-6xl text-center leading-tight">
          The Sacred&nbsp;
          <span className="SecondMain text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 font-bold">
            Books
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6  max-w-[1330px] mx-auto mb-25">
        {kandas.map((item) =>(
          <motion.div
            key={item.id}
            initial="hidden"
            whileInView="visible"
            layout
            transition={{ layout: { duration: 0.5, ease: "easeIn" } }}
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
            className="bg-black/40  hover:bg-gradient-to-b hover:from-[#050d15] hover:via-[#030b1c] hover:to-[#000000] border border-blue-500/20 rounded-xl p-5 text-center max-w-7xl hover:border-1 hover:border-blue-700" onClick={() =>
              setActive(active === item.id ? null : item.id)
            }>
            <h2 className="text-blue-400 text-xl font-semibold Mainfont">
              {item.title}
            </h2>
            <p className="text-blue-200 text-sm mt-1">
              {item.subtitle}
            </p>
            {active === item.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-blue-100 mt-4 text-sm overflow-hidden"
              
              >
                {item.content}
              </motion.div>
            )}
            <button
              className="mt-4 text-blue-400 text-sm hover:underline"
            >
              {active === item.id ? "Close" : "Read more ›"}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}