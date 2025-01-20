import React, { useState } from "react";
import Editor from "./Editor";
import "./EmailBuilder.css";
import Preview from "./Preview";

const EmailBuilder = () => {
  const [emailContent, setEmailContent] = useState({
    title: "Email has never been easier",
    content:
      "Create beautiful and sophisticated emails in minutes. No coding required, and minimal setup. The way email should be.",
    button1: "Get started",
    button2: "Learn more",
    image: "", // Added for image upload
    textColor: "#333333",
    textSize: "18px",
    textAlign: "center",
    fontStyle: "Arial", // Added for font selection
  });

  const handleUpdate = (field, value) => {
    setEmailContent((prevContent) => ({
      ...prevContent,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    const response = await fetch("http://your-backend-url.com/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailContent),
    });

    if (response.ok) {
      alert("Email content saved successfully!");
    } else {
      alert("Failed to save email content.");
    }
  };

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch("http://your-backend-url.com/api/uploadImage", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const { imageUrl } = await response.json();
      setEmailContent((prevContent) => ({
        ...prevContent,
        image: imageUrl,
      }));
    } else {
      alert("Failed to upload image.");
    }
  };

  const handleDownload = () => {
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: ${emailContent.fontStyle};
            color: ${emailContent.textColor};
            font-size: ${emailContent.textSize};
            text-align: ${emailContent.textAlign};
          }
        </style>
      </head>
      <body>
        <h1>${emailContent.title}</h1>
        <p>${emailContent.content}</p>
        ${emailContent.image ? `<img src="${emailContent.image}" alt="Uploaded Image"/>` : ""}
        <button>${emailContent.button1}</button>
        <button>${emailContent.button2}</button>
      </body>
      </html>
    `;
    const blob = new Blob([htmlTemplate], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "email-template.html";
    link.click();
  };

  return (
    <div className="email-builder">
      <h1 className="email-builder-header">Email Builder</h1>
      <div className="email-builder-container">
        <Editor emailContent={emailContent} onUpdate={handleUpdate} onImageUpload={handleImageUpload} />
        <Preview emailContent={emailContent} />
      </div>
      <div className="email-builder-actions">
        <button className="save-button" onClick={handleSave}>
          Save Email
        </button>
        <button className="download-button" onClick={handleDownload}>
          Download Template
        </button>
      </div>
    </div>
  );
};

export default EmailBuilder;
