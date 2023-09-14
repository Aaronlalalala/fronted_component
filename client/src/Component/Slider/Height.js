import React, { useState, useEffect } from 'react';
import "../style/slider.css";
import axios from 'axios';

function Height() {
  const [sliderValue, setSliderValue] = useState(50);
  const [inputValue, setInputValue] = useState(50);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const requestData = {
          // 请求参数
          "height": sliderValue, // 使用前端的 Height 值
        };

        const response = await axios.get('http://localhost:8000/process', {
          params: requestData,
        });
        console.log(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    sendRequest();
  }, [sliderValue]);

  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setSliderValue(newValue);
    setInputValue(newValue);
  };

  const handleInputChange = (e) => {
    let newValue = parseInt(e.target.value, 10);
    newValue = Math.min(100, Math.max(0, newValue));
    setSliderValue(newValue);
    setInputValue(newValue);
  };

  return (
    <div className="slider-container">
      <h4>Height</h4>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        className="slider"
        onChange={handleSliderChange}
      />
      <input
        type="number"
        min="0"
        max="100"
        value={inputValue}
        className="input"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Height;
