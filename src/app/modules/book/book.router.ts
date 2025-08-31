import express from "express";
import validationRequest from "../../utils/vaditionRequest";
import { bookZodSchema } from "./book.validation";
import { addBook, getAllBooks, getBookById, updateBookById } from "./book.controller";

const router = express.Router();

router.post("/add", validationRequest(bookZodSchema), addBook);
router.get("/all", getAllBooks);
router.get("/:bookId", getBookById);
router.put("/:bookId", updateBookById)

const bookRouter = router;
export default bookRouter;