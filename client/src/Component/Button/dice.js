import React from 'react';
import "../style/Button.css";

function dice() {
  const handleClick = () => { /* 看要按鈕回傳甚麼 */
    // 我是看到圖片有一個骰子的按鈕 所以我想說做一個骰子按鈕
    
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      點擊
    </button>
  );
}

export default dice;
