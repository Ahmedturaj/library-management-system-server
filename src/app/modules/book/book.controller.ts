import { any } from "zod";
import AppError from "../../error/appError";
import catchAsync from "../../utils/catchAsycn";
import sendResponse from "../../utils/sendResponse";
import { createBookService, getAllBooksService, getBookByIdService, updateBookByIdService } from "./book.service";
import httpStatus from "http-status";
import { IBookFilter } from "./book.interface";
export const addBook = catchAsync(async (req, res) => {
    const bookData = req.body;
    if (bookData === undefined) {
        throw new AppError(httpStatus.BAD_REQUEST, "Book data is required");
    }
    const newBook = await createBookService(bookData);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Book Added successfully",
        data: newBook,
    });
});


export const getAllBooks = catchAsync(async (req, res) => {
    const filter: IBookFilter = req.query;

    const books = await getAllBooksService(filter);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: books.length === 0 ? "No books available yet" : "Books fetched successfully",
        data: books,
    });
})

export const getBookById = catchAsync(async (req, res) => {
    const { bookId } = req.params;

    const book = await getBookByIdService(bookId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book fetched successfully",
        data: book,
    });
});

export const updateBookById = catchAsync(async (req, res) => {
    const { bookId } = req.params;
    const bookData = req.body;

    const updatedBook = await updateBookByIdService(bookId, bookData);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book updated successfully",
        data: updatedBook,
    });
});
