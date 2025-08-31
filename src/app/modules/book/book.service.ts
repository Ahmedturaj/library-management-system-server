import AppError from "../../error/appError";
import { IBook, IBookFilter } from "./book.interface";
import Book from "./book.model";
import httpStatus from "http-status";


export const createBookService = async (bookData: IBook) => {
    try {
        if (!bookData.title || !bookData.author || !bookData.genre || !bookData.isbn || !bookData.description || bookData.copies === undefined) {
            throw new AppError(httpStatus.BAD_REQUEST, "All fields are required");
        }
        const book = new Book(bookData);
        await book.save();

        const { __v, ...data } = book.toObject();
        return data;
    } catch (error) {
        throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
};

export const getAllBooksService = async (filter: IBookFilter) => {
    try {
        const { genre, sort, limit } = filter;
        const query: any = {};
        if (genre) {
            query.genre = genre
        }
        const books = await Book.find(query)
            .sort({ createdAt: sort === "asc" ? 1 : -1 })
            .limit(Number(limit)).select("-__v");
        if (books.length === 0) {
            throw new AppError(httpStatus.NO_CONTENT, "No books added yet");
        }
        return books;
    } catch (error) {
        throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
}


export const getBookByIdService = async (bookId: string) => {
    try {
        const book = await Book.findById(bookId).select("-__v");
        if (!book) {
            throw new AppError(httpStatus.NOT_FOUND, "Book not found");
        }
        return book;
    } catch (error) {
        throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
};


export const updateBookByIdService = async (bookId: string, bookData: Partial<IBook>) => {
    try {
        const book = await Book.findByIdAndUpdate(bookId, bookData, { new: true }).select("-__v");
        if (!book) {
            throw new AppError(httpStatus.NOT_FOUND, "Book not found");
        }
        return book;
    } catch (error) {
        throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
};

export const deleteByIdService = async (bookId: string) => {
    try {
        const book = await Book.findByIdAndDelete(bookId).select("-__v");
        if (!book) {
            throw new AppError(httpStatus.NOT_FOUND, "Book not found");
        }
        return book;
    } catch (error) {
        throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
};
