import express from "express";
import validationRequest from "../../utils/vaditionRequest";
import { bookZodSchema } from "./book.validation";
import { addBook } from "./book.controller";

const router = express.Router();

router.post("/add", validationRequest(bookZodSchema), addBook);

const bookRouter = router;
export default bookRouter;