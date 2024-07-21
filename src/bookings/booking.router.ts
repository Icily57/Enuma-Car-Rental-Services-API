import { Hono } from "hono";
import { listBooking, getBookings, createBooking, updateBooking, deleteBooking, getAllBookingsByUserId,  } from "./booking.controller"
import { zValidator } from "@hono/zod-validator";
import { bookingSchema } from "../validator";
// import { adminRoleAuth, bothRoleAuth, userRoleAuth } from '../Middleware/bearAuth';

export const bookingRouter = new Hono();

bookingRouter.get("/booking", listBooking);
bookingRouter.get("/bookings-by-user/:user_id", getAllBookingsByUserId);
bookingRouter.get("/booking/:id", getBookings);

bookingRouter.post("/booking", zValidator('json', bookingSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), createBooking);

bookingRouter.put("/booking/:id", updateBooking);
bookingRouter.delete("/booking/:id", deleteBooking);

const bookings: any[] = [];

bookingRouter.get('/api/bookings', (c) => {
  c.header('Content-Type', 'application/json');
  return c.json(bookings);
});




