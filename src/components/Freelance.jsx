import { motion } from 'framer-motion';
import { FaArrowRight, FaHandshake } from 'react-icons/fa';
import { freelancePlatforms } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';

const Freelance = () => {
  const { ref, isInView } = useReveal();

  return (
    <section id="freelance" className="portfolio-page py-20 sm:py-24">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Freelance"
          title="Work With Me on"
          accent="Freelance Platforms"
          description="Hire me through trusted platforms for responsive websites, dashboards, WordPress builds, full-stack React/Laravel apps, and production fixes."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-6 md:grid-cols-3"
        >
          {freelancePlatforms.map((platform) => (
            <motion.article
              key={platform.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
              }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="group rounded-2xl border border-cyan-300/15 bg-white/[0.06] p-6 shadow-xl shadow-black/10 backdrop-blur-xl transition-shadow hover:shadow-2xl hover:shadow-cyan-950/25"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-teal-400 text-[#071923] shadow-lg shadow-cyan-950/20">
                  <FaHandshake />
                </div>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
                  Trusted profile
                </span>
              </div>

              <h3 className="font-poppins text-2xl font-bold text-white">{platform.name}</h3>
              <p className="mt-4 min-h-[96px] leading-7 text-slate-300">{platform.description}</p>

              <motion.a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-200 px-5 py-4 text-sm font-bold text-[#071923] transition group-hover:bg-white"
              >
                View Profile <FaArrowRight />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Freelance;
