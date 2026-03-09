import React from 'react';
import { Navigation, Sparkles, Image as ImageIcon } from 'lucide-react';

const RebusTask = ({ task }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      
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
        marginBottom: '30px',
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
          <span style={{ color: 'var(--text-dark)', fontSize: '0.95rem', lineHeight: 1.5 }}>{task.nextHint}</span>
        </div>
      </div>
    </div>
  );
};

export default RebusTask;
