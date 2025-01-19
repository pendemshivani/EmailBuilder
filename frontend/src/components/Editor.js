import React from "react";
import "./Editor.css";

const Editor = ({ emailContent, onUpdate }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onUpdate(name, value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onUpdate("image", imageUrl);
    }
  };

  return (
    <div className="editor">
      <h2>Editor</h2>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={emailContent.title}
        onChange={handleInputChange}
      />

      <label>Content:</label>
      <textarea
        name="content"
        value={emailContent.content}
        onChange={handleInputChange}
      />

      <label>Button 1 Text:</label>
      <input
        type="text"
        name="button1"
        value={emailContent.button1}
        onChange={handleInputChange}
      />

      <label>Button 2 Text:</label>
      <input
        type="text"
        name="button2"
        value={emailContent.button2}
        onChange={handleInputChange}
      />

      <label>Text Color:</label>
      <input
        type="color"
        name="textColor"
        value={emailContent.textColor}
        onChange={handleInputChange}
      />

      <label>Text Size:</label>
      <select
        name="textSize"
        value={emailContent.textSize}
        onChange={handleInputChange}
      >
        <option value="14px">Small</option>
        <option value="16px">Medium</option>
        <option value="20px">Large</option>
        <option value="24px">Extra Large</option>
      </select>

      <label>Text Alignment:</label>
      <select
        name="textAlign"
        value={emailContent.textAlign}
        onChange={handleInputChange}
      >
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
      </select>

      <label>Upload Image:</label>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
};

export default Editor;
