import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '40px 20px', 
      textAlign: 'center',
      marginTop: 'auto',
      background: 'white',
      borderTop: '1px solid var(--primary-light)'
    }}>
      <div className="container">
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '0.9rem' }}>
          Сделано с <Heart size={16} color="var(--primary)" fill="var(--primary-light)" /> для наших девушек
        </p>
        <p style={{ marginTop: '10px', fontSize: '0.8rem', color: '#ccc' }}>
          8 Марта · Мини-квест
        </p>
      </div>
    </footer>
  );
};

export default Footer;
