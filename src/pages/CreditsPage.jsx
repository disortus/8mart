import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { boys } from '../data/boys';
import { motion } from 'framer-motion';
import { Medal } from 'lucide-react';

const CreditsPage = () => {
  return (
    <div className="container" style={{ paddingBottom: '60px' }}>
      <SectionTitle 
        title="Мы очень старались!" 
        subtitle="Этот сайт, квест и все поздравления были сделаны мужской частью нашей группы специально для вас."
        icon={Medal}
      />

      <div style={{
        marginTop: '40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px'
      }}>
        {boys.map((boy, index) => (
          <motion.div
            key={boy.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'center',
              border: '1px solid var(--primary-light)'
            }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--primary-light), white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 15px',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--primary)',
              border: '2px solid var(--primary)'
            }}>
              {boy.name.charAt(0)}
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-dark)' }}>
              {boy.name}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
              {boy.role}
            </p>
          </motion.div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--primary)' }}>
          "С праздником весны, красоты и нежности!"
        </p>
      </div>
    </div>
  );
};

export default CreditsPage;
