export const HEADER_NAVBAR = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Books",
        href: "/books"
    },
    {
        label: "Coffee",
        href: "/"
    },
    {
        label: "About",
        href: "/"
    }
] as const;

export const FOOTER_NAVBAR = [
    ...HEADER_NAVBAR,
    {
        label: "Membership",
        href: "/"
    }
] as const;


export const ROUTES = {
    HOME: "/",
    BOOKS: "/books",
    COFFEE: "/coffee",
    ABOUT: "/about"
} as const;



export const API_ENDPOINTS = {
    BOOKS: "/books",
    BOOK_DETAILS: (id: number) => `/books/${id}`,
    SEARCH_BOOKS: (query: string) => `/books?search=${query}`,
    SEARCH_BOOKS_BY_LANGUAGE: (language: string) => `/books?language=${language}`,
} as const;