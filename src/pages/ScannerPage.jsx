import React from 'react';
import { useNavigate } from 'react-router-dom';
import QRScanner from '../components/QRScanner';
import SectionTitle from '../components/SectionTitle';
import { QrCode } from 'lucide-react';

const ScannerPage = () => {
  return (
    <div className="container" style={{ paddingBottom: '40px' }}>
      <SectionTitle 
        title="Сканируй QR-код" 
        subtitle="Наведите камеру на найденный QR-код, чтобы получить следующее задание квеста."
        icon={QrCode}
      />

      <div style={{ marginTop: '20px' }}>
        <QRScanner />
      </div>

      <div style={{ 
        maxWidth: '500px', 
        margin: '30px auto 0', 
        background: 'var(--secondary)', 
        padding: '20px', 
        borderRadius: 'var(--radius)',
        textAlign: 'center',
        border: '1px solid var(--accent-light)'
      }}>
        <h4 style={{ color: 'var(--accent)', marginBottom: '10px' }}>Как это работает?</h4>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>
          Разрешите доступ к камере. После того как сканер распознает код, вы будете автоматически перенаправлены на секретную страницу с заданием для вашей команды.
        </p>
      </div>
    </div>
  );
};

export default ScannerPage;
