import React from 'react';

const skillsList = [
  { name: 'HTML5', percent: '95%' },
  { name: 'CSS3', percent: '90%' },
  { name: 'JavaScript', percent: '85%' },
  { name: 'Bootstrap', percent: '90%' },
  { name: 'Tailwind CSS', percent: '88%' },
  { name: 'React.js', percent: '82%' },
  { name: 'Node.js', percent: '75%' },
  { name: 'Express.js', percent: '78%' },
  { name: 'MongoDB', percent: '70%' },
  { name: 'Git & GitHub', percent: '85%' }
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white">Skills</h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            Technologies and tools I work with to build modern, responsive web applications.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {skillsList.map((skill, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2-4 text-center" data-aos="zoom-in" data-aos-delay={index * 40}>
              <div className="skill-circle-card">
                <span className="text-[#38bdf8] font-extrabold text-lg mb-1">{skill.percent}</span>
                <h4 className="text-sm font-bold text-white mb-0 px-2">{skill.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}