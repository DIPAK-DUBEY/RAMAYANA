import { motion } from "framer-motion";
import './SecondPage.css'

const SecondPageIntro = () => {
  return (
    <div className="colorofIntro text-white px-4 sm:px-6 py-10 sm:py-14 border-t border-blue-900 border-b-2 border-blue-900">

      <div className="
        flex flex-col 
        max-w-[90%] sm:max-w-[700px] lg:max-w-[900px] 
        mx-auto 
        leading-snug sm:leading-relaxed lg:leading-loose
      ">

       
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10 sm:mt-14 mb-4 sm:mb-8"
        >
          <h1 className="
            HeadingOFIntro 
            text-blue-400 
            text-xs sm:text-sm md:text-lg lg:text-xl
            tracking-[0.25em] text-center
          ">
            THE ETERNAL SAGA
          </h1>
        </motion.div>

      
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            paraofIntro 
            text-blue-200 
            text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px]
            text-center
          "
        >
          Born from the divine vision of{" "}
          <span className="spanintro">Sage Vālmīki</span>, the Ramayana unfolds as a timeless journey of dharma, devotion, and righteousness — the story of{" "}
          <span className="spanintro">Lord Ram</span>, the embodiment of virtue, and his quest to uphold truth in the face of exile, loss, and war.

          <br /><br />

          Spanning kingdoms and hearts, from{" "}
          <span className="spanintro">Ayodhya to Lanka</span>, it is a saga of love, sacrifice, loyalty, and the eternal triumph of good over evil.

          <br /><br />

          Its verses echo a universal truth:
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="
            shlokhIntro
            mt-6 sm:mt-8
            text-center 

            text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]

            text-transparent bg-clip-text 
            bg-gradient-to-r from-yellow-700 via-orange-400 to-yellow-500

            drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]
            "
            >

          “Where there is dharma, there is victory". 
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="
            shlokhIntro  text-center 

            text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]

            text-transparent bg-clip-text 
            bg-gradient-to-r from-yellow-700 via-orange-400 to-yellow-500

            drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]
            "
            >

          “Where there is Ram, there is the path of righteousness.”
        </motion.p>
      </div>
    </div>
  );
};

export default SecondPageIntro;