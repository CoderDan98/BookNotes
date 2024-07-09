import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/books",
});

export const FetchBooks = async () => {
  try {
    const response = await api.get("/data");
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const AddBook = async (bookData) => {
  try {
    const response = await api.post("/add", bookData);
    return response.data;
  } catch (error) {
    console.error("Error adding book:", error);
    throw error;
  }
};

export const UpdateBook = async (id, bookData) => {
  try {
    const response = await api.put(`/update/${id}`, bookData);
    return response.data;
  } catch (error) {
    console.error(`Error updating book with ID ${id}:`, error);
    throw error;
  }
};

export const DeleteBook = async (id) => {
  try {
    const response = await api.delete(`/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting book with ID ${id}:`, error);
    throw error;
  }
};
