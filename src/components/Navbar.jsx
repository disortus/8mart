import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Flower2, QrCode } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'О вас', path: '/girls' },
    { name: 'Моменты', path: '/moments' },
    { name: 'Старались', path: '/credits' },
  ];

  return (
    <>
      <nav 
        className={clsx('glass')} 
        style={{ 
          position: 'fixed', 
          width: '100%', 
          top: 0, 
          zIndex: 50, 
          padding: '16px 0',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.8)' : '1px solid transparent'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '1.3rem', color: 'var(--primary-dark)', letterSpacing: '-0.03em' }}>
            <Flower2 size={26} color="var(--primary)" />
            <span>8 Марта</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="desktop-menu hide-on-mobile" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--primary)' : 'var(--text-light)',
                  position: 'relative',
                  fontSize: '1rem',
                  padding: '4px 0'
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <NavLink to="/scan" className={clsx(
              "btn", 
              location.pathname === '/scan' ? 'btn-primary' : 'btn-outline'
            )} style={{ padding: '10px 20px', fontSize: '0.9rem', borderRadius: '30px' }}>
              <QrCode size={18} />
              <span className="hide-on-mobile" style={{ marginLeft: 6 }}>Сканер </span>
            </NavLink>

            <button onClick={toggleOpen} style={{ color: 'var(--text-dark)', display: 'var(--mobile-menu-btn)', alignItems: 'center', padding: '4px' }} className="mobile-menu-toggle">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'fixed', top: '70px', left: 0, right: 0, 
              background: 'rgba(255, 255, 255, 0.98)', 
              borderBottom: '1px solid var(--primary-light)',
              zIndex: 40, boxShadow: 'var(--shadow-md)',
              overflow: 'hidden', backdropFilter: 'blur(10px)'
            }}
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', padding: '20px 24px', gap: '10px' }}>
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) => ({
                    padding: '16px',
                    borderRadius: 'var(--radius)',
                    background: isActive ? 'var(--primary-light)' : 'transparent',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--primary-dark)' : 'var(--text-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '1.1rem',
                    transition: 'var(--transition)'
                  })}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        :root {
          --mobile-menu-btn: none;
        }
        @media (max-width: 768px) {
          .hide-on-mobile { display: none !important; }
          :root {
            --mobile-menu-btn: flex;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
