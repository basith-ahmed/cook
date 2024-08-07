import React from 'react';

const ImageDisplay = ({ imageUrl, dish }) => (
  <div className="mt-4">
    <img src={imageUrl} alt={dish} className="w-full rounded-lg" />
  </div>
);

export default ImageDisplay;
