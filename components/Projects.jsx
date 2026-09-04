import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Grocery Web Application',
    description: 'A full-stack grocery web application featuring product catalog, cart management, and seamless online shopping experience.',
    img: '/images/full-stack.PNG',
    link: 'https://my-grocery-app-six.vercel.app/'
  },
  {
    id: 2,
    title: 'E-Commerce Store',
    description: 'An interactive e-commerce store built with modern frontend technologies, featuring dynamic product grids and smooth navigation.',
    img: '/images/E-commers.PNG',
    link: 'https://amrmohamed125.github.io/E-Commerce/'
  },
  {
    id: 3,
    title: 'Movies App',
    description: 'A responsive web application interface for exploring movies, browsing recommendations, and viewing detailed media info.',
    img: '/images/cinema.PNG',
    link: 'https://amrmohamed125.github.io/project1-recommend/'
  },
  {
    id: 4,
    title: 'Tailwind Web',
    description: 'A modern, fully responsive landing page built with Tailwind CSS, focusing on mobile-first design, high performance, and clean UI.',
    img: '/images/tailwind.PNG',
    link: 'https://amrmohamed125.github.io/tailwind-project/'
  },
  {
    id: 5,
    title: 'EduPlatform',
    description: 'An educational interface built with Bootstrap to organize courses, learning materials, and student sections efficiently.',
    img: '/images/bootstrab.PNG',
    link: 'https://amrmohamed125.github.io/project-5/'
  },
  {
    id: 6,
    title: 'Online Store',
    description: 'A fully responsive e-commerce store layout built using HTML, CSS, and Bootstrap for seamless cross-device display and structured design.',
    img: '/images/html & css.PNG',
    link: 'https://amrmohamed125.github.io/Online-Store/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white">Projects</h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            Some of my recent work and web development projects.
          </p>
        </div>

        <div className="row g-4">
          {projectsData.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={project.id * 50}>
              <div className="project-card h-100 p-4 flex flex-col justify-between group rounded-2xl bg-[#0f172a] border border-[#1e293b] shadow-xl transition-all duration-300 hover:border-[#38bdf8]/50">
                <div>
                  <div className="h-48 rounded-xl mb-4 overflow-hidden relative bg-[#0b0f19] border border-gray-800">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerText = project.title; }}
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#38bdf8] transition-colors">{project.title}</h3>
                  <p className="text-[#94a3b8] text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 text-[#38bdf8] hover:text-[#0ea5e9] font-semibold text-sm transition-colors text-decoration-none"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}