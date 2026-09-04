import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const typewriterRef = useRef(null);

  // Smooth scroll
  const scrollToSection = (e, id) => {
    e.preventDefault();
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
  };

  useEffect(() => {
    const words = ["Full-Stack Developer", "React Developer", "Tailwind & Node.js Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    let timerId = null;

    const type = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting && !isPaused) {
        if (typewriterRef.current) {
          typewriterRef.current.textContent = currentWord.substring(0, charIndex + 1);
        }
        charIndex++;

        if (charIndex === currentWord.length) {
          isPaused = true;
          timerId = setTimeout(() => {
            isPaused = false;
            isDeleting = true;
            timerId = setTimeout(type, 60);
          }, 1500);
          return;
        }
      } else if (isDeleting && !isPaused) {
        if (typewriterRef.current) {
          typewriterRef.current.textContent = currentWord.substring(0, charIndex - 1);
        }
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      const speed = isDeleting ? 60 : 120;
      timerId = setTimeout(type, speed);
    };

    type();

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-32 sm:pt-30 pb-10" id="homepage">
      <div className="container px-4">
        <div className="row align-items-center">
          <div className="col-lg-8 text-start" data-aos="fade-right">
            
            <span className="inline-block border-2 border-[#38bdf8] text-[#38bdf8] px-4 py-2 rounded-full mb-4 mb-lg-3 text-xs sm:text-sm font-semibold uppercase tracking-widest shadow-sm">
              Welcome all in my portfolio
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-3 mb-lg-3 leading-relaxed sm:leading-tight text-white">
              Hi! I'm Amr Mohamed, <br className="hidden sm:inline" />
              <span ref={typewriterRef} className="text-[#38bdf8] border-r-2 border-[#38bdf8] pr-1 animate-pulse"></span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#94a3b8] max-w-2xl mb-3 mb-lg-4 leading-relaxed">
              Full-stack developer building clean, responsive web applications and interfaces.
            </p>

            {/* Buttons Group */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Let's Connect */}
              <a 
                href="#connect" 
                onClick={(e) => scrollToSection(e, 'connect')}
                className="btn bg-[#0ea5e9] hover:bg-[#38bdf8] border-0 px-7 sm:px-8 py-3 rounded-full text-white font-semibold shadow-lg shadow-[#0ea5e9]/20 transition-all duration-300 text-decoration-none text-sm sm:text-base hover:-translate-y-0.5"
              >
                Let's Connect
              </a>

              {/* Download CV */}
              <a 
                href="/CV/Amr_Mohamed_FlowCV_Resume_2026-08-10.pdf" 
                download 
                className="d-lg-none btn border-2 border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8] hover:text-slate-900 px-7 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-decoration-none text-sm sm:text-base hover:-translate-y-0.5"
              >
                Download CV
              </a>
            </div>

          </div>

          {/* My Photo */}
          <div className="col-lg-4 text-center mt-5 mt-lg-0 d-none d-lg-block" data-aos="fade-left">
            <div className="relative inline-block">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] opacity-30 blur-lg animate-pulse"></div>
              <img 
                src="/images/My Photo.png" 
                alt="Amr Mohamed" 
                className="relative w-full max-w-sm mx-auto rounded-2xl shadow-2xl" 
                style={{ animation: 'float 4s ease-in-out infinite' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}