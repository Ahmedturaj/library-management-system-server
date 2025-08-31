"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFoundError = (req, res, next) => {
    res
        .status(404)
        .json({ success: false, message: 'Not Found', path: req.path });
};
exports.default = notFoundError;
