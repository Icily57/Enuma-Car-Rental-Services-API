import { pgTable, serial, integer, timestamp, numeric, text } from 'drizzle-orm/pg-core';
import  db  from '../drizzle/db'
import {eq} from 'drizzle-orm'
import { TInsertBookings, TSelectBookings, bookingsTable } from '../drizzle/schema';

//Get all bookings
export const getAllBookingsService = async (): Promise<TSelectBookings[] | null> => {
  return await db.select().from(bookingsTable)
}

//Get booking by id
export const getBookingsByIdService = async (id:TSelectBookings["booking_id"]):Promise<TSelectBookings[]> => {
  return await db.select().from(bookingsTable).where(eq(bookingsTable.booking_id, id));
}

//Create booking
export const createBookingsService = async (address:TInsertBookings) => {
  await db.insert(bookingsTable).values(address)
  return "Booking made successfully 🎉";
}

//Update booking
export const updateBookingsService = async (id:TSelectBookings["booking_id"], address:TInsertBookings) => {
  await db.update(bookingsTable).set(address).where(eq(bookingsTable.booking_id, id))
  return "Booking updated successfully 🎉";
}

//Delete booking
export const deleteBookingsService = async (id:TSelectBookings["booking_id"]) => {
  await db.delete(bookingsTable).where(eq(bookingsTable.booking_id, id))
  return "Booking deleted successfully 🎉";
}