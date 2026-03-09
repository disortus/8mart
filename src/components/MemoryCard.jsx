import React from 'react';
import { motion } from 'framer-motion';

const MemoryCard = ({ image, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        background: 'white',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{
        width: '100%',
        aspectRatio: '4/3',
        overflow: 'hidden'
      }}>
        <img 
          src={image} 
          alt={title} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{ 
          fontSize: '1.25rem', 
          marginBottom: '8px',
          color: 'var(--primary)',
          fontWeight: 700 
        }}>
          {title}
        </h3>
        <p style={{ 
          fontSize: '0.95rem', 
          color: 'var(--text-dark)',
          lineHeight: 1.5 
        }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default MemoryCard;
