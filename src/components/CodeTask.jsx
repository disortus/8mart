import React, { useState } from 'react';
import { Navigation, Terminal, CheckCircle2, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CodeTask = ({ task }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSelect = (index) => {
    setSelectedOption(index);
    setIsCorrect(index === task.correctOptionIndex);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
      
      <h2 style={{ 
        fontSize: '1.8rem', 
        color: 'var(--primary-dark)', 
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px'
      }}>
        {task.title}
        <Terminal size={24} color="var(--accent)" />
      </h2>

      <p style={{ 
        fontSize: '1.05rem', 
        lineHeight: 1.6, 
        color: 'var(--text-dark)',
        marginBottom: '20px'
      }}>
        {task.description}
      </p>

      {/* Code Snippet */}
      <div style={{
        background: '#1e1e1e',
        color: '#d4d4d4',
        padding: '20px',
        borderRadius: '8px',
        fontFamily: 'monospace',
        fontSize: '1rem',
        textAlign: 'left',
        width: '100%',
        marginBottom: '24px',
        overflowX: 'auto',
        boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)'
      }}>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
          {task.codeSnippet}
        </pre>
      </div>

      {/* Options */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
        {task.options.map((opt, idx) => {
          const isSelected = selectedOption === idx;
          let bgColor = 'var(--secondary)';
          let borderColor = 'var(--primary-light)';
          
          if (isSelected) {
            bgColor = isCorrect ? '#dcfce7' : '#fee2e2';
            borderColor = isCorrect ? '#22c55e' : '#ef4444';
          }

          return (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(idx)}
              style={{
                background: bgColor,
                border: `2px solid ${borderColor}`,
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '1rem',
                color: 'var(--text-dark)',
                cursor: 'pointer',
                transition: 'background 0.3s, border 0.3s',
                textAlign: 'left',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{opt}</span>
              {isSelected && isCorrect && <CheckCircle2 color="#22c55e" size={20} />}
              {isSelected && !isCorrect && <XCircle color="#ef4444" size={20} />}
            </motion.button>
          )
        })}
      </div>

      {/* Feedback & Hint block */}
      <AnimatePresence>
        {isCorrect && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
            style={{ width: '100%', overflow: 'hidden' }}
          >
            <div style={{
              background: 'linear-gradient(to bottom right, #dcfce7, #f0fdf4)',
              padding: '20px',
              borderRadius: 'var(--radius)',
              textAlign: 'left',
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start',
              border: '1px solid #86efac'
            }}>
              <div style={{
                background: 'white',
                padding: '10px',
                borderRadius: '50%',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <Navigation size={22} color="#16a34a" />
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{ display: 'block', color: '#166534', marginBottom: '6px' }}>Абсолютно верно!</strong>
                <span style={{ color: '#14532d', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  {task.nextHint}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {selectedOption !== null && !isCorrect && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ color: '#ef4444', marginTop: '-15px', marginBottom: '20px', fontWeight: 500 }}
        >
          Упс, кажется тут ошибка. Попробуйте другой вариант!
        </motion.p>
      )}

    </div>
  );
};

export default CodeTask;
