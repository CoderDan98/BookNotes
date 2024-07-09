import React from "react";
import "./EditBookCard.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const EditBookCard = ({ show, bookDetails, onClose, onSave }) => {
  const [formData, setFormData] = React.useState({
    ...bookDetails,
    description: bookDetails.description || "",
    notes: bookDetails.notes || "",
  });

  React.useEffect(() => {
    setFormData({
      ...bookDetails,
      description: bookDetails.description || "",
      notes: bookDetails.notes || "",
    });
  }, [bookDetails]);

  if (!show) {
    return null;
  }

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
        <form className="edit-book-form">
          <label>
            Title:{" "}
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Author:{" "}
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </label>
          <label>
            Release Date:{" "}
            <input
              type="text"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Publisher:{" "}
            <input
              type="text"
              name="publisher"
              value={formData.publisher}
              onChange={handleChange}
            />
          </label>
          <label>
            Page Count:{" "}
            <input
              type="number"
              name="pageCount"
              value={formData.pageCount}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:{" "}
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Notes:{" "}
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </label>
        </form>
        <div className="modal-actions">
          <i
            className="fas fa-check-circle update-icon"
            onClick={handleSave}
          ></i>
          <i className="fas fa-times-circle cancel-icon" onClick={onClose}></i>
        </div>
      </div>
    </div>
  );
};

export default EditBookCard;
