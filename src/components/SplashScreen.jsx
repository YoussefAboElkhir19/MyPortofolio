import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 1,
            ease: "easeOut",
            delay: 0.2
          }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white font-poppins">
            YE
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            delay: 0.8
          }}
        >
          <h2 className="text-xl md:text-2xl text-white/90 font-inter">
            Youssef Essam
          </h2>
          <p className="text-sm md:text-base text-white/70 font-inter mt-2">
            Software Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="mt-8 h-1 bg-white/30 rounded-full"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="h-full bg-white rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;

