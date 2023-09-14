import React, { useState } from 'react';
import "../style/Dropdown.css";

function SamplingMethod() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value); 
    toggleDropdown();
  };

  return (
    <div className="dropdown-container">
      <span style={{ color: "black" }}>Stable Diffusion CheckPoint</span>
      <button onClick={toggleDropdown} className="dropdown-button">
        {selectedValue || '选择一个值'}
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'active' : ''}`}>
        <li onClick={() => handleOptionClick(1)}>1</li>
        <li onClick={() => handleOptionClick(2)}>2</li>
        <li onClick={() => handleOptionClick(3)}>3</li>
      </ul>
    </div>
  );
}

export default SamplingMethod;