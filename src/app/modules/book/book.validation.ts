import { z } from "zod";

export const bookZodSchema = z.object({
  title: z
    .string("Title is required")
    .min(1, { message: "Title cannot be empty" })
    .max(200, { message: "Title cannot exceed 200 characters" }),
  
  author: z
    .string("Author is required")
    .min(1, { message: "Author cannot be empty" })
    .max(100, { message: "Author cannot exceed 100 characters" }),
  
  genre: z
    .string("Genre is required")
    .min(1, { message: "Genre cannot be empty" }),
  
  isbn: z
    .string("ISBN is required")
    .regex(/^[0-9\-]+$/, { message: "ISBN must be valid" }), 
  
  description: z
    .string("Description is required")
    .min(1, { message: "Description cannot be empty" }),
  
  copies: z
    .number("Copies are required")
    .int({ message: "Copies must be an integer" })
    .nonnegative({ message: "Copies cannot be negative" }),
  
  available: z
    .boolean("Availability is required")
    .optional() 
});
