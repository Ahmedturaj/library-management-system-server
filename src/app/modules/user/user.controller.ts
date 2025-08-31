// src/modules/user/user.controller.ts
import { Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { createNewAccountService } from "./user.service";
import { IUser } from "./user.interface";
import catchAsync from "../../utils/catchAsycn";

export const createNewAccount = catchAsync(
  async (req: Request, res: Response) => {
    const userInfo: IUser = req.body;

    const user = await createNewAccountService(userInfo);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "User created successfully",
      data: user,
    });
  }
);
