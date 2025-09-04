import { Request, Response } from "express";
import {
  borrowBookService,
  borrowedBooksSummaryService,
} from "./borrow.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsycn";
import httpStatus from "http-status";



export const borrowBook = catchAsync(async (req, res) => {
  const { book, quantity, dueDate } = req.body;

  const borrowRecord = await borrowBookService(
    book,
    quantity,
    new Date(dueDate)
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Book borrowed successfully",
    data: borrowRecord,
  })
});

export const borrowedBooksSummary = catchAsync(async (req, res) => {
  const summary = await borrowedBooksSummaryService();
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Borrowed books summary retrieved successfully",
    data: summary,
  })
})
