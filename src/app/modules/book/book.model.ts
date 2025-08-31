import mongoose, { Schema, Document, model } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema: Schema<IBook & Document> = new Schema({
  title: { type: String, required: [true, "Title is required"] },
  author: { type: String, required: [true, "Author is required"] },
  genre: { type: String, required: [true, "Genre is required"] },
  isbn: { type: String, required: [true, "ISBN is required"] },
  description: { type: String, required: [true, "Description is required"] },
  copies: { type: Number, required: [true, "Copies are required"] },
  available: { type: Boolean, required: [true, "Availability is required"], default: true },
}, {
  timestamps: true,
  versionKey: false,
});

const Book = mongoose.model<IBook & Document>("Book", bookSchema);

export default Book;
