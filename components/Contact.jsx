import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function Contact() {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = formRef.current.querySelector('[name="from_name"]').value;
    const email = formRef.current.querySelector('[name="from_email"]').value;
    const phone = formRef.current.querySelector('[name="phone"]').value;
    const message = formRef.current.querySelector('[name="message"]').value;

    if (!name || !email || !phone || !message) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please fill in all fields before sending.',
        confirmButtonColor: '#0ea5e9'
      });
      return;
    }

    emailjs.sendForm('service_9e2lg8z', 'template_twa0v3o', formRef.current, 'IRqdzbWNoTd8wZa2O')
      .then((result) => {
        console.log('SUCCESS!', result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for reaching out. I will get back to you soon!',
          confirmButtonColor: '#0ea5e9'
        });
        formRef.current.reset();
      }, (error) => {
        console.error('FAILED...', error);
        console.error('Error details:', error.text || error.message);
        
        Swal.fire({
          icon: 'error',
          title: 'Failed to Send',
          text: `Something went wrong, Please try again later'}`,
          confirmButtonColor: '#0ea5e9'
        });
      });
  };

  return (
    <section className="py-5" id="connect" style={{ backgroundColor: '#0B0F19' }}>
      <div className="container py-4">
        <div className="row align-items-center g-5">
          
          <div className="col-lg-5" data-aos="fade-right">
            <span 
              className="d-inline-block px-3 py-1 rounded-pill fw-medium mb-3 text-uppercase"
              style={{ backgroundColor: '#1c2541', color: '#38bdf8', fontSize: '0.8rem', border: '1px solid #1e293b' }}
            >
              Get In Touch
            </span>
            <h2 className="display-6 fw-bold mb-3 text-white">
              Let's talk about <br />
              <span style={{ color: '#38bdf8' }}>your next project</span>
            </h2>
            <p className="mb-4" style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6' }}>
              Feel free to reach out to me for job opportunities, collaborations, or any inquiries. I am always open to discussing new ideas.
            </p>

            {/* Social Icons */}
            <div className="d-flex align-items-center gap-3">
              <a 
                href="https://github.com/amrmohamed125" 
                target="_blank" 
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none shadow"
                style={{ width: '48px', height: '48px', backgroundColor: '#141B2F', border: '1px solid #1e293b', transition: 'all 0.3s ease' }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#0ea5e9'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#141B2F'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              <a 
                href="https://www.linkedin.com/in/amrmohamed125" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none shadow"
                style={{ width: '48px', height: '48px', backgroundColor: '#141B2F', border: '1px solid #1e293b', transition: 'all 0.3s ease' }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#0ea5e9'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#141B2F'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a 
                href="https://www.instagram.com/amr_m0hamed1?igsh=NXM5MTE0bnhjYWhl" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none shadow"
                style={{ width: '48px', height: '48px', backgroundColor: '#141B2F', border: '1px solid #1e293b', transition: 'all 0.3s ease' }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#0ea5e9'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#141B2F'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Form*/}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="p-4 p-md-5 rounded-4 shadow-lg" style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}>
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="text-white mb-2 small fw-bold">Name</label>
                    <input type="text" name="from_name" className="form-control border-0 py-3 text-white" placeholder="Name" style={{ backgroundColor: '#1e293b' }} />
                  </div>
                  <div className="col-md-6">
                    <label className="text-white mb-2 small fw-bold">Email</label>
                    <input type="email" name="from_email" className="form-control border-0 py-3 text-white" placeholder="Email" style={{ backgroundColor: '#1e293b' }} />
                  </div>
                  <div className="col-12">
                    <label className="text-white mb-2 small fw-bold">Phone Number</label>
                    <input type="tel" name="phone" className="form-control border-0 py-3 text-white" placeholder="+20 100 000 0000" style={{ backgroundColor: '#1e293b' }} />
                  </div>
                  <div className="col-12">
                    <label className="text-white mb-2 small fw-bold">Message</label>
                    <textarea name="message" rows="4" className="form-control border-0 py-3 text-white" placeholder="Your message here..." style={{ backgroundColor: '#1e293b', resize: 'none' }}></textarea>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="btn mt-4 w-100 py-3 fw-bold text-white border-0"
                  style={{ backgroundColor: '#0ea5e9', transition: 'background 0.3s ease' }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#0284c7'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#0ea5e9'}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}