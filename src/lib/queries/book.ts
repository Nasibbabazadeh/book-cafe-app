import { queryOptions } from "@tanstack/react-query";

export const book = {
  default: () => ["book"] as const,
  books: () =>
    queryOptions({
      queryKey: [],
    }),
};
