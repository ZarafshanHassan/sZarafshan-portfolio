import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact(){
  return (

<motion.section
  id="contact"
  className="max-w-6xl mx-auto px-6 py-12"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2 className="text-2xl font-semibold mb-6">Contact</h2>

  {/* Email */}
  <p className="mb-4 flex items-center gap-2">
    <span className="font-medium flex items-center gap-2">
      <Mail className="w-5 h-5 " />
      Email:
    </span>
    <a
      href="mailto:zarafshanHassan777@hotmail.com"
      className="flex items-center gap-2 text-tealAccent hover:text-tealAccentDark transition-colors"
    >
      zarafshanHassan777@hotmail.com
    </a>
  </p>

  {/* LinkedIn */}
  <p className="mb-4 flex items-center gap-2">
    <span className="font-medium flex items-center gap-2">
      <Linkedin className="w-5 h-5 " />
      Linkedin:
    </span>
    <a
      href="https://www.linkedin.com/in/szhassan"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 text-tealAccent hover:text-tealAccentDark transition-colors"
    >
      linkedin.com/in/szhassan
    </a>
  </p>

  {/* GitHub */}
  <p className="mb-4 flex items-center gap-2">
    <span className="font-medium flex items-center gap-2">
      <Github className="w-5 h-5 " />
       GitHub:
       </span>
    <a
      href="https://github.com/szarafshanhassan"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 text-tealAccent hover:text-tealAccentDark transition-colors"
    >
     
      github.com/szarafshanhassan
    </a>
  </p>
</motion.section>

    
  )
}
