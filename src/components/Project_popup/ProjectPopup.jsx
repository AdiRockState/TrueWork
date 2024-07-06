import React, { useState } from 'react';
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import truSelected from '/icons-1/truselected.svg';
import sitevisit from '/icons-1/sitevisit.svg';
import rerasel from '/icons-1/Rera.svg';
import imshared from '/icons-1/IMShared.svg';
import compoff from '/icons-1/Property 1=default.svg'; 
import compon from '/icons-1/Property 1=Fill.svg'; 
import seloff from '/icons-1/Selected=Off.svg'; 
import selon from '/icons-1/Selected=On.svg'; 
import styles from './ProjectPopup.module.css';

export function PropCard({ project }) {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/details', { state: { project } });
  };

  const [A, setA] = useState({
    p1: false,
    p2: false,
  });

  const handleClick = async (key) => {
    const updatedState = !A[key];
    setA((prevState) => ({
      ...prevState,
      [key]: updatedState,
    }));

    const url = 'http://localhost:3000/wishlist'; // Ensure this URL matches your server's URL
    const method = updatedState ? 'POST' : 'DELETE';

    try {
      console.log(project);
      await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
        
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card className="w-full max-w-[24rem] ml-0 mr-0 shadow-none border" style={{ borderColor: "var(--Neutrals-Neutrals200, #CCCBCB)" }}>
      <CardHeader floated={false} color="blue-gray" className="relative h-56 mx-0 rounded-t-lg rounded-b-none shadow-none mt-0">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt={project['Project Name']}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 h-full w-full" />
        <div className="absolute top-4 left-4 flex space-x-2">
          <img src={truSelected} />
          <img src={rerasel} />
        </div>
        <div className="absolute bottom-4 left-4 flex space-x-2">
          <img src={imshared} />
          <img src={sitevisit} />
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <img src={A.p1 ? compon : compoff} onClick={() => handleClick('p1')} alt="Compare" />
          <img src={A.p2 ? selon : seloff} onClick={() => handleClick('p2')} alt="Star" />
        </div>
      </CardHeader>
      <CardBody className="pt-4"  onClick={handleViewMore}>
        <div className="mb-3">
          <h5 className={`font-large truncate ${styles['proj-name']}`}>
            {project['Project Name']}
          </h5>
          <p className={`truncate ${styles.proj_address}`}>
            HSR Layout
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <p className={`${styles.proj_detail_type}`}>Min. Inv</p>
            <p className={`${styles.proj_detail_type_val}`}>₹{project.Cost}</p>
          </div>
          <div>
            <p className={`${styles.proj_detail_type}`}>Tenure</p>
            <p className={`${styles.proj_detail_type_val}`}>{project.Tenure} Year</p>
          </div>
          <div>
            <p className={`${styles.proj_detail_type}`}>IRR</p>
            <p className={`${styles.proj_detail_type_val}`}>{project.IRR}%</p>
          </div>
          <div>
            <p className={`${styles.proj_detail_type}`}>IRR</p>
            <p className={`${styles.proj_detail_type_val}`}>{project.IRR}%</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
