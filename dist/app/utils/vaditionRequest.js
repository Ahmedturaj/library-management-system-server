"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const appError_1 = __importDefault(require("../error/appError"));
const validationRequest = (schema) => (req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsed = yield schema.safeParseAsync(req.body);
        if (!parsed.success) {
            const { fieldErrors, formErrors } = parsed.error.flatten();
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: { formErrors, fieldErrors },
            });
        }
        req.body = parsed.data;
        return _next();
    }
    catch (err) {
        if (err instanceof zod_1.ZodError) {
            const { fieldErrors, formErrors } = err.flatten();
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: { formErrors, fieldErrors },
            });
        }
        const appErr = err instanceof appError_1.default ? err : new appError_1.default(500, 'Internal Server Error');
        return res.status(appErr.statusCode).json({
            success: false,
            message: appErr.message,
            details: appErr.details,
        });
    }
});
exports.default = validationRequest;
