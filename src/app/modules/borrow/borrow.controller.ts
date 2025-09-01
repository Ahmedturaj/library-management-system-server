import { Request, Response } from "express";
import {
  borrowBookService,
  borrowedBooksSummaryService,
} from "./borrow.service";

export const borrowBook = async (req: Request, res: Response) => {
  try {
    const { book, quantity, dueDate } = req.body;

    const borrowRecord = await borrowBookService(
      book,
      quantity,
      new Date(dueDate)
    );

    return res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: borrowRecord,
    });
  } catch (error: any) {
    const statusCode = error.message.includes("not found") ? 404 : 400;
    return res.status(statusCode).json({
      success: false,
      message: error.message,
    });
  }
};

export const borrowedBooksSummary = async (req: Request, res: Response) => {
  try {
    const summary = await borrowedBooksSummaryService();

    return res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
