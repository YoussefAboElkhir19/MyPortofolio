import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="fixed right-4 top-4 z-30 grid h-11 w-11 place-items-center rounded-full border border-cyan-300/25 bg-[#071923]/80 text-cyan-100 shadow-lg shadow-black/20 backdrop-blur-xl transition hover:border-cyan-300 hover:bg-cyan-200 hover:text-[#071923]"
      aria-label="Toggle color theme"
    >
      {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
    </motion.button>
  );
};

export default ThemeToggle;
