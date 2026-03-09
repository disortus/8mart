import React from 'react';
import SectionTitle from '../components/SectionTitle';
import MemoryCard from '../components/MemoryCard';
import { gallery } from '../data/gallery';
import { Camera } from 'lucide-react';

const MomentsPage = () => {
  return (
    <div className="container">
      <SectionTitle 
        title="Наши Общие Моменты" 
        subtitle="Собрали немного теплых воспоминаний. С вами всегда есть что вспомнить и над чем посмеяться!"
        icon={Camera}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
        marginTop: '40px',
        paddingBottom: '40px'
      }}>
        {gallery.map((item, index) => (
          <MemoryCard 
            key={item.id}
            index={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MomentsPage;
