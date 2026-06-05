import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaWhatsapp,
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import profilePhoto from '../assets/mee.png';
import { profile } from '../data/portfolio';

const socialLinks = [
  { label: 'LinkedIn', href: profile.linkedIn, icon: FaLinkedin, tone: 'text-blue-400' },
  { label: 'GitHub', href: profile.github, icon: FaGithub, tone: 'text-slate-300' },
  { label: 'WhatsApp', href: profile.whatsapp, icon: FaWhatsapp, tone: 'text-emerald-400' },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#071923] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#082235] via-[#071923] to-[#06131c]" />
      <div className="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -right-16 bottom-16 -z-10 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 rounded-full border border-cyan-300/20 bg-cyan-300/8 px-4 py-2 text-sm font-semibold text-cyan-200 shadow-lg shadow-cyan-950/20 backdrop-blur"
          >
            Available for freelance projects
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.08 }}
            className="font-poppins text-4xl font-bold leading-tight text-cyan-200 sm:text-6xl lg:text-7xl"
          >
            Hi All, I'm {profile.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-6 font-poppins text-2xl font-semibold text-cyan-500/80 sm:text-4xl"
          >
            {profile.role}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-7 max-w-3xl text-base font-semibold leading-8 text-teal-100/65 sm:text-lg"
          >
            React(Next.js), Laravel , WordPress.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.38 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <motion.button
              onClick={() => navigate('/projects')}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-cyan-300/30 bg-cyan-400/10 px-7 py-4 text-sm font-bold text-cyan-100 shadow-lg shadow-cyan-950/20 backdrop-blur transition hover:bg-cyan-300 hover:text-[#071923]"
            >
              View Projects <FaArrowRight />
            </motion.button>

            <Link
              to="https://drive.google.com/file/d/1aRyGq52QULs0VGuyZBLv976gmBizB2tK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-200 px-7 py-4 text-sm font-bold text-[#071923] shadow-lg shadow-cyan-950/20 transition hover:bg-white sm:w-auto"
              >
                My CV <FaPaperPlane />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-300/35 via-teal-400/15 to-blue-500/20 blur-2xl" />
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full border border-cyan-300/20 bg-cyan-300/10 backdrop-blur-xl" />
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-2xl border border-teal-300/15 bg-[#214d65]/40 backdrop-blur-xl" />

            <div className="relative rounded-[2rem] border border-cyan-300/25 bg-white/[0.04] p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.4rem] border border-white/10">
                <img
                  src={profilePhoto}
                  alt={profile.name}
                  className="aspect-[4/5] w-full max-w-[320px] object-cover object-top sm:max-w-[360px] lg:max-w-[400px]"
                />
              </div>

              <div className="absolute inset-3 rounded-[1.4rem] bg-gradient-to-t from-[#071923]/55 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#071923]/55 px-4 py-3 text-left backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{profile.location}</p>
                <p className="mt-1 font-poppins text-lg font-bold text-white">{profile.role}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.48 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {socialLinks.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/20 bg-white/5 text-xl backdrop-blur transition hover:border-cyan-300/40 hover:bg-cyan-300/15 ${item.tone}`}
              aria-label={item.label}
            >
              <item.icon />
            </motion.a>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
