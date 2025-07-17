import { queryOptions } from "@tanstack/react-query";
import { getAllBooks, getBookById } from "../services/book";

export const book = {
  default: () => ["books"] as const,
  books: () =>
    queryOptions({
      queryKey: [...book.default()],
      queryFn: () => getAllBooks(),
      staleTime: Infinity,
    }),
  bookById: (id: number) =>
    queryOptions({
      queryKey: [...book.default(), id],
      queryFn: () => getBookById(id),
      staleTime: Infinity,
      enabled: !!id,
    })
};
