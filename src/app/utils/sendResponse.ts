import { Response } from "express";

const sendResponse = <T>(
  res: Response,
  jsonData: {
    statusCode: number;
    success: boolean;
    message: string;
    data?: T;
  }
) => {
  const responseBody: {
    success: boolean;
    message: string;
    data?: T;
  } = {
    success: jsonData.success,
    message: jsonData.message,
    data: jsonData.data,
  };

  res.status(jsonData.statusCode).json(responseBody);
};

export default sendResponse;
