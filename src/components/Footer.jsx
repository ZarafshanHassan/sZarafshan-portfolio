import React from 'react'
import { motion } from 'framer-motion'

export default function Footer(){
  return (
    <motion.footer className="py-8 text-center text-sm text-gray-500" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-t border-gray-200 mb-4" />
        © {new Date().getFullYear()} Zarafshan Hassan
      </div>
    </motion.footer>
  )
}
