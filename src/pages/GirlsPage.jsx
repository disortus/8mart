import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { girlsSections } from '../data/girlsPage';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const GirlsPage = () => {
  return (
    <div className="container" style={{ paddingBottom: '40px' }}>
      <SectionTitle 
        title="О вас, наши дорогие" 
        subtitle="Без вас эта учеба была бы такой серой. Вот всего несколько причин, почему мы вас ценим!"
        icon={Heart}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginTop: '40px' }}>
        {girlsSections.map((section, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'flex',
                flexDirection: isEven ? 'row' : 'row-reverse',
                alignItems: 'center',
                gap: '30px',
                background: 'white',
                borderRadius: 'var(--radius)',
                padding: '20px',
                boxShadow: 'var(--shadow-sm)'
              }}
              className="girls-section-card"
            >
              <div style={{ flex: 1, overflow: 'hidden', borderRadius: '12px' }}>
                <img 
                  src={section.image} 
                  alt={section.title} 
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
              </div>
              <div style={{ flex: 1, padding: '20px' }}>
                <h3 style={{ 
                  color: 'var(--primary)', 
                  fontSize: '1.8rem', 
                  marginBottom: '15px' 
                }}>
                  {section.title}
                </h3>
                <p style={{ 
                  color: 'var(--text-dark)', 
                  fontSize: '1.1rem', 
                  lineHeight: 1.7 
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
          }
          .girls-section-card img {
            height: 250px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GirlsPage;
