import { motion } from 'framer-motion';
import { FaCheckCircle, FaGraduationCap, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
import { education, profile, strengths } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import SectionHeader from './SectionHeader';

const About = () => {
  const { ref, isInView } = useReveal();

  return (
    <section id="about" className="portfolio-page py-20 sm:py-24">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About"
          title="Product-minded code with"
          accent="business context"
          description="I focus on interfaces that feel clear, fast, and useful, then connect them to reliable backend workflows."
        />

        <div ref={ref} className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-2xl border border-cyan-300/15 bg-white/[0.06] p-6 shadow-2xl shadow-black/15 backdrop-blur-xl sm:p-8"
          >
            <p className="text-lg leading-9 text-slate-200">{profile.summary}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {strengths.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="flex gap-3 rounded-2xl border border-cyan-300/15 bg-[#214d65]/35 p-4 shadow-sm backdrop-blur"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-cyan-300" />
                  <p className="text-sm font-semibold leading-6 text-slate-100">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
            className="grid gap-4"
          >
            <div className="rounded-2xl border border-cyan-300/15 bg-white/[0.06] p-6 shadow-xl shadow-black/10 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="font-poppins text-xl font-bold text-white">{education.degree}</h3>
                  <p className="mt-2 text-slate-300">{education.school}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-400">
                    {education.duration} - GPA {education.gpa}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-cyan-300/15 bg-white/[0.06] p-6 shadow-xl shadow-black/10 backdrop-blur-xl">
                <FaMapMarkerAlt className="text-2xl text-cyan-300" />
                <p className="mt-4 text-sm font-semibold uppercase text-slate-400">Location</p>
                <p className="mt-1 text-lg font-bold text-white">{profile.location}</p>
              </div>
              <div className="rounded-2xl border border-cyan-300/15 bg-white/[0.06] p-6 shadow-xl shadow-black/10 backdrop-blur-xl">
                <FaShieldAlt className="text-2xl text-teal-300" />
                <p className="mt-4 text-sm font-semibold uppercase text-slate-400">Military Status</p>
                <p className="mt-1 text-lg font-bold text-white">{profile.militaryStatus}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
