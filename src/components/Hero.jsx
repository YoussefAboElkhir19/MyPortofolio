import { motion } from 'framer-motion';
import { FaDownload, FaPaperPlane, FaExternalLinkAlt } from 'react-icons/fa';
import profileImage from '../assets/mee.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const handleViewCV = () => {
    // Open CV in a new tab for preview
    window.open('https://drive.google.com/file/d/1aRyGq52QULs0VGuyZBLv976gmBizB2tK/view?usp=sharing', '_blank');
  };
  

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-bg-dark dark:to-slate-900">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-light dark:text-text-dark font-poppins"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Hi, I'm{' '}
              <span className="text-primary bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Youssef Essam
              </span>{' '}
              👋
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-inter max-w-4xl mx-auto leading-relaxed"
            >
              A passionate{' '}
              <span className="text-primary font-semibold">Software Developer</span>{' '}
              building web & mobile apps with{' '}
              <span className="text-primary font-semibold">React</span>
              <span className="text-primary font-semibold">Laravel</span>
              {/* <span className="text-primary font-semibold">Flutter</span>. */}
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8"
          >
            <motion.button
              onClick={handleViewCV}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-inter font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaExternalLinkAlt className="group-hover:animate-bounce" />
              View CV
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-primary text-primary dark:text-primary rounded-full font-inter font-semibold  hover:text-white transition-all duration-300"
            >
              <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary rounded-full mt-2"
              />
            </motion.div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-inter">
              Scroll to explore
            </p>
          </motion.div>
        </motion.div>
          </div>

          {/* Right Content - 3D Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              whileHover={{ 
                rotateY: 10,
                rotateX: 5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              {/* 3D Container */}
              <div className="relative perspective-1000">
                {/* Profile Image */}
                <motion.div
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    transformStyle: 'preserve-3d',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  }}
                >
                  {/* Profile Image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/20"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                      <img 
                        src={profileImage} 
                        alt="Youssef Essam" 
                        className="w-full h-full object-cover rounded-full" 
                      />
                      {/* Gradient overlay for better 3D effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full" />
                    </motion.div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-20, 20, -20] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full opacity-60"
                  />
                  <motion.div
                    animate={{ y: [20, -20, 20] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-8 left-6 w-4 h-4 bg-purple-500 rounded-full opacity-60"
                  />
                  <motion.div
                    animate={{ y: [-15, 15, -15] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/2 left-4 w-3 h-3 bg-blue-400 rounded-full opacity-60"
                  />
                </motion.div>

                {/* 3D Shadow */}
                <motion.div
                  className="absolute inset-0 bg-black/20 rounded-2xl blur-xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ transform: 'translateZ(-50px)' }}
                />

                {/* Floating Tech Icons */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <span className="text-2xl">⚛️</span>
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute -bottom-4 -left-4 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <span className="text-xl">🚀</span>
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-1/2 -left-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <span className="text-lg">💻</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
