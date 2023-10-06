import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Model() {
  const { username } = useParams();
  const [modelFile, setModelFile] = useState(null);

  useEffect(() => {
    
    axios.get(`/api/upload/checkdata?username=${username}`)
      .then((response) => {
       // 反映後處理資料
        setModelFile(response.data);
      })
      .catch((error) => {
        // 錯誤處理
        console.error("Error fetching model file:", error);
      });
  }, [username]);
   // 提供下載選項並處理資料 => 虛擬標籤
  function handleDownload() {
    if (modelFile) {
      const a = document.createElement("a");
      a.href = modelFile;
      a.download = "model-file-name.extension"; // 更改文件名和擴展名
      a.click();
    }
  }

  return (
    <div>
      <h1>模型預覽</h1>
      {modelFile ? (
        <>
          <img src={modelFile} alt="模型預覽" />
          <button onClick={handleDownload}>下載模型</button>
        </>
      ) : (
        <p>正在加載模型...</p>
      )}
    </div>
  );
}

export default Model;
