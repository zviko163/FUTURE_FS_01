import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Back-end Developer Intern",
    company: "Logarithm Corporation",
    period: "July 2025 - Aug 2025",
    description: "Engineered a scalable relational database and RESTful APIs using Java Spring Boot for a multi-campus institution.",
    achievements: [
      "Transformed manual workflows into an automated pipeline by implementing CI/CD with GitHub Actions.",
      "Containerized applications using Docker to ensure consistent deployment environments.",
      "Reduced deployment downtime significantly by optimizing the backend architecture."
    ]
  },
  {
    role: "Co-Founder & Team Lead",
    company: "BCee (Ashesi Health Initiative)",
    period: "Aug 2024 - Present",
    description: "Leading the development of an AI-driven mobile solution for hypertension patients to monitor vital signs.",
    achievements: [
      "Secured $20,000 in seed funding by leading the technical pitch to investors.",
      "Managing the cross-functional team and developing the mobile frontend using Flutter.",
      "Moved project from concept to active prototyping phase within 6 months."
    ]
  },
  {
    role: "Freelance Web Developer",
    company: "ZAOGA FIF Ministries",
    period: "Jan 2026 - Present",
    description: "Architecting a centralized digital hub for a youth ministry of 50+ members.",
    achievements: [
      "Conducted requirements gathering to translate organizational needs into a high-fidelity UI/UX design.",
      "Building a responsive React.js platform that is streamlining local organizational communication.",
      "Established a clear sitemap and frontend layout for future scalability."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-amber-600 dark:text-amber-500 font-medium tracking-wider uppercase text-sm">04. Experience</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-stone-900 dark:text-stone-100">
          Where I've <br />
          <span className="text-stone-400 dark:text-stone-600">worked.</span>
        </h2>
      </motion.div>

      <div className="relative border-l-2 border-stone-200 dark:border-stone-800 ml-3 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-100 dark:bg-stone-900 border-2 border-amber-500" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100">{exp.role}</h3>
              <div className="flex items-center gap-2 text-sm font-medium text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800/50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                <Calendar size={14} />
                {exp.period}
              </div>
            </div>
            
            <div className="text-amber-600 dark:text-amber-500 font-medium mb-4 flex items-center gap-2">
              <Briefcase size={16} />
              {exp.company}
            </div>
            
            <p className="text-stone-600 dark:text-stone-400 mb-4 text-lg">
              {exp.description}
            </p>

            <ul className="space-y-2">
              {exp.achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-600 dark:text-stone-400 text-sm md:text-base">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;