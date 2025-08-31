import express from "express";
import validationRequest from "../../utils/vaditionRequest";
import { bookZodSchema } from "./book.validation";
import { addBook, getAllBooks } from "./book.controller";

const router = express.Router();

router.post("/add", validationRequest(bookZodSchema), addBook);
router.get("/all", getAllBooks);

const bookRouter = router;
export default bookRouter;