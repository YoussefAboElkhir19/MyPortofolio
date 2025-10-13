
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from './SplashScreen';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Training from './Training';
import Events from './Events';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Youssef Essam | Software Developer Portfolio</title>
        <meta 
          name="description" 
          content="Portfolio of Youssef Essam, a Software Developer skilled in React, Laravel, and Flutter. Based in Alexandria, Egypt." 
        />
        <meta name="keywords" content="Youssef Essam, Software Developer, React, Laravel, Flutter, JavaScript, PHP, Portfolio" />
        <meta name="author" content="Youssef Essam" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Youssef Essam | Software Developer Portfolio" />
        <meta property="og:description" content="Portfolio of Youssef Essam, a Software Developer skilled in React, Laravel, and Flutter." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://youssefessam.dev" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Youssef Essam | Software Developer Portfolio" />
        <meta name="twitter:description" content="Portfolio of Youssef Essam, a Software Developer skilled in React, Laravel, and Flutter." />
        <meta name="twitter:image" content="/og-image.jpg" />
        
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#3B82F6" />
        <link rel="canonical" href="https://youssefessam.dev" />
      </Helmet>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <SplashScreen key="splash" />
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-bg-light dark:bg-bg-dark"
          >
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Training />
            <Events />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;