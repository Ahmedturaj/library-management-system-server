import express from "express";
import validateRequest from "../../utils/vaditionRequest";
import { userZodSchema } from "./user.validation";
import { createNewAccount } from "./user.controller";

const router = express.Router();

router.post("/signup", validateRequest(userZodSchema), createNewAccount);

const userRouter= router;
export default userRouter