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
    image: "",
    textColor: "#333333",
    textSize: "18px",
    textAlign: "center",
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

  return (
    <div className="email-builder">
      <h1 className="email-builder-header">Email Builder</h1>
      <div className="email-builder-container">
        <Editor emailContent={emailContent} onUpdate={handleUpdate} />
        <Preview emailContent={emailContent} />
      </div>
      <button className="save-button" onClick={handleSave}>
        Save Email
      </button>
    </div>
  );
};

export default EmailBuilder;
