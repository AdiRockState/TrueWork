// src/components/BlogPage.js

import React from 'react';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
import PopularTopics from './PopularTopics';

// src/data/sampleData.js

const sampleData = [
  {
    id: 1,
    date: "12 Jan 2024",
    title: "Evaluating early-stage risks in new RE projects - Pt 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: "Raman Singh",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    date: "13 Jan 2024",
    title: "Understanding Market Trends in Real Estate - Pt 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: "Raman Singh",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    date: "13 Jan 2024",
    title: "Understanding Market Trends in Real Estate - Pt 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: "Raman Singh",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    date: "13 Jan 2024",
    title: "Understanding Market Trends in Real Estate - Pt 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: "Raman Singh",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 5,
    date: "13 Jan 2024",
    title: "Understanding Market Trends in Real Estate - Pt 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: "Raman Singh",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 6,
    date: "12 Jan 2024",
    title: "Evaluating early-stage risks in new RE projects - Pt 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: "Raman Singh",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 7,
    date: "13 Jan 2024",
    title: "Understanding Market Trends in Real Estate - Pt 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: "Raman Singh",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 8,
    date: "13 Jan 2024",
    title: "Understanding Market Trends in Real Estate - Pt 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: "Raman Singh",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 9,
    date: "13 Jan 2024",
    title: "Understanding Market Trends in Real Estate - Pt 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: "Raman Singh",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 10,
    date: "13 Jan 2024",
    title: "Understanding Market Trends in Real Estate - Pt 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: "Raman Singh",
    imageUrl: "https://via.placeholder.com/150"
  },
  // Add more objects as needed
];

const BlogPage = () => {
  const cards = sampleData.slice(0, 10); // Get first 10 cards
  const popularTopics = sampleData.slice(0, 2); // Get first 2 cards for popular topics

  return (
    <div className="container mx-auto p-4 flex overflow-hidden">
      <div className="w-3/4 pr-4 overflow-y-auto h-screen hide-scrollbar">
        {cards.map(card => (
          <Link key={card.id} to={`/blogcontent`}>
          {/* // <Link key={card.id} to={`/blog/${card.id}`}> */}
          <BlogCard card={card} />
        </Link>
        ))}
      </div>
      <div className="w-1/4 sticky top-0">
        <PopularTopics topics={popularTopics} />
      </div>
    </div>
  );
};

export default BlogPage;
