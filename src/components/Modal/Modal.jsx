import React, { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = (props) => {
  const { imageUrl, altText, onClose } = props;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.Overlay} onClick={handleOverlayClick}>
      <div className={css.Modal}>
        <img src={imageUrl} alt={altText} />
      </div>
    </div>
  );
};
