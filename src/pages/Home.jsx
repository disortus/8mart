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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          padding: '40px 20px',
          background: 'linear-gradient(to bottom, var(--primary-light), var(--background))',
          borderRadius: 'var(--radius)',
          marginTop: '20px',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <h1 style={{ 
          fontSize: '2.5rem', 
          color: 'var(--primary)', 
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px'
        }}>
          С 8 Марта! <Sparkles color="var(--accent)" />
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--text-dark)', 
          maxWidth: '600px', 
          margin: '0 auto 30px',
          lineHeight: '1.6'
        }}>
          Дорогие наши девушки! Вы — лучшее, что есть в нашей студенческой жизни. 
          Мы приготовили для вас небольшой сюрприз.
        </p>
        
        <NavLink to="/girls" className="btn btn-primary">
          <Heart size={20} />
          Узнать больше о вас
        </NavLink>
      </motion.div>

      {/* Quest Instruction Section */}
      <SectionTitle 
        title="Праздничный мини-квест" 
        subtitle="Мы разделили вас на 3 команды. Для каждой из команд мы спрятали 3 секретных QR-кода!"
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        <motion.div 
          whileHover={{ y: -5 }}
          style={{ padding: '25px', background: 'white', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}
        >
          <div style={{ background: 'var(--primary-light)', padding: '15px', borderRadius: '50%', display: 'inline-block', marginBottom: '15px', color: 'var(--primary)' }}>
            <Users size={32} />
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>3 команды</h3>
          <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
            Розы, Тюльпаны и Лилии. Найдите свою команду и начинайте игру!
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          style={{ padding: '25px', background: 'white', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}
        >
          <div style={{ background: 'var(--primary-light)', padding: '15px', borderRadius: '50%', display: 'inline-block', marginBottom: '15px', color: 'var(--primary)' }}>
            <QrCode size={32} />
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Сканируйте QR</h3>
          <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
            Коды спрятаны по всему зданию. Сканируйте их прямо через этот сайт!
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          style={{ padding: '25px', background: 'white', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}
        >
          <div style={{ background: 'var(--primary-light)', padding: '15px', borderRadius: '50%', display: 'inline-block', marginBottom: '15px', color: 'var(--primary)' }}>
            <Sparkles size={32} />
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Получите подарок</h3>
          <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
            Выполните все 3 задания вашей команды и возвращайтесь к нам за сюрпризом.
          </p>
        </motion.div>
      </div>

      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <p style={{ marginBottom: '20px', color: 'var(--text-dark)' }}>
          Готовы начать поиск?
        </p>
        <NavLink to="/scan" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
          <QrCode size={24} />
          Открыть сканер QR
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
