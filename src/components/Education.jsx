import React from 'react'
import { motion } from 'framer-motion'

export default function Education(){
  return (
    <motion.section id="about" className="max-w-6xl mx-auto px-6 py-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
      <h2 className="text-2xl font-semibold mb-4">Education and Languages</h2>
      <p className="mb-4 text-gray-600 font-semibold">
        • MS – High Integrity Systems (Frankfurt University of Applied Sciences)
        <span className="mx-3"></span>
        • BS – Software Engineering (Sir Syed University of Engineering and Tech.)
      </p>
      <p className="mb-4 text-gray-600 font-semibold">• Languages: English (C1), German (A2).</p>
    </motion.section>
  )
}
