import React, { useState } from "react";

const ImageUploader = ({ defaultValue, onChange }) => {
  const [selectedImages, setSelectedImages] = useState(defaultValue || []);
  const [previewImages, setPreviewImages] = useState(defaultValue || []);

  const handleFileSelect = (e) => {
    const files = e.target.files;

    Promise.all(
      Array.from(files).map((file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            resolve(event.target.result);
          };
          reader.readAsDataURL(file);
        })
      )
    ).then((newImages) => {
      
      const updatedSelectedImages = [...selectedImages, ...newImages];
      const updatedPreviewImages = [...previewImages, ...newImages];

     
      const base64Images = updatedSelectedImages.filter((image) =>
        image.startsWith("data:image/")
      );

      setSelectedImages(base64Images);
      setPreviewImages(base64Images);

      if (onChange) {
        onChange(base64Images); 
      }
    });
  };

  const handleDeleteImage = (index) => {
    const updatedSelectedImages = [...selectedImages];
    const updatedPreviewImages = [...previewImages];

    updatedSelectedImages.splice(index, 1);
    updatedPreviewImages.splice(index, 1);

    setSelectedImages(updatedSelectedImages);
    setPreviewImages(updatedPreviewImages);

    if (onChange) {
      onChange(updatedSelectedImages); 
    }
  };

  const handleUpload = () => {
    if (onChange) {
      onChange(selectedImages); 
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileSelect}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {previewImages.map((image, index) => (
          <div key={index} style={{ margin: "10px", position: "relative" }}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                width: "auto",
                height: "auto",
              }}
            />
            <button
              onClick={() => handleDeleteImage(index)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                padding: "5px",
                background: "red",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              刪除
            </button>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleUpload}>提交</button>
      </div>
    </div>
  );
};

export default ImageUploader;
