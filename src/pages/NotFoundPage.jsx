import React from 'react';
import { NavLink } from 'react-router-dom';
import { Ghost, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="container" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Ghost size={80} color="var(--primary-light)" style={{ marginBottom: '20px' }} />
        <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '10px' }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Ой, страничка потерялась</h2>
        <p style={{ color: 'var(--text-light)', marginBottom: '30px', maxWidth: '400px' }}>
          Возможно, вы ввели неверный адрес, или этот QR-код ведет не туда. 
          А может, это мы что-то перепутали!
        </p>
        
        <NavLink to="/" className="btn btn-primary">
          <Home size={20} />
          Вернуться на главную
        </NavLink>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
