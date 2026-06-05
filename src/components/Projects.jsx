import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projectCategories, projects } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';

const ProjectCard = ({ project, index }) => (
  <motion.article
    layout
    variants={{
      hidden: { opacity: 0, y: 34 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
      exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
    }}
    whileHover={{ y: -10, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
    className="group flex min-h-[440px] flex-col overflow-hidden rounded-2xl border border-cyan-300/15 bg-white/[0.06] shadow-xl shadow-black/10 backdrop-blur-xl transition-shadow hover:shadow-2xl hover:shadow-cyan-950/25"
  >
    <div className="relative h-40 overflow-hidden bg-slate-950 p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(51,167,177,.45),transparent_30%),radial-gradient(circle_at_75%_35%,rgba(33,77,101,.75),transparent_32%),linear-gradient(135deg,#071923,#214d65)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-100 backdrop-blur-xl">{project.date}</span>
        <div>
          <p className="text-sm font-semibold uppercase text-white/60">Case Study</p>
          <h3 className="mt-2 font-poppins text-2xl font-bold leading-tight text-white">{project.name}</h3>
        </div>
      </div>
    </div>

    <div className="flex flex-1 flex-col p-6">
      <p className="leading-7 text-slate-300">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="rounded-full border border-cyan-300/15 bg-[#214d65]/40 px-3 py-2 text-xs font-bold text-cyan-100">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex gap-3 pt-7">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-cyan-300/20 px-4 py-3 text-sm font-bold text-cyan-100 transition hover:bg-cyan-200 hover:text-[#071923]"
          >
            <FaGithub /> GitHub
          </motion.a>
        )}
        <motion.a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-200 px-4 py-3 text-sm font-bold text-[#071923] shadow-lg shadow-cyan-950/20 ${
            project.github ? 'flex-1' : 'w-full'
          }`}
        >
          <FaExternalLinkAlt /> {project.github ? 'Demo' : 'Live Site'}
        </motion.a>
      </div>
    </div>
  </motion.article>
);

const Projects = () => {
  const { ref, isInView } = useReveal();
  const [activeTab, setActiveTab] = useState(projectCategories[0].id);

  const filteredProjects = projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="portfolio-page portfolio-page-alt py-20 sm:py-24">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projects"
          title="Selected builds that show"
          accent="real product work"
          description="Full-stack dashboards, business websites, mobile architecture, authentication, data workflows, and responsive UI implementation."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mb-12 flex max-w-3xl flex-wrap items-center justify-center gap-2 rounded-2xl border border-cyan-300/15 bg-white/[0.04] p-2 backdrop-blur-xl sm:gap-3"
          role="tablist"
          aria-label="Project categories"
        >
          {projectCategories.map((category) => {
            const isActive = activeTab === category.id;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(category.id)}
                className={`relative rounded-xl px-4 py-2.5 text-sm font-bold transition sm:px-5 sm:py-3 sm:text-base ${
                  isActive ? 'text-[#071923]' : 'text-cyan-100 hover:bg-white/5 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-tab-indicator"
                    className="absolute inset-0 rounded-xl bg-cyan-200 shadow-lg shadow-cyan-950/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            );
          })}
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))
            ) : (
              <motion.div
                key="empty-state"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="col-span-full rounded-2xl border border-dashed border-cyan-300/20 bg-white/[0.03] px-6 py-16 text-center backdrop-blur-xl"
              >
                <p className="font-poppins text-xl font-bold text-white">No projects in this category yet.</p>
                <p className="mt-3 text-slate-400">Projects in this category will appear here soon.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
