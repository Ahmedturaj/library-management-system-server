"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, jsonData) => {
    const responseBody = {
        success: jsonData.success,
        message: jsonData.message,
        data: jsonData.data,
    };
    res.status(jsonData.statusCode).json(responseBody);
};
exports.default = sendResponse;
