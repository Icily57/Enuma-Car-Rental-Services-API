import { Context } from 'hono';
import { createBookingsService, deleteBookingsService, getAllBookingsService, getBookingsByIdService, updateBookingsService } from './Bookings.service';

export const getAllBookings = async (c: Context) => {
try {
  const Bookings = await getAllBookingsService();
  if(Bookings == null) return c.text('No Bookings found');
  return c.json(Bookings, 200);
}
catch(error:any){
  return c.text(error?.message, 500);
}
}

export const getBookingById = async (c: Context) => {
try {
  const id = parseInt(c.req.param("id"));
  const Bookings = await getBookingsByIdService(id);
  if(Bookings == null) return c.text('No Bookings found');
  return c.json(Bookings, 200);
}
catch(error:any){
  return c.text(error?.message, 500);
}
}

export const createBooking = async (c: Context) => {
try {
  let Bookings = await c.req.json();
        let createBooking = await createBookingsService(Bookings)
        if(!createBooking) {
            return c.json({message: 'Booking not created'})
        }
        return c.json({msg: createBooking})
}
catch(error:any){
  return c.text(error?.message, 500);
}
}

export const updateBooking = async (c: Context) => {
try {
  const id = Number(c.req.param("id"))
            const booking = await c.req.json();
            if(isNaN(id)) return c.text('Invalid ID 😒', 400 )
            const existingBooking = await getBookingsByIdService(id);
            if(existingBooking == undefined) return c.text('Booking not found 😒', 404)    
            let updateBooking = await updateBookingsService(id,booking)
            if(!updateBooking) {
                return c.json({message: 'Booking not updated'})
              }
              return c.json({msg: updateBooking})
      }catch (error:any) {
          return c.text("sdfdfd", 500)
      }

}

export const deleteBooking = async (c: Context) => {
  try{
    const booking_id = Number(c.req.param("id"));
    if(isNaN(booking_id)) return c.text('Invalid ID 😒', 400)
    const existingBooking = await getBookingsByIdService(booking_id);
    if(existingBooking == undefined) return c.text('Booking not found 😒', 404)
      let deleteBooking = await deleteBookingsService(booking_id)
      if(!deleteBooking) {
          return c.json({message: 'Booking not deleted'})
      }
      return c.json({msg: deleteBooking})
  }
  catch(error:any){
    return c.text(error?.message, 500);
  }
}










