import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css'

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map(image => (
        <li className={s.imgItem} key={image.id}>
          <ImageCard className={s.modalImg}  image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
