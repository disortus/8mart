import React, { useState } from 'react';
import { Navigation, Binary, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BinaryTask = ({ task }) => {
  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Simple ASCII mapping for display
  const asciiTable = [
    { char: 'A', bin: '01000001' }, { char: 'B', bin: '01000010' },
    { char: 'C', bin: '01000011' }, { char: 'E', bin: '01000101' },
    { char: 'F', bin: '01000110' }, { char: 'G', bin: '01000111' },
    { char: 'I', bin: '01001001' }, { char: 'L', bin: '01001100' },
    { char: 'M', bin: '01001101' }, { char: 'N', bin: '01001110' },
    { char: 'O', bin: '01001111' }, { char: 'P', bin: '01010000' },
    { char: 'R', bin: '01010010' }, { char: 'S', bin: '01010011' },
    { char: 'T', bin: '01010100' }, { char: 'U', bin: '01010101' },
    { char: 'V', bin: '01010110' }, { char: 'W', bin: '01010111' },
    { char: 'Y', bin: '01011001' }
  ];

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
        <Binary size={24} color="var(--accent)" />
      </h2>

      <p style={{ 
        fontSize: '1.05rem', 
        lineHeight: 1.6, 
        color: 'var(--text-dark)',
        marginBottom: '20px'
      }}>
        {task.description}
      </p>

      {/* Binary Code Block */}
      <div style={{
        background: '#2c2c2c',
        color: '#4ade80', // hacker green
        padding: '20px',
        borderRadius: '8px',
        fontFamily: 'monospace',
        fontSize: '1.3rem',
        letterSpacing: '2px',
        wordBreak: 'break-word',
        marginBottom: '30px',
        width: '100%',
        boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)'
      }}>
        {task.binaryString}
      </div>

      {/* Lookup Table */}
      <h4 style={{ color: 'var(--primary-dark)', marginBottom: '15px' }}>ASCII Подсказка:</h4>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
        gap: '8px',
        width: '100%',
        marginBottom: '30px'
      }}>
        {asciiTable.map((item, idx) => (
          <div key={idx} style={{
            background: 'var(--secondary)',
            padding: '6px 8px',
            border: '1px solid var(--primary-light)',
            borderRadius: '6px',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.85rem',
            fontFamily: 'monospace'
          }}>
            <strong style={{ color: 'var(--text-dark)' }}>{item.char}</strong>
            <span style={{ color: 'var(--text-light)' }}>{item.bin}</span>
          </div>
        ))}
      </div>

      {/* Answer Input Area */}
      {!isCorrect ? (
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '350px', marginBottom: '20px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input 
              type="text" 
              placeholder="Введите расшифрованное слово..." 
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
          <CheckCircle2 /> Код взломан!
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

export default BinaryTask;
