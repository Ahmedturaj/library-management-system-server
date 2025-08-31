// src/modules/user/user.service.ts

import { IUser } from "./user.interface";
import httpStatus from "http-status";
import AppError from "../../error/appError";
import User from "./user.model";

export const createNewAccountService = async (userInfo: IUser) => {
  // Check if user already exists
  const existingUser = await User.findOne({ email: userInfo.email });
  if (existingUser) {
    throw new AppError(httpStatus.CONFLICT, "User already exists");
  }

  // Save user (password hashing handled in schema pre-save middleware)
  const user = new User(userInfo);
  await user.save();

  return user;
};
