import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail, Code, Terminal, Layers } from 'lucide-react';

const projects = [
  {
    title: "Project Alpha",
    description: "A super cool project that does things.",
    tags: ["React", "Vite", "CSS"],
    link: "#"
  },
  {
    title: "Project Beta",
    description: "Another awesome experiment in the web world.",
    tags: ["JS", "Animation"],
    link: "#"
  }
];

function App() {
  return (
    <div className="min-h-screen relative pt-20 pb-12 md:pt-32 md:pb-16">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <main className="container">
        {/* Hero Section */}
        <header className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Adiafos
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light">
              Desarrollador, creativo y entusiasta de la tecnología. 
              Bienvenido a mi rincón personal en GitHub.
            </p>
          </motion.div>
        </header>

        {/* Projects Grid */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Code className="text-indigo-500" size={32} />
            <h2 className="text-3xl" style={{ margin: 0 }}>Proyectos</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-10 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded-full border border-indigo-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={project.link} 
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                >
                  Ver Proyecto <ExternalLink size={18} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Terminal, title: "Clean Code", desc: "Enfoque en código legible y mantenible." },
            { icon: Layers, title: "Modern Stack", desc: "Utilizando las últimas tecnologías web." },
            { icon: Github, title: "Open Source", desc: "Contribuyendo y aprendiendo de la comunidad." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 text-center"
            >
              <item.icon className="mx-auto mb-4 text-indigo-500" size={32} />
              <h4 className="text-xl mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500">© 2026 Adiafos. Hecho con React & Vite.</p>
          <div className="flex gap-6">
            <a href="https://github.com/adiafos" className="text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href={`mailto:${import.meta.env.VITE_EMAIL}`} className="text-slate-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
