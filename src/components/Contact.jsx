import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaMapMarkerAlt, FaUser, FaComment } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const formRef = useRef();
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'essamy688@gmail.com',
      link: 'mailto:essamy688@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+20 143 752 219',
      link: 'tel:+20143752219',
      color: 'text-green-500'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'YoussefAboElkhir',
      link: 'https://linkedin.com/in/YoussefAboElkhir',
      color: 'text-blue-600'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'Youssefaboelkhir19',
      link: 'https://github.com/Youssefaboelkhir19',
      color: 'text-gray-800 dark:text-white'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Alexandria, Egypt',
      link: '#',
      color: 'text-purple-500'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // For demo purposes, we'll just log the form data
      // In production, you would use EmailJS or your preferred email service
      await emailjs.sendForm(
        'service_ienfclb',
        'template_lhrdqiv',
        formRef.current,
        '8oYtkA12k1yTPweg6'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4 font-poppins">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-inter">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-6 font-poppins">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-inter mb-8">
                Feel free to reach out if you have any questions, want to collaborate on a project,
                or just want to say hello. I'm always excited to meet new people and discuss interesting ideas!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-700 ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-light dark:text-text-dark font-inter">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-inter">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-6 font-poppins">
                  Send Message
                </h3>

                {/* Name Field */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2 font-inter">
                    <FaUser className="inline mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-text-light dark:text-text-dark font-inter transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2 font-inter">
                    <FaEnvelope className="inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-text-light dark:text-text-dark font-inter transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2 font-inter">
                    <FaComment className="inline mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-text-light dark:text-text-dark font-inter transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-inter font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg font-inter"
                  >
                    Thank you! Your message has been sent successfully. I'll get back to you soon!
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg font-inter"
                  >
                    Sorry, there was an error sending your message. Please try again or contact me directly.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
