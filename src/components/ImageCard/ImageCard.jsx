import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageCard.module.css'

const ImageCard = ({ image, onClick }) => {
  return (
    <div>
      <img className={s.imgItem__image} onClick={onClick} src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
