import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Dashboard",
    desc: "A full-stack analytics platform allowing shop owners to track revenue, inventory, and customer metrics in real-time.",
    tags: ["React", "Node.js", "PostgreSQL"],
    links: { demo: "#", code: "#" },
    color: "from-amber-500 to-orange-600"
  },
  {
    title: "Task Master AI",
    desc: "Productivity application leveraging OpenAI's API to automatically prioritize and categorize user tasks.",
    tags: ["Next.js", "TypeScript", "OpenAI"],
    links: { demo: "#", code: "#" },
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Portfolio v1",
    desc: "The very site you are looking at now. Built with modern animations and a focus on performance and accessibility.",
    tags: ["React", "Framer Motion", "Tailwind"],
    links: { demo: "#", code: "#" },
    color: "from-emerald-500 to-teal-600"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <span className="text-amber-600 dark:text-amber-500 font-medium tracking-wider uppercase text-sm">02. Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-stone-900 dark:text-stone-100">
            Selected <br />
            <span className="text-stone-400 dark:text-stone-600">Projects.</span>
          </h2>
        </div>
        <button className="flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors pb-2 border-b border-stone-300 dark:border-stone-700 hover:border-amber-600">
          View all repositories <ArrowUpRight size={18} />
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-3xl bg-stone-100 dark:bg-stone-900 overflow-hidden border border-stone-200 dark:border-stone-800 hover:shadow-2xl hover:shadow-stone-900/10 dark:hover:shadow-black/50 transition-all duration-500"
          >
            {/* Project Image / Placeholder Gradient */}
            <div className={`h-48 w-full bg-gradient-to-br ${project.color} opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out`} />
            
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, t) => (
                  <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-white/50 dark:bg-stone-800/50 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-stone-600 dark:text-stone-400 mb-6 line-clamp-3">
                {project.desc}
              </p>
              
              <div className="flex gap-4">
                <a href={project.links.code} className="p-2 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-amber-500 hover:text-white transition-all">
                  <Github size={20} />
                </a>
                <a href={project.links.demo} className="p-2 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-amber-500 hover:text-white transition-all">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;