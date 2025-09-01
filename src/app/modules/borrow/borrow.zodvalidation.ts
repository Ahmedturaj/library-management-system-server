import z from "zod";

const borrowZodValidation = z.object({
  book: z.string("Book ID Is required"),
  quantity: z
    .number("Quantity is required")
    .min(1, "Quantity must be at least 1")
    .int("Quantity must be an integer"),
  dueDate: z.date("Due Date is required"),
});
