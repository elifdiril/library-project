import { message } from "antd";
import axios from "axios";

export const getAllBooks = async () => {
  const { data } = await axios.get("/books").catch((err) => {
    message.error(err);
  });

  return data;
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
  axios.delete(`/delete-book/${id}`).then(() => {
    message.success("Book deleted successfully");
  });
};

export const updateBookQuery = async (book) => {
  axios.put(`/update-book/${book._id}`, book);
};
