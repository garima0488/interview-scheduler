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
        backgroundColor: '#e0f2fe', // soft light blue background
        color: '#1f2937', // steel grey text
        border: '1px solid #93c5fd', // light blue border
        borderRadius: '8px',
        boxShadow: '0 0 12px rgba(147, 197, 253, 0.5)', // subtle blue glow
        opacity: show ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        pointerEvents: 'none',
        zIndex: 1000,
        fontWeight: 500,
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
