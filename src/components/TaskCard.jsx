import React from 'react';
import { motion } from 'framer-motion';
import { Map, Sparkles, Navigation } from 'lucide-react';

const TaskCard = ({ task }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        background: 'white',
        borderRadius: 'var(--radius-lg)',
        padding: '32px',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid rgba(230, 168, 215, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative gradient orb */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 70%)',
        borderRadius: '50%',
        opacity: 0.6,
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Step Badge */}
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center',
          gap: '8px',
          padding: '8px 20px', 
          background: 'linear-gradient(to right, #fdf4f8, #fcfcfc)', 
          color: 'var(--primary-dark)', 
          borderRadius: '30px',
          fontWeight: 600,
          fontSize: '0.95rem',
          marginBottom: '24px',
          border: '1px solid var(--primary-light)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <span>{task.teamName}</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>Шаг {task.stepIndex} из {task.totalSteps}</span>
        </div>

        {/* Title */}
        <h2 style={{ 
          fontSize: '2rem', 
          color: 'var(--primary-dark)', 
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          lineHeight: '1.2'
        }}>
          {task.title}
          <Sparkles size={28} color="var(--accent)" style={{ flexShrink: 0 }} />
        </h2>

        {/* Description */}
        <div style={{ 
          fontSize: '1.15rem', 
          lineHeight: 1.6, 
          color: 'var(--text-dark)',
          marginBottom: '32px',
          background: 'var(--background)',
          padding: '24px',
          borderRadius: 'var(--radius)',
          boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)'
        }}>
          {task.description}
        </div>

        {/* Next Hint Block */}
        <div style={{
          width: '100%',
          background: 'linear-gradient(to bottom right, var(--primary-light), #fff)',
          padding: '20px',
          borderRadius: 'var(--radius)',
          textAlign: 'left',
          display: 'flex',
          gap: '16px',
          alignItems: 'flex-start',
          border: '1px solid rgba(230, 168, 215, 0.4)',
          boxShadow: '0 4px 15px rgba(230, 168, 215, 0.1)'
        }}>
          <div style={{
            background: 'white',
            padding: '10px',
            borderRadius: '50%',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Navigation size={22} color="var(--primary-dark)" />
          </div>
          <div style={{ flex: 1 }}>
            <strong style={{ display: 'block', color: 'var(--primary-dark)', marginBottom: '6px', fontSize: '1rem' }}>
              Куда двигаться дальше?
            </strong>
            <span style={{ color: 'var(--text-dark)', fontSize: '0.95rem', lineHeight: 1.5 }}>
              {task.nextHint}
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default TaskCard;
