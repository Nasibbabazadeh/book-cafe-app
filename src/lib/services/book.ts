import { api } from "../api";
import { API_ENDPOINTS } from "../constants"

export const getAllBooks = async () => {
    try {
        const response = await api.get(API_ENDPOINTS.BOOKS)
        return response.data
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
}


export const getBookById = async (id: number) => {
    try {
        const response = await api.get(`${API_ENDPOINTS.BOOK_DETAILS(id)}`)
        return response.data
    } catch (error) {
        console.error(`Error fetching book with ID ${id}:`, error);
        throw error;
    }
}


export const getBooksByLanguage = async () => {
    try {
        const response = await api.get(API_ENDPOINTS.SEARCH_BOOKS_BY_LANGUAGE("en"))
        return response.data
    } catch (error) {
        console.error("Error fetching books by language:", error);
        throw error;
    }
}