import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaCertificate } from 'react-icons/fa';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      title: 'Techne Summit 2024',
      description: 'Attended the premier technology summit featuring the latest innovations in software development, AI, and emerging technologies.',
      date: '2024',
      location: 'Cairo, Egypt',
      type: 'Conference',
      badge: 'Attendee',
      icon: FaCertificate,
      color: 'from-blue-500 to-purple-600'
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
    <section id="events" className="py-20 bg-white dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-4 font-poppins">
            Events & <span className="text-primary">Conferences</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-inter">
            Professional events and conferences I've attended to stay updated with the latest industry trends and network with fellow developers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Event Header */}
              <div className={`relative h-32 bg-gradient-to-r ${event.color} p-6 text-white`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      <event.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-poppins">
                        {event.type}
                      </h3>
                      <p className="text-sm opacity-90 font-inter">
                        {event.date}
                      </p>
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold font-inter">
                      {event.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h4 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3 font-poppins group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-inter">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                    <FaCalendarAlt size={16} />
                    <span className="text-sm font-inter">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                    <FaMapMarkerAlt size={16} />
                    <span className="text-sm font-inter">{event.location}</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h5 className="text-sm font-semibold text-text-light dark:text-text-dark mb-2 font-inter">
                    Key Takeaways:
                  </h5>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 font-inter">
                    <li>• Latest technology trends</li>
                    <li>• Networking opportunities</li>
                    <li>• Industry best practices</li>
                    <li>• Future technology insights</li>
                  </ul>
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
            <div className="flex items-center justify-center space-x-3 mb-4">
              <FaUsers size={32} className="text-primary" />
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark font-poppins">
                Always Learning & Networking
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 font-inter max-w-3xl mx-auto">
              I actively participate in tech conferences and events to stay connected with the developer community 
              and learn about the latest innovations in software development.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400 font-inter">
              <span>• Industry Networking</span>
              <span>• Latest Technologies</span>
              <span>• Best Practices</span>
              <span>• Community Engagement</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;

