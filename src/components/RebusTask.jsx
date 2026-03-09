import React, { useState } from 'react';
import { Navigation, Sparkles, Image as ImageIcon, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RebusTask = ({ task }) => {
  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanInput = inputValue.trim().toLowerCase();
    const cleanAnswer = task.answer.trim().toLowerCase();
    
    if (cleanInput === cleanAnswer) {
      setIsCorrect(true);
      setHasError(false);
    } else {
      setIsCorrect(false);
      setHasError(true);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
      
      {/* Title */}
      <h2 style={{ 
        fontSize: '1.8rem', 
        color: 'var(--primary-dark)', 
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        lineHeight: '1.2'
      }}>
        {task.title}
        <Sparkles size={24} color="var(--accent)" style={{ flexShrink: 0 }} />
      </h2>

      {/* Description */}
      <p style={{ 
        fontSize: '1.1rem', 
        lineHeight: 1.6, 
        color: 'var(--text-dark)',
        marginBottom: '20px'
      }}>
        {task.description}
      </p>

      {/* Rebus Image */}
      <div style={{
        width: '100%',
        maxWidth: '400px',
        background: 'var(--primary-light)',
        borderRadius: 'var(--radius)',
        padding: '10px',
        marginBottom: '24px',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid rgba(230, 168, 215, 0.4)'
      }}>
        {task.rebusImage ? (
          <img 
            src={task.rebusImage} 
            alt="Ребус" 
            style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }}
          />
        ) : (
          <div style={{
            height: '250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary-dark)',
            opacity: 0.7
          }}>
            <ImageIcon size={48} style={{ marginBottom: '10px' }} />
            <span>Место для вашего ребуса</span>
          </div>
        )}
      </div>

      {/* Answer Input Area */}
      {!isCorrect ? (
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '350px', marginBottom: '20px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input 
              type="text" 
              placeholder="Введите ответ..." 
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setHasError(false);
              }}
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: '30px',
                border: `2px solid ${hasError ? '#ef4444' : 'var(--primary-light)'}`,
                fontSize: '1rem',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)',
                transition: 'border-color 0.3s'
              }}
            />
            <button 
              type="submit"
              className="btn btn-primary"
              style={{
                position: 'absolute',
                right: '4px',
                padding: '10px 16px',
                minWidth: 'auto',
                borderRadius: '30px'
              }}
            >
              <Send size={18} />
            </button>
          </div>
          {hasError && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
              style={{ color: '#ef4444', marginTop: '10px', fontSize: '0.9rem', fontWeight: 500 }}
            >
              Попробуйте еще раз!
            </motion.p>
          )}
        </form>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          style={{ 
            color: '#16a34a', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            marginBottom: '20px',
            fontSize: '1.1rem',
            fontWeight: 600
          }}
        >
          <CheckCircle2 /> Правильно!
        </motion.div>
      )}

      {/* Hint (Hidden until correct) */}
      <AnimatePresence>
        {isCorrect && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '10px' }}
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
              border: '1px solid #86efac',
              boxShadow: 'var(--shadow-sm)'
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
                <strong style={{ display: 'block', color: '#166534', marginBottom: '6px' }}>Куда двигаться дальше?</strong>
                <span style={{ color: '#14532d', fontSize: '1rem', lineHeight: 1.5 }}>{task.nextHint}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default RebusTask;
