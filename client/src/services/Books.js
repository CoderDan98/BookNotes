import axios from "axios";

export const FetchBooks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/data");
    return response.data;
  } catch (error) {
    throw error;
  }
};
