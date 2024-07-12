import axios from "axios";

// Create an axios instance with a base URL
const api = axios.create({
  baseURL: "http://localhost:3000/books",
});

// Function to fetch all books
export const FetchBooks = async () => {
  try {
    const response = await api.get("/data"); // Send a GET request to fetch book data
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error fetching books:", error); // Log error if fetch fails
    throw error; // Throw error to be handled by the caller
  }
};

// Function to add a new book
export const AddBook = async (bookData) => {
  try {
    const response = await api.post("/add", bookData); // Send a POST request to add a new book
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error adding book:", error); // Log error if adding book fails
    throw error; // Throw error to be handled by the caller
  }
};

// Function to update an existing book by ID
export const UpdateBook = async (id, bookData) => {
  try {
    const response = await api.put(`/update/${id}`, bookData); // Send a PUT request to update a book
    return response.data; // Return the response data
  } catch (error) {
    console.error(`Error updating book with ID ${id}:`, error); // Log error if updating book fails
    throw error; // Throw error to be handled by the caller
  }
};

// Function to delete a book by ID
export const DeleteBook = async (id) => {
  try {
    const response = await api.delete(`/delete/${id}`); // Send a DELETE request to delete a book
    return response.data; // Return the response data
  } catch (error) {
    console.error(`Error deleting book with ID ${id}:`, error); // Log error if deleting book fails
    throw error; // Throw error to be handled by the caller
  }
};
