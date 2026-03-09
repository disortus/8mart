import React from 'react';
import { motion } from 'framer-motion';
import { Map, Sparkles, Navigation } from 'lucide-react';

const TaskCard = ({ task }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'white',
        borderRadius: 'var(--radius)',
        padding: '30px',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--primary-light)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '150px',
        height: '150px',
        background: 'var(--primary-light)',
        borderRadius: '50%',
        opacity: 0.2,
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div style={{ 
          display: 'inline-block', 
          padding: '6px 16px', 
          background: 'var(--secondary)', 
          color: 'var(--accent)', 
          borderRadius: '20px',
          fontWeight: 700,
          fontSize: '0.9rem',
          marginBottom: '20px',
          border: '1px solid var(--accent-light)'
        }}>
          {task.teamName} — Шаг {task.stepIndex} из {task.totalSteps}
        </div>

        <h2 style={{ 
          fontSize: '1.8rem', 
          color: 'var(--primary)', 
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}>
          <Sparkles size={24} />
          {task.title}
        </h2>

        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: 1.6, 
          color: 'var(--text-dark)',
          marginBottom: '30px',
          background: 'var(--background)',
          padding: '20px',
          borderRadius: '12px',
          borderLeft: '4px solid var(--primary)'
        }}>
          {task.description}
        </p>

        <div style={{
          background: 'linear-gradient(to right, #fef2f2, #fff1f2)',
          padding: '15px',
          borderRadius: '12px',
          textAlign: 'left',
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start'
        }}>
          <Map size={24} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong style={{ display: 'block', color: 'var(--primary)', marginBottom: '4px' }}>
              Куда дальше?
            </strong>
            <span style={{ color: 'var(--text-dark)', fontSize: '0.95rem' }}>
              {task.nextHint}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TaskCard;
