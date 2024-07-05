import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      <Carousel
        selectedItem={selectedImage}
        onChange={(index) => setSelectedImage(index)}
        showThumbs={false}
        showStatus={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
      <div className="flex justify-center mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-4 h-4 mx-1 rounded-full ${selectedImage === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
