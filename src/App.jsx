import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Freelance from './components/Freelance';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AppLayout from './layouts/AppLayout';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Hero />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="freelance" element={<Freelance />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
