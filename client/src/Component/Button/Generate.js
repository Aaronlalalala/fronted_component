import React from 'react';
import "../style/Button.css";

function Generate({ onClick }) {
  return (
    <button className="custom-button" onClick={onClick}>
      點擊
    </button>
  );
}

export default Generate;
