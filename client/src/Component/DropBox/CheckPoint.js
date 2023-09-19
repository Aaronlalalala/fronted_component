import React, { useState } from 'react';
import "../style/Dropdown.css";

function CheckPoint({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null); // 確保這裡有定義

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (selectedValue) => {
    setSelectedValue(selectedValue); 
    toggleDropdown();
    onChange(selectedValue);
  };

  return (
    <div className="dropdown-container">
      <span style={{ color: "black" }}>Stable Diffusion CheckPoint</span>
      <button onClick={toggleDropdown} className="dropdown-button">
        {value || '選擇一個值'}
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'active' : ''}`}>
        <li onClick={() => handleOptionClick(1)}>1</li>
        <li onClick={() => handleOptionClick(2)}>2</li>
        <li onClick={() => handleOptionClick(3)}>3</li>
      </ul>
    </div>
  );
}

export default CheckPoint;



