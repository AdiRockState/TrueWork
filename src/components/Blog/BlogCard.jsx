// src/components/BlogCard.js

import React from 'react';

const BlogCard = ({ card }) => {
  return (
    <div className="flex border p-4 rounded-lg mb-4">
      <img src={card.imageUrl} alt="blog" className="w-32 h-32 object-cover rounded-lg mr-4" />
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-sm text-gray-500">{card.date}</p>
          <h2 className="text-xl font-semibold mt-2">{card.title}</h2>
          <p className="text-gray-700 mt-2">{card.content}</p>
        </div>
        <p className="text-sm text-gray-600 mt-2">By {card.author}</p>
      </div>
    </div>
  );
};

export default BlogCard;
