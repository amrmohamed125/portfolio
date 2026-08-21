import React from 'react';

export default function Footer() {
  return (
    <footer 
      className="py-4 text-center" 
      style={{ 
        backgroundColor: '#0B0F19', 
        borderTop: '1px solid #1e293b' 
      }}
    >
      <div className="container">
        <p 
          className="mb-0" 
          style={{ 
            color: '#64748b', 
            fontSize: '0.875rem', 
            letterSpacing: '0.05em', 
            fontWeight: '400' 
          }}
        >
          &copy; {new Date().getFullYear()} Amr Mohamed. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}