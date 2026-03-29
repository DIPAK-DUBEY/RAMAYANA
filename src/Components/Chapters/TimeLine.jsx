import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './style.css'
import React from 'react'
import { motion } from 'framer-motion';

const TimeLine = () => {
  const ramayanaTimeline = [
    {
      date: "Before War",
      title: "Sita's Abduction",
      subtitle: "The Beginning of Conflict",
      description:
        "Ravana abducts Sita from Panchavati. This act sets the stage for the great war between Rama and Ravana."
    },
    {
      date: "Alliance Phase",
      title: "Hanuman Meets Rama",
      subtitle: "The Divine Alliance",
      description:
        "Hanuman unites Rama with Sugriva. The Vanara army is formed to search for Sita."
    },
    {
      date: "Before Battle",
      title: "Lanka Discovered",
      subtitle: "Hanuman's Leap",
      description:
        "Hanuman leaps across the ocean, finds Sita in Ashoka Vatika, and burns Lanka as a warning."
    },
    {
      date: "Day 1",
      title: "War Begins",
      subtitle: "Battle of Lanka",
      description:
        "Rama's army crosses the ocean via the Ram Setu. The great war between Vanaras and Rakshasas begins."
    },
    {
      date: "Day 2–5",
      title: "Fierce Battles",
      subtitle: "Clash of Armies",
      description:
        "Intense battles unfold between Vanaras and Rakshasas. Many warriors fall on both sides."
    },
    {
      date: "Day 6",
      title: "Indrajit’s Illusion",
      subtitle: "Naga Astra",
      description:
        "Indrajit uses powerful weapons to bind Rama and Lakshmana. Garuda arrives and frees them."
    },
    {
      date: "Day 7",
      title: "Lakshmana Wounded",
      subtitle: "Sanjivani Quest",
      description:
        "Lakshmana is struck unconscious. Hanuman brings the Sanjivani herb to save his life."
    },
    {
      date: "Day 8–9",
      title: "Kumbhakarna Falls",
      subtitle: "Ravana’s Brother",
      description:
        "Kumbhakarna enters the battlefield with immense power but is ultimately slain by Rama."
    },
    {
      date: "Day 10",
      title: "Indrajit Slain",
      subtitle: "Turning Point",
      description:
        "Lakshmana defeats Indrajit, weakening Ravana's forces significantly."
    },
    {
      date: "Final Day",
      title: "Ravana Falls",
      subtitle: "Victory of Dharma",
      description:
        "Rama defeats Ravana in a fierce battle, restoring dharma and rescuing Sita."
    },
    {
      date: "Aftermath",
      title: "Return to Ayodhya",
      subtitle: "Ram Rajya Begins",
      description:
        "Rama returns to Ayodhya with Sita and Lakshmana. A golden era of peace and righteousness begins."
    }
  ];
  return (
    <>
      <div className='bg-black'>
        <div className='flex flex-col gap-4 justify-center text-white items-center'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className='FontMain text-blue-400 text-lg sm:text-xl md:text-2xl text-center'
          >
            The Battle of Lanka
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className='SecondMain text-white text-3xl sm:text-5xl md:text-6xl text-center leading-tight'
          >
            The Triumph of{" "}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="SecondMain text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 font-bold"
            >
              Dharma
            </motion.span>
          </motion.h1>

          {/* LINE */}
          <motion.hr
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "200px", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className='border-blue-700 mt-2'
          />

        </div>
        <VerticalTimeline>
          {ramayanaTimeline.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.date}
              contentStyle={{
                background: "rgba(5, 13, 21, 1)",
                color: "#fff",
              }}
              iconStyle={{
                background: "rgb(59, 130, 246)",
                color: "#fff",
                width: "30px",
                height: "30px",
                border: "1px solid",
                className: 'bg-red-600',
              }}
            >
              <h3 className='TitleText  text-blue-600 text-2xl '>{item.title}</h3>
              <h4 className='SubTitleText text-[16px]' > {item.subtitle}</h4>
              <p className='DescriptionText text-blue-200'>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default TimeLine
