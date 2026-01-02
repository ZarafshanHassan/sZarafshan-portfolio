import React from 'react'
import projects from '../data/projects'
import { motion } from 'framer-motion'

export default function Projects(){
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div key={p.id} className="bg-white rounded-2xl shadow-sm border overflow-hidden" initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5, delay:i*0.08}} viewport={{once:true}}>

           {/* Image with teal overlay and smooth hover zoom */}
          <div className="relative group overflow-hidden rounded-t-2xl">
            <div className="relative w-full h-52">
              {/* Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Teal overlay (richer tone + synced zoom) */}
              <div className="absolute inset-0 bg-teal-600/45 group-hover:bg-teal-600/55 transition-all duration-700 transform group-hover:scale-110"></div>
            </div>
          </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{p.stack}</p>
              <p className="mb-4">{p.description}</p>
              {p.link && p.link !== '#' && <a href={p.link} target="_blank" rel="noreferrer" className="text-tealAccent font-medium">Live / More →</a>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
