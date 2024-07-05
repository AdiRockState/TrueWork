// src/components/PopularTopics.js

import React from 'react';

const PopularTopics = ({ topics }) => {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Popular Topics</h2>
      {topics.map((topic, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium">{topic.title}</h3>
          <p className="text-sm text-gray-600">By {topic.author}</p>
        </div>
      ))}
    </div>
  );
};

export default PopularTopics;
