import axios from "axios";

export const FetchBooks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/data");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteBook = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/books/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
