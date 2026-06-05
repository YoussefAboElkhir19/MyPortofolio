import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { experience, training } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';

const Experience = () => {
  const { ref, isInView } = useReveal();

  return (
    <section id="experience" className="portfolio-page py-20 sm:py-24">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Timeline of hands-on"
          accent="delivery"
          description="A mix of freelance delivery, company work, and structured training across frontend, backend, WordPress, and software systems."
        />

        <div ref={ref} className="grid gap-10 lg:grid-cols-[1fr_380px]">
          <div className="relative">
            <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-300 via-[#214d65] to-teal-300 sm:block" />
            <div className="space-y-5">
              {experience.map((item, index) => (
                <motion.article
                  key={`${item.role}-${item.company}`}
                  initial={{ opacity: 0, x: -24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                  className="relative sm:pl-12"
                >
                  <div className="absolute left-0 top-7 hidden h-8 w-8 place-items-center rounded-full border-4 border-[#071923] bg-gradient-to-br from-cyan-300 to-teal-400 text-[#071923] shadow-lg sm:grid">
                    <FaBriefcase className="text-xs" />
                  </div>

                  <div className="rounded-2xl border border-cyan-300/15 bg-white/[0.06] p-6 shadow-xl shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/25">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-bold uppercase text-cyan-300">{item.type}</p>
                        <h3 className="mt-2 font-poppins text-xl font-bold text-white">{item.role}</h3>
                        <p className="mt-1 font-semibold text-slate-300">{item.company}</p>
                      </div>
                      <div className="rounded-2xl border border-cyan-300/15 bg-[#214d65]/40 px-4 py-3 text-sm font-bold text-cyan-100">
                        {item.duration}
                      </div>
                    </div>

                    <p className="mt-4 text-sm font-semibold text-slate-400">{item.location}</p>
                    <p className="mt-4 leading-7 text-slate-300">{item.description}</p>

                    {item.phases ? (
                      <div className="relative mt-6 space-y-0 pl-8">
                        <div className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-cyan-300/50 via-cyan-300/25 to-teal-300/50" />
                        {item.phases.map((phase, phaseIndex) => (
                          <div key={phase.title} className={phaseIndex > 0 ? 'mt-6' : ''}>
                            <div className="relative">
                              <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#071923] bg-gradient-to-br from-cyan-300 to-teal-400 shadow-md shadow-cyan-950/30" />
                              <div>
                                <div className="flex flex-wrap items-center gap-2">
                                  <h4 className="font-poppins text-base font-bold text-white">{phase.title}</h4>
                                  {phase.subtitle && (
                                    <span className="rounded-full border border-cyan-300/20 bg-[#214d65]/50 px-2.5 py-1 text-xs font-bold text-cyan-100">
                                      {phase.subtitle}
                                    </span>
                                  )}
                                </div>
                                <p className="mt-2 text-sm leading-7 text-slate-300">{phase.description}</p>
                                <ul className="mt-3 space-y-2">
                                  {phase.achievements.map((achievement) => (
                                    <li key={achievement} className="flex gap-3 text-sm leading-6 text-slate-300">
                                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/80" />
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="mt-5 space-y-3">
                        {item.achievements.map((achievement) => (
                          <li key={achievement} className="flex gap-3 text-sm leading-6 text-slate-300">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="h-fit rounded-2xl border border-cyan-300/15 bg-[#214d65]/35 p-6 text-white shadow-2xl shadow-black/20 backdrop-blur-xl"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
              <FaCertificate />
            </div>
            <h3 className="font-poppins text-2xl font-bold">Training & Growth</h3>
            <div className="mt-6 space-y-4">
              {training.map((item) => {
                const cardClass =
                  'rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-cyan-300/25 hover:bg-white/[0.09]';

                const content = (
                  <>
                    <p className="text-sm leading-6 text-slate-200">{item.label}</p>
                    {item.link && (
                      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300">
                        <FaExternalLinkAlt /> View Certificate
                      </span>
                    )}
                  </>
                );

                return item.link ? (
                  <Link
                    key={item.label}
                    to={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${cardClass}`}
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={item.label} className={cardClass}>
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Experience;
