import { message } from "antd";
import axios from "axios";

export const getAllBooks = async () => {
  try {
    const { data } = await axios.get("/books");
    return data;
  } catch (error) {
    message.error(error);
  }
};

export const addBookQuery = async (book) => {
  try {
    const { data } = await axios.post("/add-book", book);
    message.success("Book added successfully");

    return data;
  } catch (err) {
    message.error(err);
  }
};

export const deleteBook = async (id) => {
  try {
    axios.delete(`/delete-book/${id}`);
    message.success("Book deleted successfully");
  } catch (error) {
   message.error(error); 
  }
};

export const updateBookQuery = async (book) => {
  try {
    axios.put(`/update-book/${book._id}`, book);
    message.success("Book updated successfully");
  } catch (error) {
    message.error(error); 
  }
};
