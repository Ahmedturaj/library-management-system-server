import express, { Application, Request, Response } from "express";
import cors from 'cors';
import notFoundError from "./error/notFoundError";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import router from "../router";

const app: Application = express();
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use("/api/v1", router);
app.get("/", (req:Request, res:Response)=>{
    res.send("Welcome To note app.")
})

app.use(notFoundError);

// Global error handler
app.use(globalErrorHandler);
export default app;
