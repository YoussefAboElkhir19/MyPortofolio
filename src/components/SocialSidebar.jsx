import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { profile } from '../data/portfolio';

const socialLinks = [
  { label: 'LinkedIn', href: profile.linkedIn, icon: FaLinkedin, tone: 'text-blue-400' },
  { label: 'GitHub', href: profile.github, icon: FaGithub, tone: 'text-slate-300' },
  { label: 'WhatsApp', href: profile.whatsapp, icon: FaWhatsapp, tone: 'text-emerald-400' },
];

const SocialSidebar = () => {
  return (
    <div className="fixed left-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 md:flex">
      {socialLinks.map((item) => (
        <motion.a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5, scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={`grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/10 text-xl shadow-lg shadow-black/20 backdrop-blur-md ${item.tone}`}
          aria-label={item.label}
        >
          <item.icon />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialSidebar;
