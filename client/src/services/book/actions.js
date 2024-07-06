import * as api from "../../api/booksApi";

export const getAllBooks = async (payload) => {
    return await api.getAll(payload);
}