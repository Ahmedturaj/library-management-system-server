"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookZodSchema = void 0;
const zod_1 = require("zod");
exports.bookZodSchema = zod_1.z.object({
    title: zod_1.z
        .string("Title is required")
        .min(1, { message: "Title cannot be empty" })
        .max(200, { message: "Title cannot exceed 200 characters" }),
    author: zod_1.z
        .string("Author is required")
        .min(1, { message: "Author cannot be empty" })
        .max(100, { message: "Author cannot exceed 100 characters" }),
    genre: zod_1.z
        .string("Genre is required")
        .min(1, { message: "Genre cannot be empty" }),
    isbn: zod_1.z
        .string("ISBN is required")
        .regex(/^[0-9\-]+$/, { message: "ISBN must be valid" }), // simple validation
    description: zod_1.z
        .string("Description is required")
        .min(1, { message: "Description cannot be empty" }),
    copies: zod_1.z
        .number("Copies are required")
        .int({ message: "Copies must be an integer" })
        .nonnegative({ message: "Copies cannot be negative" }),
    available: zod_1.z
        .boolean("Availability is required")
        .optional() // default true in Mongoose handles it
});
