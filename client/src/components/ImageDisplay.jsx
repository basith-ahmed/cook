import React, { useState } from 'react';

const ImageDisplay = () => {
  const [animal, setAnimal] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const fetchImage = async () => {
    try {
      const response = await fetch(`https://cook.basithahmed.me/cook/${animal}`);
      const data = await response.json();
      if (response.ok) {
        setImageUrl(data.imageUrl);
        setError('');
      } else {
        setError(data.error || 'Failed to fetch image');
        setImageUrl('');
      }
    } catch (error) {
      setError('An error occurred while fetching the image');
      setImageUrl('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">Animal Image Finder</h1>
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
              placeholder="Enter an animal name"
              className="flex-grow"
            />
            <button onClick={fetchImage}>Search</button>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {imageUrl && (
            <div className="mt-4">
              <img src={imageUrl} alt={animal} className="w-full rounded-lg shadow-lg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageDisplay;