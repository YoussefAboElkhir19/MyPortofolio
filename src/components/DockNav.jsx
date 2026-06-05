import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaChartBar,
  FaDesktop,
  FaEnvelope,
  FaHome,
  FaUser,
  FaSuitcase,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const dockItems = [
  { label: 'Home', to: '/', icon: FaHome },
  { label: 'About', to: '/about', icon: FaUser },
  { label: 'Skills', to: '/skills', icon: FaChartBar },
  { label: 'Experience', to: '/experience', icon: FaSuitcase },
  { label: 'Projects', to: '/projects', icon: FaDesktop },
  { label: 'Freelance', to: '/freelance', icon: FaBriefcase },
  { label: 'Contact', to: '/contact', icon: FaEnvelope },
];

const DockNav = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed bottom-6 left-1/2 z-30 -translate-x-1/2 px-4"
    >
      <div className="flex max-w-[min(100vw-2rem,42rem)]  items-center justify-center gap-2 rounded-2xl border border-cyan-300/30 bg-[#214d65]/80 p-2 shadow-xl shadow-black/25 backdrop-blur-xl sm:gap-3 sm:p-3">
        {dockItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'}>
            {({ isActive }) => (
              <motion.span
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`grid h-8 w-8 place-items-center rounded-xl text-xl transition sm:h-12 sm:w-12 ${isActive
                  ? 'bg-cyan-200 text-[#071923] shadow-md shadow-cyan-950/30'
                  : 'text-cyan-100 hover:bg-cyan-200 hover:text-[#071923]'
                  }`}
                aria-label={item.label}
              >
                <item.icon />
              </motion.span>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default DockNav;
