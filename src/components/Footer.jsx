import { motion } from 'framer-motion';
import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { profile } from '../data/portfolio';

const Footer = () => {
  const navigate = useNavigate();
  const year = new Date().getFullYear();
  const links = [
    { label: 'GitHub', href: profile.github, icon: FaGithub },
    { label: 'LinkedIn', href: profile.linkedIn, icon: FaLinkedin },
    { label: 'Email', href: `mailto:${profile.email}`, icon: FaEnvelope },
  ];

  return (
    <footer className="bg-slate-950 py-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-poppins text-2xl font-bold">{profile.name}</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Frontend-focused full stack developer building React, Laravel, WordPress, and mobile-friendly products.
            </p>
            <p className="mt-3 text-sm text-slate-500">Copyright {year} {profile.name}. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-3">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
                aria-label={link.label}
              >
                <link.icon />
              </motion.a>
            ))}
            <motion.button
              onClick={() => {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="grid h-11 w-11 place-items-center rounded-full bg-white text-slate-950 transition hover:bg-cyan-100"
              aria-label="Back to top"
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
