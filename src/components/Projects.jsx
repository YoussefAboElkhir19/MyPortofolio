import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaLaravel, FaHtml5, FaJs, FaVuejs } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiFlutter } from 'react-icons/si';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Construction Project Management App',
      description: 'A comprehensive project management application for construction companies with real-time tracking, team collaboration, and resource management features.',
      tech: ['React', 'Laravel', 'JWT', 'MySQL'],
      icons: [FaReact, FaLaravel, FaJs, SiMysql],
      date: '2024',
      github: 'https://github.com/YoussefAboElkhir19/construction.git',
      demo: 'https://github.com/YoussefAboElkhir19/construction.git',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Nofa Egypt',
      description: 'A modern e-commerce website for Nofa Egypt with product catalog, shopping cart, payment integration, and admin dashboard.',
      tech: ['React', 'Tailwind', 'JavaScript', 'API'],
      icons: [FaReact, SiTailwindcss, FaJs, FaExternalLinkAlt],
      date: '2024',
      github: 'https://youssefaboelkhir19.github.io/nofa-egypt/',
      demo: 'https://youssefaboelkhir19.github.io/nofa-egypt/',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Student Management System',
      description: 'A complete student information system with enrollment, grades, attendance tracking, and report generation capabilities.',
      tech: ['Laravel', 'MySQL', 'Blade', 'Bootstrap'],
      icons: [FaLaravel, SiMysql, FaHtml5, FaReact],
      date: '2023',
      
      github: 'https://github.com/YoussefAboElkhir19/student-management-system.git',
      demo: 'https://github.com/YoussefAboElkhir19/student-management-system.git',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'InspireBox',
      description: 'A Flutter-based mobile application for inspiration and motivation with daily quotes, goal tracking, and habit formation features.',
      tech: ['Flutter', 'Dart', 'MVVM', 'Provider'],
      icons: [SiFlutter, FaJs, FaReact, FaReact],
      date: '2024',
      github: 'https://github.com/YoussefAboElkhir19/flutter-app.git',
      demo: 'https://github.com/YoussefAboElkhir19/flutter-app.git',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Travel App',
      description: 'A responsive Travel application with ',
      tech: ['React', 'Laravel', 'MySQL', 'PHP', 'JavaScript','Tailwind' ,  'Fetch API'],
      icons: [FaReact, FaLaravel, SiMysql, FaJs, FaExternalLinkAlt, SiTailwindcss],
      date: '2025',
      github: 'https://github.com/YoussefAboElkhir19/travel-main0.git',
      demo: 'https://github.com/YoussefAboElkhir19/travel-main0.git',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'To Do List',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and weather alerts using external APIs.',
      tech: ['Vue', 'Tailwind','HTML' , 'JavaScript'],
      icons: [FaVuejs, SiTailwindcss, FaHtml5, FaJs],
      date: '2023',
      github: 'https://github.com/Youssefaboelkhir19',
      demo: '#',
      image: '/api/placeholder/400/300'
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

  return (
    <section id="projects" className="py-20 bg-white dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4 font-poppins">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-inter">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="flex justify-center space-x-4 mb-4">
                      {project.icons.map((Icon, iconIndex) => (
                        <div
                          key={iconIndex}
                          className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                        >
                          <Icon size={20} />
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-medium opacity-90">
                      {project.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3 font-poppins group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-inter leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium font-inter"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 font-inter font-medium"
                  >
                    <FaGithub size={16} />
                    <span>Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-inter font-medium"
                  >
                    <FaExternalLinkAlt size={16} />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4 font-poppins">
              Interested in Working Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 font-inter">
              I'm always excited to take on new challenges and collaborate on interesting projects.
            </p>
            <motion.button
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-inter font-semibold"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
