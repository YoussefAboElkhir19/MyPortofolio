import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaLaravel, 
  FaPhp, 
  FaPython, 
  FaMobile,
  FaGitAlt,
  FaLinux,
  FaDocker,
  FaGithub,
  FaDatabase,
  FaServer,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaRocket,
  
} from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiDart, SiPostman, SiBootstrap, SiFlutter  } from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: FaCode,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'React.js', icon: FaReact, color: 'text-blue-500' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
        { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-600' },
        { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' },
        { name: 'Laravel', icon: FaLaravel, color: 'text-red-500' },
        { name: 'PHP', icon: FaPhp, color: 'text-indigo-600' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-700' },
        { name: 'Python', icon: FaPython, color: 'text-green-600' },
        { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400' },
        { name: 'Dart', icon: SiDart, color: 'text-blue-500' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: FaRocket,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
        { name: 'GitHub', icon: FaGithub, color: 'text-gray-800 dark:text-white' },
        { name: 'Linux', icon: FaLinux, color: 'text-yellow-600' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
        { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
        // { name: 'Cursor',  icon: SiCursor, color: 'text-blue-600' },
        { name: 'Database', icon: FaDatabase, color: 'text-blue-700' },
      ]
    },
    {
      title: 'Concepts & Methodologies',
      icon: FaLightbulb,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'MVC', icon: FaServer, color: 'text-green-600' },
        { name: 'MVVM', icon: FaMobile, color: 'text-blue-600' },
        { name: 'CRUD', icon: FaDatabase, color: 'text-purple-600' },
        { name: 'REST API', icon: FaServer, color: 'text-indigo-600' },
        { name: 'JWT', icon: FaCode, color: 'text-pink-600' },
        { name: 'Agile', icon: FaRocket, color: 'text-orange-600' },
        { name: 'SDLC', icon: FaCode, color: 'text-teal-600' },
      ]
    },
    {
      title: 'Soft Skills',
      icon: FaUsers,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'Leadership', icon: FaUsers, color: 'text-blue-600' },
        { name: 'Teamwork', icon: FaUsers, color: 'text-green-600' },
        { name: 'Problem Solving', icon: FaLightbulb, color: 'text-yellow-600' },
        { name: 'Decision Making', icon: FaRocket, color: 'text-purple-600' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4 font-poppins">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-inter">
            A comprehensive overview of my technical skills, tools, and methodologies that I use to build amazing applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white dark:bg-bg-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                <category.icon size={24} />
              </div>
              
              <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-6 font-poppins">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`p-2 rounded-lg bg-white dark:bg-gray-900 ${skill.color}`}>
                      <skill.icon size={16} />
                    </div>
                    <span className="text-sm font-medium text-text-light dark:text-text-dark group-hover:text-primary transition-colors duration-300 font-inter">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 font-poppins">
              Always Learning & Growing
            </h3>
            <p className="text-lg opacity-90 font-inter">
              I'm passionate about staying up-to-date with the latest technologies and continuously improving my skills 
              to deliver the best solutions for modern challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
