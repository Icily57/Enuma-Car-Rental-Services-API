import { Hono } from 'hono';
import * as bookingsController from './Bookings.controller';
import * as role from '../Middleware/bearAuth';

const bookingsRouter = new Hono();

bookingsRouter.get('/bookings', bookingsController.getAllBookings);
bookingsRouter.get('/bookings/:id', bookingsController.getBookingById);
bookingsRouter.post('/bookings', bookingsController.createBooking);
bookingsRouter.put('/bookings/:id', bookingsController.updateBooking);
bookingsRouter.delete('/bookings/:id', bookingsController.deleteBooking);

export default bookingsRouter;
