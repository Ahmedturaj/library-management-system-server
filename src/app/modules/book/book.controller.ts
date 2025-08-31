import AppError from "../../error/appError";
import catchAsync from "../../utils/catchAsycn";
import sendResponse from "../../utils/sendResponse";
import { createBookService, getAllBooksService } from "./book.service";
import httpStatus from "http-status";
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
    const books = await getAllBooksService();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: books.length === 0 ? "No books available yet" : "Books fetched successfully",
        data: books,
    });
})