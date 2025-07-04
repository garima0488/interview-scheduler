// src/components/Toast.tsx
import React from 'react';

type ToastProps = {
  message: string;
  show: boolean;
};

const Toast: React.FC<ToastProps> = ({ message, show }) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '16px 24px',
        backgroundColor: '#00110f',
        color: '#00FF88',
        border: '1px solid #00FF88',
        borderRadius: '8px',
        boxShadow: '0 0 12px #00FF88',
        opacity: show ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
