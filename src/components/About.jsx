import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaMapMarkerAlt, FaGraduationCap, FaUserShield, FaCode, FaHeart } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const infoItems = [
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      content: 'Alexandria, Egypt',
      color: 'text-red-500'
    },
    {
      icon: FaGraduationCap,
      title: 'Education',
      content: 'Alexandria University of Science',
      subtitle: 'B.Sc in Software Industry & Multimedia, GPA 3.4/4.0',
      color: 'text-blue-500'
    },
    {
      icon: FaUserShield,
      title: 'Military Status',
      content: 'Exempted',
      color: 'text-green-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4 font-poppins"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-primary mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <FaCode className="text-6xl text-primary" />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-primary/20"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark font-poppins">
                Passionate Software Developer
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter">
                I'm a dedicated software developer with a passion for creating innovative web and mobile applications.
                My journey in technology began during my studies at Alexandria University, where I developed a strong
                foundation in software development and multimedia technologies.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-inter">
                I love working with modern technologies like <span className="text-primary font-semibold">React</span>,
                <span className="text-primary font-semibold"> Laravel</span>, and <span className="text-primary font-semibold">Flutter</span>
                to build scalable and user-friendly applications. My goal is to contribute to meaningful projects that
                make a positive impact on people's lives.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ x: 30, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className={`p-3 rounded-lg bg-white dark:bg-gray-900 ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-light dark:text-text-dark font-inter">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-inter">
                      {item.content}
                    </p>
                    {item.subtitle && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-inter">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Passion Statement */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
              className="flex items-center space-x-3 p-6 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl border border-primary/20"
            >
              <FaHeart className="text-red-500 text-2xl" />
              <p className="text-text-light dark:text-text-dark font-inter italic">
                "I believe in the power of technology to solve real-world problems and create meaningful experiences."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
