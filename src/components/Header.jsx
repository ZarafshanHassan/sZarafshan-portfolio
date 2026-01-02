import React from 'react'

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
  {/* Left Section  */}
  <div className="flex items-center gap-3">
    {/* Logo Circle */}
    <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
      ZH
    </div>
    {/* Name */}
    <span className="text-xl font-semibold text-teal-700">Syeda Zarafshan Hassan</span>
  </div>

  {/* Navigation Links */}
  <nav className="space-x-6 text-gray-700">
    <a href="#projects" className="hover:text-tealAccent transition-colors">Projects</a>
    <a href="#skills" className="hover:text-tealAccent transition-colors">Skills</a>
    <a href="#experience" className="hover:text-tealAccent transition-colors">Experience</a>
    <a href="#contact" className="hover:text-tealAccent transition-colors">Contact</a>
  </nav>
</header>

  )
}
