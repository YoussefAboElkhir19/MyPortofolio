import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#082235] via-[#071923] to-[#06131c]"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: 0.2,
          }}
          className="mb-8"
        >
          <span className="mx-auto grid h-24 w-24 place-items-center rounded-3xl border border-cyan-300/35 bg-cyan-300/10 text-5xl font-bold text-cyan-100 shadow-2xl shadow-cyan-950/40 backdrop-blur md:h-28 md:w-28 md:text-6xl">
            YE
          </span>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            delay: 0.8,
          }}
        >
          <h2 className="font-poppins text-xl font-semibold text-cyan-100 md:text-2xl">
            Youssef Essam
          </h2>
          <p className="mt-2 font-inter text-sm text-cyan-200/70 md:text-base">
            Software Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            delay: 1.5,
          }}
          className="mx-auto mt-8 h-1 max-w-xs rounded-full bg-cyan-300/20"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              delay: 1.5,
            }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-cyan-500"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
