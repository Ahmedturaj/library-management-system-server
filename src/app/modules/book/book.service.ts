import AppError from "../../error/appError";
import { IBook } from "./book.interface";
import Book from "./book.model";

export const createBookService = async (bookData: IBook) => {
    try {
        if (!bookData.title || !bookData.author || !bookData.genre || !bookData.isbn || !bookData.description || bookData.copies === undefined) {
            throw new AppError(httpStatus.BAD_REQUEST, "All fields are required");
        }
        const book = new Book(bookData);
        await book.save();
        return book;
    } catch (error) {
        throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error");
    }
};


