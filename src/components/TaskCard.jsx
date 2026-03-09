import React from 'react';
import { motion } from 'framer-motion';

import RebusTask from './RebusTask';
import BinaryTask from './BinaryTask';
import CodeTask from './CodeTask';

const TaskCard = ({ task }) => {
  // Select the appropriate sub-component based on task.type
  const renderTaskContent = () => {
    switch(task.type) {
      case 'rebus':
        return <RebusTask task={task} />;
      case 'binary':
        return <BinaryTask task={task} />;
      case 'code':
        return <CodeTask task={task} />;
      default:
        return <p>Неизвестный тип задания.</p>;
    }
  }

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

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
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

        {/* Dynamic task content injected here */}
        {renderTaskContent()}

      </div>
    </motion.div>
  );
};

export default TaskCard;
