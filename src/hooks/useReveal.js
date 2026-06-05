import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useReveal = (margin = '-96px') => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });

  return { ref, isInView };
};
