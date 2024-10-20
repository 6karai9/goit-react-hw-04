import React from 'react';
import PropTypes from 'prop-types';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className="load-more-btn" onClick={onClick}>
      Load more
    </button>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
