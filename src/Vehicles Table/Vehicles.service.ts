// import { pgTable, serial, numeric, text, timestamp } from 'drizzle-orm/pg-core';
// import  db  from '../drizzle/db';
// import { vehicleSpecificationsTable } from './vehicleSpecificationsService';

// const vehiclesTable = pgTable('vehicles', {
//   vehicleSpec_id: serial('vehicleSpec_id').primaryKey(),
//   vehicle_id: serial('vehicle_id').notNull().references(() => vehicleSpecificationsTable.vehicle_id),
//   rental_rate: numeric('rental_rate'),
//   availability: text('availability'),
//   created_at: timestamp('created_at').defaultNow(),
//   updated_at: timestamp('updated_at').defaultNow(),
// });

// export const createVehicle = async (vehicleData) => {
//   return await db.insert(vehiclesTable).values(vehicleData).returning();
// };

// export const getVehicleById = async (vehicleId) => {
//   return await db.select().from(vehiclesTable).where(vehiclesTable.vehicle_id.eq(vehicleId));
// };

// // Add other service functions as needed (updateVehicle, deleteVehicle, etc.)
