import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, icon: Icon }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      style={{
        textAlign: 'center',
        margin: '3rem 0 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      {Icon && (
        <div style={{
          background: 'var(--primary-light)',
          color: 'var(--primary)',
          padding: '12px',
          borderRadius: '50%',
          display: 'inline-flex',
          marginBottom: '5px'
        }}>
          <Icon size={28} />
        </div>
      )}
      <h2 style={{ 
        fontSize: '2rem', 
        color: 'var(--text-dark)',
        margin: 0
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ 
          color: 'var(--text-light)', 
          fontSize: '1.1rem',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          {subtitle}
        </p>
      )}
      <div style={{
        width: '60px',
        height: '4px',
        background: 'linear-gradient(90deg, var(--primary), var(--accent-light))',
        borderRadius: '2px',
        marginTop: '10px'
      }} />
    </motion.div>
  );
};

export default SectionTitle;
