import React from 'react';
import Modal from 'react-modal';
import s from './ImageModal.module.css'

// Функціональний компонент для модального вікна
const ImageModal = ({ isOpen, image, onClose }) => {
  return (
    <Modal
    className={s.modal}
          isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      shouldCloseOnOverlayClick={true} // Закриття при кліку на оверлей
    >
      {image && (
        <div >
          <img 
            src={image.urls.regular} 
            alt={image.alt_description} 
             
          />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
