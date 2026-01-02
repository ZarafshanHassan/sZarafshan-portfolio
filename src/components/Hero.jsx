import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
<motion.section
  className="min-h-[85vh] max-w-6xl mx-auto px-6  grid grid-cols-1 md:grid-cols-3 items-center gap-10"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  {/* Text content: spans 2 columns */}
  <motion.div
    className="md:col-span-2 flex flex-col justify-center"
    initial={{ x: -30, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <h6 className="text-3xl font-semibold text-gray-700 mb-2">
      Hi, I’m <span className="text-tealAccent">Zarafshan!</span>
    </h6>

    <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent leading-tight">
      Software Developer
    </h1>

    <p className="text-lg mb-6 leading-relaxed">
      Full-Stack Developer with 4+ years of experience building scalable and secure web apps. Skilled in React, Angular, Next.js, and .NET, with a strong focus on performance, clean code, and great user experience. Passionate about creating reliable solutions for fintech and enterprise systems.
    </p>

    <div className="flex gap-4">
      <a
        href="#projects"
        className="px-5 py-2 rounded-lg bg-gradient-to-r from-tealAccent to-tealAccentDark text-white font-medium"
      >
        View Projects
      </a>
      <a
        href="https://www.linkedin.com/in/szhassan"
        target="_blank"
        rel="noreferrer"
        className="px-5 py-2 rounded-lg border border-gray-300 hover:border-tealAccent text-gray-700 hover:text-tealAccent transition-colors"
      >
        LinkedIn
      </a>
    </div>
  </motion.div>

  <motion.div
     className="flex justify-center md:justify-end md:col-span-1 self-center -mt-6"initial={{ x: 30, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <img
      src="/images/profile.jpg"
      alt="Zarafshan Hassan"
      className="w-64 h-64 object-cover rounded-full shadow-lg border-4 border-tealAccent/40 md:ml-auto"
    />
  </motion.div>
</motion.section>

  )
}
