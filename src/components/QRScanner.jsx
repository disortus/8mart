import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Camera, AlertCircle, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QRScanner = ({ onScanSuccess }) => {
  const [error, setError] = useState(null);
  const [hasCamera, setHasCamera] = useState(true);
  const scannerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkCameraAndStart = async () => {
      try {
        const devices = await Html5Qrcode.getCameras();
        if (devices && devices.length > 0) {
          setHasCamera(true);
          startScanner();
        } else {
          setHasCamera(false);
          setError("Камеры не найдены. Убедитесь, что устройство имеет камеру.");
        }
      } catch (err) {
        setHasCamera(false);
        setError("Доступ к камере запрещен. Разрешите его в настройках браузера!");
      }
    };

    const startScanner = () => {
      scannerRef.current = new Html5Qrcode("reader");
      
      const config = { 
        fps: 10, 
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0,
      };

      scannerRef.current.start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
          if (onScanSuccess) {
            // Wait briefly before stopping to let the UI show success or quickly redirect
            onScanSuccess(decodedText);
          }
        },
        () => {
          // Ignored. Repeatedly called when no code is visible.
        }
      ).catch(() => {
        setError("Не удалось инициализировать сканер. Проверьте права.");
      });
    }

    checkCameraAndStart();

    return () => {
      if (scannerRef.current && scannerRef.current.isScanning) {
        scannerRef.current.stop().catch(console.error);
      }
    };
  }, [onScanSuccess]);

  return (
    <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
      {!hasCamera || error ? (
        <div style={{
          padding: '40px 20px',
          background: '#fff1f2',
          border: '1px solid #fecdd3',
          color: '#be123c',
          borderRadius: 'var(--radius)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <AlertCircle size={48} />
          <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Упс! Ошибка камеры</h3>
          <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>{error}</p>
          
          <button 
            onClick={() => navigate('/')} 
            className="btn btn-primary"
            style={{ marginTop: '10px' }}
          >
            <Home size={18} />
            На главную
          </button>
        </div>
      ) : (
        <div style={{
          position: 'relative',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          background: '#000',
          boxShadow: 'var(--shadow-lg)',
          border: '4px solid white',
        }}>
          <div id="reader" style={{ width: '100%', minHeight: '350px' }}></div>
          
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(0,0,0,0.6)',
            padding: '12px 24px',
            borderRadius: '30px',
            backdropFilter: 'blur(8px)',
            width: 'max-content'
          }}>
            <Camera size={20} color="var(--primary-light)" />
            <span style={{ fontSize: '1rem', fontWeight: 500 }}>Наведите на QR-код</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
