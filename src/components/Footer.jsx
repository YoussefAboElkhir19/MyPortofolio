import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  // function ========= Back To Top ================
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/Youssefaboelkhir19',
      label: 'GitHub',
      color: 'hover:text-gray-800 dark:hover:text-white'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/youssef-aboelkhir-440b5025a/',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:essamy688@gmail.com',
      label: 'Email',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <footer className="bg-bg-dark text-text-dark py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
              Youssef Essam
            </h3>
            <p className="text-gray-400 leading-relaxed font-inter mb-4">
              A passionate Software Developer building innovative web and mobile applications
              with modern technologies.
            </p>
            <p className="text-sm text-gray-500 font-inter">
              Based in Alexandria, Egypt
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white mb-4 font-poppins">
                Quick Links
              </h4>
              {['Home', 'About', 'Skills', 'Projects', 'Training', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 font-inter"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-white mb-4 font-poppins">
              Contact Info
            </h4>
            <div className="space-y-2 text-gray-400 font-inter">
              <p>essamy688@gmail.com</p>
              <p>+20 143 752 219</p>
              <p>Alexandria, Egypt</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-gray-400 font-inter"
          >
            <span>© 2025 Youssef Essam</span>
            <span>—</span>
            <span>All Rights Reserved</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-400 ${social.color} transition-all duration-300`}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 font-inter"
          >
            <span>Back to Top</span>
            <FaArrowUp />
          </motion.button>
        </div>

        {/* Made with Love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-gray-700"
        >
          <p className="text-gray-500 font-inter flex items-center justify-center space-x-2">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            <span>by Youssef Essam</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

