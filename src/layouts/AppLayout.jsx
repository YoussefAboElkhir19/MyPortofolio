import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import DockNav from '../components/DockNav';
import Footer from '../components/Footer';
import SocialSidebar from '../components/SocialSidebar';
import SplashScreen from '../components/SplashScreen';
import ThemeToggle from '../components/ThemeToggle';

const AppLayout = () => {
  const [showSplash, setShowSplash] = useState(
    () => !sessionStorage.getItem('portfolio-splash-seen'),
  );

  useEffect(() => {
    if (!showSplash) return undefined;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem('portfolio-splash-seen', '1');
      setShowSplash(false);
    }, 2800);

    return () => window.clearTimeout(timer);
  }, [showSplash]);

  return (
    <>
      <Helmet>
        <title>Youssef Essam | Frontend-Focused Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Youssef Essam, a frontend-focused full stack developer building React, Laravel, WordPress, and Flutter projects from Alexandria, Egypt."
        />
        <meta name="theme-color" content="#071923" />
      </Helmet>

      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen key="splash" />}
      </AnimatePresence>

      <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-[#06131c] dark:text-white">
        <ThemeToggle />
        <SocialSidebar />
        <main className="pb-28">
          <Outlet />
        </main>
        {/* <Footer /> */}
        <DockNav />
      </div>
    </>
  );
};

export default AppLayout;
