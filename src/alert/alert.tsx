import React from 'react';

export interface ToastProps {
  type: 'information' | 'notification';
  variant: 'success' | 'danger' | 'warning';
  size: 'small' | 'medium' | 'large';
  message: string;
  title: string;
  onClose?: () => void;
}

const getStyles = (type: 'information' | 'notification', variant: 'success' | 'danger' | 'warning', size: 'small' | 'medium' | 'large') => {
  const baseStyles = {
    small: { padding: '8px 12px', fontSize: '12px' },
    medium: { padding: '12px 16px', fontSize: '14px' },
    large: { padding: '16px 24px', fontSize: '16px' },
  };

  const typeStyles = type === 'information' ? {
    backgroundColor: variant === 'success' ? '#d4edda' : variant === 'danger' ? '#f8d7da' : '#fff3cd',
    color: variant === 'success' ? '#155724' : variant === 'danger' ? '#721c24' : '#856404',
    border: `1px solid ${variant === 'success' ? '#c3e6cb' : variant === 'danger' ? '#f5c6cb' : '#ffeeba'}`,
  } : {
    backgroundColor: '#ffffff',
    color: '#000000',
    border: '1px solid #cccccc',
  };

  return { ...baseStyles[size], ...typeStyles };
};

const getIcon = (variant: 'success' | 'danger' | 'warning') => {
  switch (variant) {
    case 'success':
      return (
        <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      );
    case 'danger':
      return (
        <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    case 'warning':
      return (
        <svg className="h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21.7 13.3a9 9 0 10-19.4 0 9 9 0 0019.4 0z" />
        </svg>
      );
    default:
      return null;
  }
};

const Toast: React.FC<ToastProps> = ({ type, variant, size, message, title, onClose }) => {
  const styles = getStyles(type, variant, size);

  return (
    <div
      style={{
        ...styles,
        borderRadius: '4px',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        margin: '8px',
      }}
      role="alert"
    >
      <div style={{ marginRight: '12px' }}>
        {getIcon(variant)}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
          {title}
        </div>
        <div>
          {message}
        </div>
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            style={{ height: '16px', width: '16px', color: '#6c757d' }}
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Toast;
