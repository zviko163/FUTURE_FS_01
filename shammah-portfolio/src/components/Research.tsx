import { motion } from 'framer-motion';
import { FileText, ArrowUpRight, Microscope, Mic, Globe } from 'lucide-react';

const researchItems = [
  {
    title: "Kurima Smart: Shona Voice AI",
    role: "Principal Investigator (Capstone)",
    period: "2025 - Present",
    stats: ["Low-Resource NLP", "NLLB & Whisper", "Telephony Pipeline"], 
    abstract: "Developing a real-time conversational agent for Shona, a low-resource Bantu language. The research focuses on minimizing translation loss between Automatic Speech Recognition (Whisper) and Neural Machine Translation (NLLB) layers. The system integrates with telephony gateways to democratize access to digital services for non-English speaking farmers in Zimbabwe.",
    links: [
      { label: "View Architecture", url: "#" },
    ],
    tags: ["NLP", "Voice AI", "Python", "Research"]
  },
  {
    title: "BCee: AI-Driven Hypertension Management",
    role: "Co-Founder & Technical Lead",
    period: "2024 - Present",
    stats: ["$20k Grant Secured", "Feasibility Study", "Mobile Prototype"], 
    abstract: "Hypertension remains a silent killer in Ghana due to a lack of consistent monitoring. This venture proposes a mobile-first AI solution to digitize vital sign tracking. Secured seed funding from the Ashesi Health Initiative to conduct user research and develop a Flutter-based MVP.",
    links: [
      { label: "View Proposal", url: "#" },
    ],
    tags: ["Health Tech", "Flutter", "User Research"]
  },
  {
    title: "Optimizing Recommendation Engines",
    role: "ML Researcher",
    period: "2025",
    stats: ["RMSE: 0.79", "Random Forest", "Content-Based Filtering"], 
    abstract: "A comparative analysis of collaborative vs. content-based filtering algorithms. Implemented a Random Forest Regressor using Scikit-Learn to predict user ratings with high accuracy. The study focused on overcoming the 'Cold Start' problem in sparse datasets using the TMDB API.",
    links: [
      { label: "Read Report", url: "#" },
    ],
    tags: ["Machine Learning", "Scikit-Learn", "Python"]
  }
];

const Research = () => {
  return (
    <section id="research" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
            <Microscope size={24} />
          </div>
          <span className="text-indigo-600 dark:text-indigo-400 font-medium tracking-wider uppercase text-sm">R&D and Ventures</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100">
          Exploration & <br />
          <span className="text-stone-400 dark:text-stone-600">Discovery.</span>
        </h2>
      </motion.div>

      {/* Research Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {researchItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            // Logic: Make the Capstone (index 0) span full width to highlight it
            className={`
              group p-8 rounded-3xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-indigo-500/50 transition-colors relative overflow-hidden
              ${i === 0 ? 'lg:col-span-2 bg-indigo-50/50 dark:bg-indigo-900/10' : ''}
            `}
          >
            {/* Decorative Background Icon */}
            <div className="absolute top-0 right-0 p-6 opacity-5 dark:opacity-10 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
              {i === 0 ? <Mic size={180} /> : <FileText size={120} />}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 dark:text-stone-400 text-sm font-medium">
                    {item.role} • {item.period}
                  </p>
                </div>
              </div>

              {/* Stats/Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {item.stats.map((stat, s) => (
                  <span key={s} className="px-3 py-1 rounded-md bg-white dark:bg-stone-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-100 dark:border-indigo-800/50 shadow-sm">
                    {stat}
                  </span>
                ))}
              </div>

              <p className={`leading-relaxed mb-8 ${i === 0 ? 'text-lg text-stone-700 dark:text-stone-300' : 'text-stone-600 dark:text-stone-400'}`}>
                {item.abstract}
              </p>

              {/* Footer Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-stone-200 dark:border-stone-800">
                <div className="flex gap-2">
                  {item.tags.map((tag, t) => (
                    <span key={t} className="text-xs text-stone-400 font-mono">#{tag}</span>
                  ))}
                </div>
                
                {item.links.map((link, l) => (
                  <a 
                    key={l} 
                    href={link.url}
                    className="flex items-center gap-2 text-sm font-bold text-stone-900 dark:text-stone-100 hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Research;