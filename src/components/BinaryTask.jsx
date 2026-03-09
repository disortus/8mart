import React from 'react';
import { Navigation, Binary, Sparkles } from 'lucide-react';

const BinaryTask = ({ task }) => {
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      
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
        gap: '10px',
        width: '100%',
        marginBottom: '30px'
      }}>
        {asciiTable.map((item, idx) => (
          <div key={idx} style={{
            background: 'var(--secondary)',
            padding: '8px',
            border: '1px solid var(--primary-light)',
            borderRadius: '6px',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.9rem',
            fontFamily: 'monospace'
          }}>
            <strong style={{ color: 'var(--text-dark)' }}>{item.char}</strong>
            <span style={{ color: 'var(--text-light)' }}>{item.bin}</span>
          </div>
        ))}
      </div>

      {/* Hint */}
      <div style={{
        width: '100%',
        background: 'linear-gradient(to bottom right, var(--primary-light), #fff)',
        padding: '20px',
        borderRadius: 'var(--radius)',
        textAlign: 'left',
        display: 'flex',
        gap: '16px',
        alignItems: 'flex-start',
        border: '1px solid rgba(230, 168, 215, 0.4)'
      }}>
        <div style={{
          background: 'white',
          padding: '10px',
          borderRadius: '50%',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <Navigation size={22} color="var(--primary-dark)" />
        </div>
        <div style={{ flex: 1 }}>
          <strong style={{ display: 'block', color: 'var(--primary-dark)', marginBottom: '6px' }}>Куда двигаться дальше?</strong>
          <span style={{ color: 'var(--text-dark)', fontSize: '0.95rem', lineHeight: 1.5 }}>
            Если вы расшифровали код, отправляйтесь по этой подсказке: <br/> 
            <b>{task.nextHint}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BinaryTask;
