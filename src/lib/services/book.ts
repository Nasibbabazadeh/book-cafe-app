import axios from "axios";
import { API_ENDPOINTS } from "../constants"

export const getAllBooks = async () => {
    try {
        const response = await axios.get(API_ENDPOINTS.BOOKS)
        return response.data
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
}