import express from "express";
import validationRequest from "../../utils/vaditionRequest";
import borrowZodValidation from "./borrow.zodvalidation";
import { borrowBook, borrowedBooksSummary } from "./borrow.controller";

const router = express.Router();

router.post("/create",validationRequest(borrowZodValidation), borrowBook);
router.get("/", borrowedBooksSummary);

const borrowRouter = router;
export default borrowRouter;