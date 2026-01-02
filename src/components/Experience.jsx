import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Full-Stack Developer (React.js, Next.js) – Remote",
      duration: "Jul 2022 – Nov 2024",
      points: [
        "Built and deployed secure, scalable web applications for fintech and banking clients.",
        "Developed reusable components and responsive UI layouts with React, Next.js, and Tailwind CSS.",
        "Improved SEO and performance using SSR/SSG in Next.js and efficient state management with Redux.",
        "Integrated RESTful APIs with token-based authentication and role-based access control.",
        "Collaborated cross-functionally with designers, QA, and backend engineers in Agile sprints.",
      ],
    },
    {
      role: "Full Stack Developer – DataSoft Pvt. Limited, Pakistan",
      duration: "Jun 2020 – Jan 2021",
      points: [
        "Built enterprise-level education payment portals using Angular, ASP.NET, and SQL Server.",
        "Integrated global payment gateways (UnionPay, IndiaPay, ChinaPay) with PCI-DSS compliance.",
        "Optimized database queries, reducing dashboard response time by 50%.",
        "Strengthened API security using OAuth and implemented Swagger documentation.",
        "Automated deployments via GitHub Actions and Vercel for faster feedback and delivery.",
      ],
    },
    {
      role: "Software Engineer – Systems Limited, Karachi, Pakistan",
      duration: "Mar 2018 – Jan 2020",
      points: [
        "Developed Angular-based dashboards and admin portals for banking and government projects.",
        "Automated back-end workflows using Java and Spring Boot, reducing manual verification by 70%.",
        "Implemented REST APIs with RBAC and JWT-based authorization.",
        "Enhanced system reliability via CI/CD pipelines (Jenkins, Git), achieving 99.9% uptime.",
        "Participated in Agile sprint cycles, ensuring timely delivery of core modules.",
      ],
    },
  ];

  const certifications = [
    {
      title: "GenAI Engineer Certification Program",
      issuer:
        "Completed one-year Applied Cloud GenAI Engineering Program (Jan 2023 – Dec 2024)",
    },
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2
        className="text-2xl font-semibold mb-8 flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

      Relevant Experience
      </motion.h2>

      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-white/5 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center flex-wrap mb-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {exp.role}
              </h3>
              <span className="text-sm text-gray-500">{exp.duration}</span>
            </div>
            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-1">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Certifications Section */}
      <motion.div
        id="certifications"
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-6">Certifications</h2>

        <div className="space-y-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-tealAccent/20 bg-gradient-to-r from-tealAccent/10 via-white to-tealAccent/5"
            >
              <h3 className="text-base font-medium text-gray-800 flex items-center gap-2">
                <Award className="w-5 h-5 text-tealAccent" />
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
