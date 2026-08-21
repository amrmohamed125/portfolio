import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function App() {
  useEffect(() => {
    emailjs.init("IRqdzbWNoTd8wZa2O");
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="bg-[#141B2F] text-[#e5e7eb] font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}