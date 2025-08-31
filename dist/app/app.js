"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notFoundError_1 = __importDefault(require("./error/notFoundError"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const router_1 = __importDefault(require("../router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: '*', credentials: true }));
app.use(express_1.default.json());
app.use("/api/v1", router_1.default);
app.get("/", (req, res) => {
    res.send("Welcome To note app.");
});
app.use(notFoundError_1.default);
// Global error handler
app.use(globalErrorHandler_1.default);
exports.default = app;
