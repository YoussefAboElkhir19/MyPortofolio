import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaLayerGroup, FaTools } from 'react-icons/fa';
import { skills } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';

const icons = [FaCode, FaLayerGroup, FaDatabase, FaTools];

const Skills = () => {
  const { ref, isInView } = useReveal();

  return (
    <section id="skills" className="portfolio-page portfolio-page-alt py-20 sm:py-24">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="A practical stack for"
          accent="shipping products"
          description="The CV stack is grouped by how recruiters and clients evaluate work: interface, backend, mobile/data, and tools."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {skills.map((category, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={category.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
                }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-cyan-300/15 bg-white/[0.06] p-6 shadow-xl shadow-black/10 backdrop-blur-xl transition-shadow hover:shadow-2xl hover:shadow-cyan-950/25"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-teal-400 text-[#071923] shadow-lg shadow-cyan-950/20">
                    <Icon />
                  </div>
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
                    {category.items.length} skills
                  </span>
                </div>

                <h3 className="font-poppins text-xl font-bold text-white">{category.title}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-300">{category.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full border border-cyan-300/15 bg-[#214d65]/40 px-3 py-2 text-xs font-bold text-cyan-100"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
