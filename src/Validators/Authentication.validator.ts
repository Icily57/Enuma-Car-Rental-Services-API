import { z } from 'zod';

export const createAuthenticationValidator = z.object({
    auth_id: z.number(),
    user_id: z.number(),
    password: z.string().min(4,{ message: "Must be 4 or more characters long" }),
    });

export const updateAuthenticationValidator = z.object({
   auth_id: z.number(),
    user_id: z.number(),
    password: z.string().min(4,{ message: "Must be 4 or more characters long" }),
});