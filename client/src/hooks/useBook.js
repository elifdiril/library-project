import { useQueryClient } from "@tanstack/react-query";
import useBookQuery from "./useBookQuery";
import { useState } from "react";
import { updateBookQuery, deleteBook, addBookQuery } from "../models/book";

const useBook = () => {
  const queryClient = useQueryClient();
  const { isLoading, data: books } = useBookQuery();
  const [isFetching, setIsFetching] = useState();

  const addBook = async (book) => {
    setIsFetching(true);
    const addedBook = await addBookQuery(book);
    queryClient.setQueryData(["books"], (prevData) => [...prevData, {...book, _id: addedBook._id }]);
    setIsFetching(false);
  };

  const updateBook = async (bookId, newBook) => {
    setIsFetching(true);
    const updatedBooks = books.map((book) => {
      if (book._id === bookId) {
        return { ...book, ...newBook };
      }
      return book;
    });
    await updateBookQuery({
      ...books.find((book) => book._id === bookId),
      ...newBook,
    });
    queryClient.setQueryData(["books"], updatedBooks);
    setIsFetching(false);
  };

  const removeBook = async (id) => {
    setIsFetching(true);
    await deleteBook(id);
    const updatedBooks = books.filter((book) => book._id !== id);
    queryClient.setQueryData(["books"], updatedBooks);
    setIsFetching(false);
  };

  return {
    isLoading,
    books,
    addBook,
    updateBook,
    removeBook,
    isFetching,
  };
};

export default useBook;
