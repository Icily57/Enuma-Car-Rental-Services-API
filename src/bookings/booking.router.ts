import { Hono } from "hono";
import { listBooking, getBookings, createBooking, updateBooking, deleteBooking } from "./booking.controller"
import { zValidator } from "@hono/zod-validator";
import { bookingSchema } from "../validator";
import { adminRoleAuth,bothRoleAuth,userRoleAuth } from '../Middleware/bearAuth'
export const bookingRouter = new Hono();


bookingRouter.get("/booking",adminRoleAuth, listBooking);

bookingRouter.get("/booking/:id",adminRoleAuth, getBookings)

bookingRouter.post("/booking",userRoleAuth, zValidator('json', bookingSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createBooking)

bookingRouter.put("/booking/:id",adminRoleAuth,  updateBooking)

bookingRouter.delete("/booking/:id",adminRoleAuth,  deleteBooking)
// bookingRouter.get("/bookingInfo",userOrAdminRoleAuth, getMorebookingInfo)

