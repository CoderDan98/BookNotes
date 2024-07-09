import React from "react";
import moment from "moment";
import "./EditBookCard.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { UpdateBook } from "../../services/Books";

const EditBookCard = ({ show, bookDetails, onClose, onSave, refetch }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return moment(dateString, ["DD/MM/YYYY", "YYYY-MM-DD"]).format(
      "YYYY-MM-DD"
    );
  };

  const [formData, setFormData] = React.useState({
    ...bookDetails,
    releaseDate: formatDate(bookDetails.releaseDate),
    description: bookDetails.description || "",
    notes: bookDetails.notes || "",
  });

  const [errorMessages, setErrorMessages] = React.useState([]);

  React.useEffect(() => {
    setFormData({
      ...bookDetails,
      releaseDate: formatDate(bookDetails.releaseDate),
      description: bookDetails.description || "",
      notes: bookDetails.notes || "",
    });
  }, [bookDetails]);

  if (!show) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "releaseDate" ? moment(value).format("YYYY-MM-DD") : value,
    }));
    setErrorMessages([]);
  };

  const handleSave = async () => {
    const newErrorMessages = [];
    if (!formData.title) newErrorMessages.push("Title is required.");
    if (!formData.author) newErrorMessages.push("Author is required.");
    if (
      !formData.releaseDate ||
      !moment(formData.releaseDate, "YYYY-MM-DD", true).isValid()
    ) {
      newErrorMessages.push("Release Date is required.");
    }
    if (!formData.publisher) newErrorMessages.push("Publisher is required.");
    if (!formData.pageCount) newErrorMessages.push("Page Count is required.");
    if (!formData.description)
      newErrorMessages.push("Description is required.");

    if (newErrorMessages.length > 0) {
      setErrorMessages(newErrorMessages);
      return;
    }

    try {
      await UpdateBook(formData.id, formData);
      onSave(formData);
      refetch();
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Book Details</h2>
        {errorMessages.length > 0 && (
          <div className="error-messages">
            {errorMessages.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </div>
        )}
        <form className="edit-book-form">
          <label>
            <span className="required-icon">*</span>Title:{" "}
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            isbn_id:{" "}
            <input
              type="number"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="required-icon">*</span>Author:{" "}
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <span className="required-icon">*</span>Release Date:{" "}
            <input
              type="date"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <span className="required-icon">*</span>Publisher:{" "}
            <input
              type="text"
              name="publisher"
              value={formData.publisher}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <span className="required-icon">*</span>Page Count:{" "}
            <input
              type="number"
              name="pageCount"
              value={formData.pageCount}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <span className="required-icon">*</span>Description: <br />
            <textarea
              className="custom-textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Notes: <br />
            <textarea
              className="custom-textarea"
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
