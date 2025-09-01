// services/borrow.service.ts

import Book from "../book/book.model";
import Borrow from "./borrow.model";

export const borrowBookService = async (
  bookId: string,
  quantity: number,
  dueDate: Date
) => {
  const foundBook = await Book.findById(bookId);
  if (!foundBook) {
    throw new Error("Book not found");
  }
  if (foundBook.copies < quantity) {
    throw new Error("Not enough copies available");
  }

  foundBook.copies -= quantity;

  if (foundBook.copies === 0) {
    foundBook.available = false;
  }

  await foundBook.save();

  const borrowRecord = await Borrow.create({
    book: bookId,
    quantity,
    dueDate,
  });

  return borrowRecord;
};

export const borrowedBooksSummaryService = async () => {
  const summary = await Borrow.aggregate([
    {
      $group: {
        _id: "$book",
        totalQuantity: { $sum: "$quantity" },
      },
    },
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "_id",
        as: "bookDetails",
      },
    },
    { $unwind: "$bookDetails" },
    {
      $project: {
        _id: 0,
        book: {
          title: "$bookDetails.title",
          isbn: "$bookDetails.isbn",
        },
        totalQuantity: 1,
      },
    },
  ]);

  return summary;
};
