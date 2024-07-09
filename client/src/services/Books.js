import axios from "axios";

export const FetchBooks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/books/data");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const UpdateBook = async (id, bookData) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/books/update/${id}`,
      bookData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteBook = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/books/delete/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
