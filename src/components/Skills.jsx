import React from 'react'
import { motion } from 'framer-motion'
import { Code, Layout, Server, Database, Wrench, TestTube } from 'lucide-react'

export default function Skills() {
  const section = (Icon, title, items, delay = 0) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-gray-800">
        <Icon className="text-tealAccent w-5 h-5" /> {title}
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {items.map(skill => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-tealAccent/10 to-tealAccent/5 text-tealAccent border border-tealAccent/20 hover:from-tealAccent/20 hover:to-tealAccent/10 transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-4">
        Technical Expertise
      </h2>

      <div className="space-y-10">
        {section(Code, 'Languages', ['JavaScript', 'TypeScript', 'Java', 'C#', 'SQL'], 0)}
        {section(Layout, 'Frontend Development', ['Angular', 'React.js', 'Next.js', 'RxJS', 'Redux', 'Tailwind CSS', 'Material UI', 'HTML5', 'CSS3'], 0.1)}
        {section(Server, 'Backend Development', ['Spring Boot', 'ASP.NET', 'Node.js', 'REST API', 'GraphQL'], 0.2)}
        {section(Database, 'Databases', ['SQL Server', 'PostgreSQL', 'MySQL'], 0.3)}
        {section(Wrench, 'DevOps & Tools', ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Vercel', 'Jira'], 0.4)}
        {section(TestTube, 'Testing & QA', ['Jasmine', 'Karma', 'Jest', 'Cypress'], 0.5)}
      </div>
    </section>
  )
}

