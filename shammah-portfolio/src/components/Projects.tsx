import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Lock } from 'lucide-react';

const projects = [
  {
    title: "ScreenSense AI",
    category: "Machine Learning & Web",
    desc: "A Netflix-style recommendation engine powered by a Random Forest algorithm (RMSE 0.79). Features a Flask backend that processes 100k+ ratings to deliver personalized movie suggestions in real-time.",
    tags: ["Python Flask", "Random Forest", "Scikit-Learn", "TMDB API"],
    links: { demo: "http://zviko163.pythonanywhere.com", code: "https://github.com/zviko163/ML_Final---MovieLens-Dataset" }, // Added live link from report!
    private: false,
    color: "from-red-600 to-rose-900"
  },
  {
    title: "Logarithm Internship Backend System",
    category: "DevOps & Backend",
    desc: "A unified backend architecture for a multi-campus institution. Automated deployment workflows using GitHub Actions and Docker, replacing manual server configuration.",
    tags: ["Java Spring Boot", "Docker", "CI/CD", "PostgreSQL"],
    links: { demo: null, code: null }, 
    private: true,
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "FIFA Player Valuation",
    category: "Data Science",
    desc: "An interactive analytics tool that predicts football player market values with 89% accuracy. deployed on PythonAnywhere for public access.",
    tags: ["Streamlit", "Python", "Pandas", "Random Forest"],
    links: { demo: "https://fifa-scout.streamlit.app/", code: "https://github.com/zviko163/ML_Individual_Project" },
    private: false,
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "BCee Health Venture",
    category: "Health Tech R&D", // <--- stronger category
    desc: "A $20k funded research initiative to tackle hypertension in Ghana. Teamed-up in the technical feasibility study and developed the initial mobile prototype for patient vital monitoring.", 
    tags: ["R&D", "Grant Secured", "System Design"], 
    links: { demo: null, code: null }, 
    private: false,
    color: "from-violet-600 to-purple-600"
  },
  {
    title: "ZAOGA MICC YouthMinistry Website",
    category: "Full Stack Web",
    desc: "A centralized digital hub for a church youth community. Architected the React frontend to replace scattered communication channels with a unified responsive platform.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Framer Motion"],
    links: { demo: "#", code: "https://github.com/zviko163/zaoga-micc-youth-website" },
    private: false,
    color: "from-amber-500 to-orange-600"
  },
  {
    title: "E-Wallet Service API",
    category: "Fintech & Backend",
    desc: "A robust financial backend handling user accounts, peer-to-peer money transfers, and transaction history. Features secure authentication and interactive API documentation via Swagger.",
    tags: ["Java Spring Boot", "MySQL", "Docker", "Swagger UI"],
    links: { demo: "http://194.147.58.241:8082/swagger-ui/index.html", code: "https://github.com/zviko163/FUTURE_FS_01" },
    private: false,
    color: "from-cyan-600 to-blue-700"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <span className="text-amber-600 dark:text-amber-500 font-medium tracking-wider uppercase text-sm">02. Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-stone-900 dark:text-stone-100">
            Selected <br />
            <span className="text-stone-400 dark:text-stone-600">Works.</span>
          </h2>
        </div>
        
        <a 
          href="https://github.com/zviko163" 
          target="_blank" 
          rel="noreferrer"
          className="group flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors pb-2 border-b border-stone-300 dark:border-stone-700 hover:border-amber-600"
        >
          View all repositories 
          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </motion.div>

      {/* Grid Layout - 5 Items Logic */}
      {/* The classes below ensure the last item centers itself if it's alone on a row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        
        {projects.map((project, i) => {
          // Logic: First 4 items span 2 cols (making a 3-col grid effectively). 
          // The 5th item spans across to look centered or we treat it as a 2-3 split.
          // SIMPLER APPROACH: Just use a standard grid and let them flow.
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`
                group relative rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 overflow-hidden hover:shadow-2xl hover:shadow-stone-900/10 dark:hover:shadow-black/50 transition-all duration-500 flex flex-col
                ${i >= 3 ? 'lg:col-span-3' : 'lg:col-span-2'} 
              `}
              // ^ CSS TRICK: This makes the top 3 items take 1/3 width each, and bottom 2 items take 1/2 width each. 
              // This creates a perfect "3 on top, 2 on bottom" layout.
            >
              {/* Project Cover */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.color} opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center`}>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-bold tracking-wide border border-white/30 shadow-lg">
                  {project.category}
                </span>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag, t) => (
                    <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-stone-100 dark:border-stone-800">
                  {project.private ? (
                     <div className="flex items-center gap-2 text-stone-400 text-xs font-medium">
                       <Lock size={14} />
                       <span>Private Enterprise Repo</span>
                     </div>
                  ) : (
                    <div className="flex gap-4">
                      {project.links.code && (
                        <a href={project.links.code} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors text-sm font-bold">
                          <Github size={18} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors text-sm font-bold">
                          <ExternalLink size={18} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
