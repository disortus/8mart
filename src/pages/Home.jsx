import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QrCode, Sparkles, Heart, Users } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Home = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          textAlign: 'center',
          padding: '60px 30px',
          background: 'linear-gradient(145deg, var(--secondary), var(--primary-light))',
          borderRadius: 'var(--radius-lg)',
          marginTop: '20px',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid rgba(255, 255, 255, 0.6)'
        }}
      >
        <h1 style={{ 
          fontSize: '3rem', 
          color: 'var(--primary-dark)', 
          marginBottom: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          lineHeight: 1.1
        }}>
          С 8 Марта! <Sparkles color="var(--accent)" size={36} />
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--text-dark)', 
          maxWidth: '650px', 
          margin: '0 auto 40px',
          lineHeight: '1.7',
          opacity: 0.9
        }}>
          Дорогие наши девушки! Вы — самое прекрасное, что есть в нашей учебе. 
          Мы приготовили для вас небольшой весенний сюрприз.
        </p>
        
        <NavLink to="/girls" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
          <Heart size={20} fill="white" />
          Узнать больше о вас
        </NavLink>
      </motion.div>

      {/* Quest Instruction Section */}
      <SectionTitle 
        title="Праздничный квест" 
        subtitle="Вас ждут 3 команды и секретные задания, спрятанные в QR-кодах!"
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
        marginBottom: '60px'
      }}>
        <motion.div 
          whileHover={{ y: -8 }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ padding: '32px 24px', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', textAlign: 'center', border: '1px solid rgba(230, 168, 215, 0.2)' }}
        >
          <div style={{ background: 'var(--primary-light)', padding: '16px', borderRadius: '50%', display: 'inline-flex', marginBottom: '20px', color: 'var(--primary-dark)' }}>
            <Users size={32} />
          </div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>3 Команды</h3>
          <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: 1.5 }}>
            Розы, Тюльпаны и Лилии. Каждая команда ищет свой путь.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -8 }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ padding: '32px 24px', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', textAlign: 'center', border: '1px solid rgba(230, 168, 215, 0.2)' }}
        >
          <div style={{ background: 'var(--primary-light)', padding: '16px', borderRadius: '50%', display: 'inline-flex', marginBottom: '20px', color: 'var(--primary-dark)' }}>
            <QrCode size={32} />
          </div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>QR Сканер</h3>
          <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: 1.5 }}>
            Сканируйте подсказки прямо через сайт, ничего скачивать не нужно.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -8 }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ padding: '32px 24px', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', textAlign: 'center', border: '1px solid rgba(230, 168, 215, 0.2)' }}
        >
          <div style={{ background: 'var(--primary-light)', padding: '16px', borderRadius: '50%', display: 'inline-flex', marginBottom: '20px', color: 'var(--primary-dark)' }}>
            <Sparkles size={32} />
          </div>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Финал</h3>
          <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: 1.5 }}>
            Пройдите все испытания и возвращайтесь за подарком!
          </p>
        </motion.div>
      </div>

      <div style={{ textAlign: 'center', margin: '40px 0 60px' }}>
        <p style={{ marginBottom: '24px', color: 'var(--text-dark)', fontSize: '1.2rem', fontWeight: 500 }}>
          Уже нашли первый код?
        </p>
        <NavLink to="/scan" className="btn btn-primary" style={{ padding: '18px 40px', fontSize: '1.15rem', borderRadius: '50px' }}>
          <QrCode size={24} />
          Открыть сканер QR
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
