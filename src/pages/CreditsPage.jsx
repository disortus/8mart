import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { Medal } from 'lucide-react';

const CreditsPage = () => {
  return (
    <div className="container" style={{ paddingBottom: '60px' }}>
      <SectionTitle 
        title="Мы старались!" 
        subtitle="Этот сайт, квест и поздравление — дело рук мужской части нашей группы."
        icon={Medal}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          marginTop: '60px',
          padding: '60px 30px',
          borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, var(--primary-light), white)',
          boxShadow: 'var(--shadow-lg)',
          border: '2px solid var(--primary)',
          textAlign: 'center'
        }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '20px',
          color: 'var(--primary-dark)',
          lineHeight: '1.3'
        }}>
          Все старались.  
          <br />
          Конкретно, отвечаем.
        </h2>

        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-dark)',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Делали сайт, придумывали задания, печатали QR-коды,  
          бегали по универу и прятали подсказки.  
          Всё ради того, чтобы у вас сегодня было чуть больше улыбок.
        </p>
        <br/>
        <em><i><p>
  Даже тот, кто сейчас читает этот текст 🙂
</p></i></em>
      </motion.div>

      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--primary)' }}>
          С 8 марта! 🌸
        </p>
      </div>
    </div>
  );
};

export default CreditsPage;