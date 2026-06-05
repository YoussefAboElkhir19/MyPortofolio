import { motion } from 'framer-motion';

const SectionHeader = ({ eyebrow, title, accent, description, align = 'center' }) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-120px' }}
      className={isCenter ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-10 max-w-3xl'}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase text-cyan-700 dark:text-cyan-300">
          {eyebrow}
        </p>
      )}
      <h2 className="font-poppins text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
        {title}{' '}
        {accent && (
          <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-400 bg-clip-text text-transparent">
            {accent}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
