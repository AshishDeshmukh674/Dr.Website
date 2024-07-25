import React from 'react';
import imgg from '../assets/background_img.jpg';
import './FirstpageStyle.css'; 

const FirstPage = () => {
  return (
    <div className="image-container">
      <img src={imgg} alt="Background" className="background-image" />
      <div className="content-overlay">
        <h1 className="heading">GeneClinix</h1>
        <p className="tagline">Helping to Build a Healthy Community</p>
        <button className="appointment-button">Book an Appointment</button>
      </div>
    </div>
  );
}

export default FirstPage;
