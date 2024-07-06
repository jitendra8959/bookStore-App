const Book = require('../models/bookModel');

const createBook = async (bookData) => {
    const book = new Book(bookData);
    await book.save();
    return book;
};

const getBooks = async () => {
    const books = await Book.find();
    return {
        code: 200,
        body: {
            total: books.length,
            listing: books,
        }
    }
};

const getBookById = async (bookId) => {
    return await Book.findById(bookId);
};

const updateBook = async (bookId, bookData) => {
    return await Book.findByIdAndUpdate(bookId, bookData, { new: true });
};

const deleteBook = async (bookId) => {
    return await Book.findByIdAndDelete(bookId);
};

module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook,
};
