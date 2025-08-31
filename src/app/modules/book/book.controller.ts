import AppError from "../../error/appError";
import catchAsync from "../../utils/catchAsycn";
import sendResponse from "../../utils/sendResponse";
import { createBookService } from "./book.service";

export const addBook = catchAsync(async (req, res) => {
    const bookData = req.body;
    if (bookData.copies === undefined) {
        throw new AppError(httpStatus.BAD_REQUEST, "Copies field is required");
    }
    const newBook = await createBookService(bookData);
  sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Book Added successfully",
      data: newBook,
    });
});
