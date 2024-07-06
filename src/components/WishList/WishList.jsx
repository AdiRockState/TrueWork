import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If using axios
import WishListTable from './WishListTable'; // Update with your actual component path

const WishList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Load JSON file using fetch or axios
        // Using fetch
        const response = await fetch('/wishlist.json'); // Adjust the path as per your file location
        if (!response.ok) {
          throw new Error('Failed to fetch wishlist data');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <WishListTable projects={projects} />
    </div>
  );
};

export default WishList;
