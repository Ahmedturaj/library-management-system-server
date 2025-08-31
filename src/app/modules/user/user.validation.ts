import { z } from "zod";

export const userZodSchema = z.object({
    name: z
        .string("Name is required",
        )
        .min(3, { message: "Name must be at least 3 characters long" })
        .max(100, { message: "Name must not exceed 100 characters" }),

    email: z
        .string("Email is required")
        .email("Invalid email format"),

    phone: z
        .string("Phone number is required" )
        .regex(/^[0-9]{10,11}$/, {
            message: "Phone number must be 10 to 11 digits",
        }),

    password: z
        .string( "Password is required")
        .min(6, { message: "Password must be at least 6 characters long" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[^A-Za-z0-9]/, {
            message: "Password must contain at least one special character",
        }),
});
