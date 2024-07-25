import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => setDropdown(!dropdown);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>GeneClinix</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
        <li className="dropdown" onClick={handleDropdown}>
          Doctor
          {dropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/doctor1">Doctor 1</Link>
              </li>
              <li>
                <Link to="/doctor2">Doctor 2</Link>
              </li>
              <li>
                <Link to="/doctor3">Doctor 3</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "black" }} />
        ) : (
          <FaBars size={20} style={{ color: "black" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
