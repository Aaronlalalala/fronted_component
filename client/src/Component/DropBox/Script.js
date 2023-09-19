import React, { useState } from 'react';
import "../style/Dropdown.css";

function Script({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    onChange(value); // 呼叫父元件的事件處理函數
    toggleDropdown();
  };

  return (
    <div className="dropdown-container">
      <span style={{ color: "black" }}>Script</span>
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

export default Script;