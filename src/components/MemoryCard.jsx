import React from 'react';
import { motion } from 'framer-motion';

const MemoryCard = ({ image, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.5), ease: "easeOut" }}
      style={{
        background: 'white',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      className="memory-card"
    >
      <div style={{
        width: '100%',
        position: 'relative',
        paddingTop: '75%', // 4:3 Aspect Ratio
        overflow: 'hidden',
        background: 'var(--background)'
      }}>
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.8s ease',
          }}
          className="memory-image"
        />
      </div>
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ 
          fontSize: '1.25rem', 
          marginBottom: '10px',
          color: 'var(--text-dark)',
          fontWeight: 700 
        }}>
          {title}
        </h3>
        <p style={{ 
          fontSize: '0.95rem', 
          color: 'var(--text-light)',
          lineHeight: 1.6,
          margin: 0
        }}>
          {description}
        </p>
      </div>
      <style>{`
        .memory-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }
        .memory-card:hover .memory-image {
          transform: scale(1.05);
        }
      `}</style>
    </motion.div>
  );
};

export default MemoryCard;
