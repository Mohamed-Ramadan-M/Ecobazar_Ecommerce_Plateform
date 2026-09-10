import z from "zod";

export const registerSchema = z
    .object({
        email: z.string().email("Enter a valid email address."),

        phone: z
            .string()
            .trim()
            .min(8, "Enter a valid phone number.")
            .regex(/^[+]?[\d\s()-]+$/, "Enter a valid phone number."),

        role: z.enum(["user", "merchant"], {
            message: "Please select an account type.",
        }),

        password: z
            .string()
            .min(8, "Password must be at least 8 characters."),

        confirmPassword: z.string(),

        acceptTerms: z.boolean().refine((value) => value, {
            message: "You must accept the terms and conditions.",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match.",
        path: ["confirmPassword"],
    })