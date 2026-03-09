import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { girlsSections } from '../data/girlsPage';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const GirlsPage = () => {
  return (
    <div className="container" style={{ paddingBottom: '60px' }}>
      <SectionTitle 
        title="О вас, наши дорогие" 
        subtitle="Без вас эта учеба была бы такой серой. Вот всего несколько причин, почему мы вас ценим!"
        icon={Heart}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', marginTop: '50px' }}>
        {girlsSections.map((section, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{
                display: 'flex',
                flexDirection: isEven ? 'row' : 'row-reverse',
                alignItems: 'center',
                gap: '40px',
                background: 'white',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid rgba(230, 168, 215, 0.2)'
              }}
              className="girls-section-card"
            >
              <div style={{ 
                flex: 1, 
                overflow: 'hidden', 
                borderRadius: 'var(--radius)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.06)'
              }}>
                <img 
                  src={section.image} 
                  alt={section.title} 
                  loading="lazy"
                  style={{ 
                    width: '100%', 
                    height: '350px', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
              <div style={{ flex: 1, padding: '20px 10px' }}>
                <h3 style={{ 
                  color: 'var(--primary-dark)', 
                  fontSize: '2rem', 
                  marginBottom: '16px',
                  lineHeight: '1.2'
                }}>
                  {section.title}
                </h3>
                <p style={{ 
                  color: 'var(--text-dark)', 
                  fontSize: '1.15rem', 
                  lineHeight: 1.7,
                  opacity: 0.9
                }}>
                  {section.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .girls-section-card {
            flex-direction: column !important;
            gap: 24px !important;
            padding: 16px !important;
          }
          .girls-section-card img {
            height: 280px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GirlsPage;
