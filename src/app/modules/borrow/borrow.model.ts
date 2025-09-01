import mongoose, { Schema } from "mongoose";
import { IBorrow } from "./borrow.interface";

const borrowBookSchema: Schema<IBorrow & Document> = new Schema(
  {
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Borrow = mongoose.model<IBorrow & Document>("Borrow", borrowBookSchema);

export default Borrow;
