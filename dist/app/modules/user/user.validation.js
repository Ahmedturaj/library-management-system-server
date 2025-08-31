"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userZodSchema = void 0;
const zod_1 = require("zod");
exports.userZodSchema = zod_1.z.object({
    name: zod_1.z
        .string("Name is required")
        .min(3, { message: "Name must be at least 3 characters long" })
        .max(100, { message: "Name must not exceed 100 characters" }),
    email: zod_1.z
        .string("Email is required")
        .email("Invalid email format"),
    phone: zod_1.z
        .string("Phone number is required")
        .regex(/^[0-9]{10,11}$/, {
        message: "Phone number must be 10 to 11 digits",
    }),
    password: zod_1.z
        .string("Password is required")
        .min(6, { message: "Password must be at least 6 characters long" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character",
    }),
});
