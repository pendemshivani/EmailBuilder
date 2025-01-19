import React from "react";
import "./Preview.css";

const Preview = ({ emailContent }) => {
  return (
    <div className="preview" style={{ textAlign: emailContent.textAlign }}>
      <h2 style={{ color: emailContent.textColor, fontSize: emailContent.textSize }}>
        {emailContent.title}
      </h2>
      {emailContent.image && (
        <img src={emailContent.image} alt="Uploaded" className="preview-image" />
      )}
      <p style={{ color: emailContent.textColor, fontSize: emailContent.textSize }}>
        {emailContent.content}
      </p>
      <div className="preview-buttons">
        <button className="preview-button primary">{emailContent.button1}</button>
        <button className="preview-button secondary">{emailContent.button2}</button>
      </div>
    </div>
  );
};

export default Preview;
