import React from 'react';
import './DoctorStyles.css';
import doctor1Photo from '../assets/doctor1.jpeg';

const Doctor1 = () => {
  return (
    <div className="doctor-container">
      <div className="doctor-photo">
        <img src={doctor1Photo} alt="Doctor 1" />
      </div>
      <div className="doctor-info">
        <h2>Doctor 1</h2>
        <p>Information about Doctor 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae leo cursus ultricies.</p>
      </div>
    </div>
  );
};

export default Doctor1;
