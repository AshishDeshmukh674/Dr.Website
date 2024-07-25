import React from 'react';
import './DoctorStyles.css';
import doctor3Photo from '../assets/doctor3.jpeg';

const Doctor3 = () => {
  return (
    <div className="doctor-container">
      <div className="doctor-photo">
        <img src={doctor3Photo} alt="Doctor 3" />
      </div>
      <div className="doctor-info">
        <h2>Doctor 3</h2>
        <p>Information about Doctor 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae leo cursus ultricies.</p>
      </div>
    </div>
  );
};

export default Doctor3;
