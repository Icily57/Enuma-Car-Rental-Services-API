import {z} from 'zod';

export const createBookingValidator = z.object({
    booking_id: z.number(),
    user_id: z.number(),
    vehicle_id: z.number(),
    location_id: z.number(),
    booking_date: z.string(),
    return_date: z.string(),
    total_amount: z.number(),
    booking_status: z.string(),
});

export const updateBookingValidator = z.object({
    booking_id: z.number(),
    user_id: z.number(),
    vehicle_id: z.number(),
    location_id: z.number(),
    booking_date: z.string(),
    return_date: z.string(),
    total_amount: z.number(),
    booking_status: z.string(),
});



