import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { Camera, AlertCircle } from 'lucide-react';

const QRScanner = ({ onScanSuccess }) => {
  const [error, setError] = useState(null);
  const [hasCamera, setHasCamera] = useState(true);
  const scannerRef = useRef(null);

  useEffect(() => {
    // We attempt to list cameras first
    Html5Qrcode.getCameras().then(devices => {
      if (devices && devices.length) {
        setHasCamera(true);
        startScanner();
      } else {
        setHasCamera(false);
        setError("Камеры не найдены на устройстве");
      }
    }).catch(err => {
      setHasCamera(false);
      setError("Ошибка доступа к камере. Разрешите доступ к камере в браузере.");
      console.error(err);
    });

    const startScanner = () => {
      scannerRef.current = new Html5Qrcode("reader");
      
      const config = { 
        fps: 10, 
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0
      };

      scannerRef.current.start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
          if (onScanSuccess) {
            onScanSuccess(decodedText);
          }
        },
        (errorMessage) => {
          // Ignored. html5-qrcode triggers this repeatedly when no code is found in frame.
        }
      ).catch((err) => {
        setError("Не удалось запустить сканер.");
        console.error(err);
      });
    }

    return () => {
      if (scannerRef.current && scannerRef.current.isScanning) {
        scannerRef.current.stop().catch(console.error);
      }
    };
  }, [onScanSuccess]);

  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      {!hasCamera || error ? (
        <div style={{
          padding: '30px 20px',
          background: '#fee2e2',
          color: '#b91c1c',
          borderRadius: 'var(--radius)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}>
          <AlertCircle size={32} />
          <p>{error || "Произошла ошибка при доступе к камере"}</p>
        </div>
      ) : (
        <div style={{
          position: 'relative',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          background: '#000',
          boxShadow: 'var(--shadow-lg)',
          border: '4px solid var(--primary-light)'
        }}>
          <div id="reader" style={{ width: '100%', minHeight: '300px' }}></div>
          
          <div style={{
            position: 'absolute',
            bottom: '15px',
            left: '0',
            right: '0',
            textAlign: 'center',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0,0,0,0.5)',
            padding: '8px',
            backdropFilter: 'blur(4px)'
          }}>
            <Camera size={18} />
            <span style={{ fontSize: '0.9rem' }}>Наведите на QR-код</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
