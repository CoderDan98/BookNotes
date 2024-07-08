import React from "react";
import "./EditBookCard.css";

const EditBookCard = ({ show, bookDetails, onClose, onSave }) => {
  if (!show) {
    return null;
  }

  const [formData, setFormData] = React.useState(bookDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Book Details</h2>
        <form>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </label>
        </form>
        <div className="modal-actions">
          <button onClick={handleSave}>Update</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditBookCard;
