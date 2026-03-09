import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Flower2, QrCode } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleOpen = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'О вас', path: '/girls' },
    { name: 'Моменты', path: '/moments' },
    { name: 'Старались', path: '/credits' },
  ];

  return (
    <>
      <nav className="glass" style={{ 
        position: 'fixed', width: '100%', top: 0, zIndex: 50, padding: '15px 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '1.25rem', color: 'var(--primary)' }}>
            <Flower2 size={24} />
            С 8 Марта
          </NavLink>

          <div style={{ display: 'none' }} className="desktop-menu">
            {/* Desktop menu omitted to focus on mobile-first, but would go here if needed.
                We'll force mobile menu look for simpler responsive unified look or just show it */}
          </div>
          
          {/* Menu button with Scan integrated on top navbar for easy access */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <NavLink to="/scan" className={clsx(
              "btn", 
              location.pathname === '/scan' ? 'btn-primary' : 'btn-outline'
            )} style={{ padding: '8px 16px', fontSize: '0.9rem', borderRadius: '20px' }}>
              <QrCode size={18} />
              <span className="hide-on-small" style={{ marginLeft: 5 }}>Сканер</span>
            </NavLink>

            <button onClick={toggleOpen} style={{ color: 'var(--text-dark)' }}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: '65px', left: 0, right: 0, 
              background: 'white', borderBottom: '1px solid var(--primary-light)',
              zIndex: 40, boxShadow: 'var(--shadow-md)'
            }}
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) => ({
                    padding: '15px 0',
                    borderBottom: '1px solid #f0f0f0',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--primary)' : 'var(--text-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  })}
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink 
                to="/scan"
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => ({
                  padding: '15px 0',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--primary)' : 'var(--text-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                })}
              >
                <QrCode size={18} /> Сканер QR
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media (min-width: 640px) {
          .hide-on-small { display: inline; }
        }
        @media (max-width: 639px) {
          .hide-on-small { display: none; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
