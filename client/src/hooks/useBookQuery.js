import { getAllBooks } from "../models/book";
import { useQuery } from "@tanstack/react-query";

const useBookQuery = (options) => {
  return useQuery(
    ["books"],
    async () => {
      const data = await getAllBooks();
      return data;
    },
    {
      staleTime: 1000 * 60 * 10,
      ...options,
    }
  );
};

export default useBookQuery;
