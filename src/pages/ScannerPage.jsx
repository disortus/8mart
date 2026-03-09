import React from 'react';
import { useNavigate } from 'react-router-dom';
import QRScanner from '../components/QRScanner';
import SectionTitle from '../components/SectionTitle';
import { QrCode } from 'lucide-react';

const ScannerPage = () => {
  const navigate = useNavigate();

  const handleScanSuccess = (decodedText) => {
    try {
      // Create a URL object to parse the scanned text
      const url = new URL(decodedText);
      // If it's a URL to our site, extract the pathname and navigate
      if (url.origin === window.location.origin) {
         navigate(url.pathname);
      } else {
         // Alternatively, if the QR just contains the relative path (e.g. "/task1")
         navigate(decodedText);
      }
    } catch (e) {
      // If it's not a valid full URL, attempt to navigate directly (assuming it's a slug)
      // Make sure it starts with a slash if it's meant to be a direct route
      const path = decodedText.startsWith('/') ? decodedText : `/${decodedText}`;
      navigate(path);
    }
  };

  return (
    <div className="container" style={{ paddingBottom: '40px' }}>
      <SectionTitle 
        title="Сканируй QR-код" 
        subtitle="Наведите камеру на найденный QR-код, чтобы получить следующее задание квеста."
        icon={QrCode}
      />

      <div style={{ marginTop: '20px' }}>
        <QRScanner onScanSuccess={handleScanSuccess} />
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
