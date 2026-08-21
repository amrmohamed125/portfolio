import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('homepage');

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 30);

      const sections = ['homepage', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const time = Math.min(progress / duration, 1);
        const ease = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: 'homepage', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <nav 
      className={`fixed-top w-100 transition-all duration-300 ${
        navScrolled 
          ? 'bg-[#141B2F]/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-4'
      }`} 
      style={{ zIndex: 9999 }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        
        {/* Logo */}
        <a 
        className="text-xl font-extrabold tracking-widest text-[#38bdf8] no-underline uppercase hover:opacity-80 transition-opacity duration-300" 
        href="#homepage" 
        onClick={(e) => scrollToSection(e, 'homepage')}
        >
        PORTFOLIO<span className="text-white">.</span>
        </a>

        {/* Nav Links */}
        <div className="d-none d-lg-flex align-items-center gap-5">
          <ul className="d-flex align-items-center gap-4 m-0 p-0 list-unstyled">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} className="relative py-1">
                  <a 
                    className={`block font-semibold text-sm tracking-wide text-decoration-none transition-colors duration-300 ${
                      isActive ? 'text-[#38bdf8]' : 'text-slate-300 hover:text-white'
                    }`} 
                    href={`#${link.id}`} 
                    onClick={(e) => scrollToSection(e, link.id)}
                  >
                    {link.label}
                  </a>
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] bg-[#38bdf8] rounded-full transition-all duration-300 ${
                      isActive ? 'w-full opacity-100 shadow-[0_0_8px_#38bdf8]' : 'w-0 opacity-0'
                    }`}
                  ></span>
                </li>
              );
            })}
          </ul>

            {/* My CV */}
          <a 
            href="/CV/Amr_Mohamed_FlowCV_Resume_2026-08-10.pdf" 
            download 
            className="btn bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-bold px-5 py-2 rounded-lg transition-all duration-300 border-0 shadow-md text-xs tracking-wider uppercase text-decoration-none hover:-translate-y-0.5"
          >
            Download CV
          </a>
        </div>

        {/* Mobile*/}
        <button 
          className="d-lg-none border-0 bg-[#1c2541]/80 hover:bg-[#1c2541] p-2.5 rounded-xl focus:outline-none transition-all duration-300 shadow-md" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6 fill-current text-[#38bdf8] transition-transform duration-300" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }} viewBox="0 0 24 24" width="24" height="24">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.7a1 1 0 00-1.41 1.42L10.59 12l-4.88 4.88a1 1 0 001.41 1.42L12 13.41l4.88 4.88a1 1 0 001.42-1.42L13.41 12l4.88-4.88a1 1 0 000-1.41z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            )}
          </svg>
        </button>
      </div>

      <div 
        className={`d-lg-none absolute top-full left-0 w-100 overflow-hidden transition-all duration-300 ease-in-out bg-[#141B2F] shadow-2xl border-top border-secondary/20 ${
          isOpen ? 'max-h-[350px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="container d-flex flex-column align-items-center gap-2 text-center px-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.id}
                className={`w-100 py-2 rounded-lg font-semibold text-sm text-decoration-none transition-all duration-300 ${
                  isActive ? 'bg-[#38bdf8]/10 text-[#38bdf8]' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)}
              >
                {link.label}
              </a>
            );
          })}
          <a 
            href="/CV/Amr_Mohamed_FlowCV_Resume_2026-08-10.pdf" 
            download 
            className="btn bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 border-0 shadow-md text-sm text-decoration-none w-100 mt-2"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}