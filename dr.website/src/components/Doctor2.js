import React from 'react';
import './DoctorStyles.css';
import doctor2Photo from '../assets/doctor2.jpeg';

const Doctor2 = () => {
  return (
    <div className="doctor-container">
      <div className="doctor-photo">
        <img src={doctor2Photo} alt="Doctor 2" />
      </div>
      <div className="doctor-info">
        <h2>Doctor 2</h2>
        <p>Information about Doctor 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae leo cursus ultricies.</p>
      </div>
    </div>
  );
};

export default Doctor2;
