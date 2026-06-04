import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaCode, FaServer, FaBriefcase, FaAward, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Training = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const trainingData = [
    {
      title: 'Frontend Developer',
      organization: 'New Horizon',
      period: 'Jul 2023 – Oct 2023',
      description: 'Comprehensive frontend development training covering modern web technologies, responsive design, and user experience principles.',
      icon: FaCode,
      color: 'from-blue-500 to-blue-600',
      status: 'completed',
      link: 'https://drive.google.com/file/d/1C2Zx8JTpfTz60NCJtUuKicQMCP46Hkck/view'
    },
    {
      title: 'Backend Developer',
      organization: 'New Horizon',
      period: 'Jul 2024 – Jan 2025',
      description: 'Advanced backend development training focusing on server-side technologies, databases, and API development.',
      icon: FaServer,
      color: 'from-green-500 to-green-600',
      status: 'completed',
      link: 'https://drive.google.com/file/d/1cKi7lV1jA3o5raF-uNSNMkb6n16vcEAB/view'
    },
    {
      title: 'Business & Sales',
      organization: 'HYNO IT Company',
      period: 'Jul 2024 – Sep 2024',
      description: 'Professional development in business strategies, sales techniques, and client relationship management.',
      icon: FaBriefcase,
      color: 'from-purple-500 to-purple-600',
      status: 'completed',
      link: 'https://drive.google.com/file/d/1xd0LJUD6iwTZGnYLdupa9Y8wStj_tQV1/view'
    },
    {
      title: 'Full Stack PHP',
      organization: 'ITIDA & NTI',
      period: 'Jul 2025',
      description: 'Intensive full-stack PHP development program covering modern PHP frameworks, database design, and deployment strategies.',
      icon: FaAward,
      color: 'from-orange-500 to-orange-600',
      status: 'completed',
      score: '92.5%' ,
      link: 'https://drive.google.com/file/d/1KYsIkTVtKvhGugzJJnxcayLWjauuG7zB/view'
    }
  ];

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="training" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4 font-poppins">
            Training & <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-inter">
            My continuous learning journey through professional training programs and certifications to stay updated with the latest technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-600 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {trainingData.map((training, index) => (
                <motion.a
                href={training.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-inter font-medium"
              >
                {/* <FaExternalLinkAlt size={16} />
                <span>Demo</span> */}
              <motion.div
                key={training.title}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-2 z-10" />

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white dark:bg-bg-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${training.color} text-white`}>
                          <training.icon size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-text-light dark:text-text-dark font-poppins">
                            {training.title}
                          </h3>
                          <p className="text-primary font-medium font-inter">
                            {training.organization}
                          </p>
                        </div>
                      </div>
                      
                      {/* Score Badge */}
                      {training.score && (
                        <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                          {training.score}
                        </div>
                      )}
                    </div>

                    {/* Period */}
                    <div className="flex items-center space-x-2 mb-4 text-gray-600 dark:text-gray-400">
                      <FaCalendarAlt size={14} />
                      <span className="text-sm font-inter">{training.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-inter mb-4">
                      {training.description}
                    </p>

                    {/* Status */}
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium font-inter">
                        {training.status === 'completed' ? 'Completed' : training.status}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              </motion.a>

            ))}
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-purple-600 rounded-xl p-8 text-white">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <FaGraduationCap size={32} />
              <h3 className="text-2xl font-bold font-poppins">
                Continuous Learning
              </h3>
            </div>
            <p className="text-lg opacity-90 font-inter max-w-3xl mx-auto">
              I believe in the power of continuous learning and professional development. 
              These training programs have equipped me with the latest skills and knowledge 
              to deliver exceptional results in software development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;

