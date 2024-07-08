import { integer, serial, text, varchar, timestamp, numeric, pgEnum, pgTable, foreignKey } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Enums
export const roleEnum = pgEnum('role', ['user', 'admin']);

// Users Table
export const usersTable = pgTable('users', {
  user_id: serial('user_id').primaryKey(),
  full_name: text('full_name'),
  email: varchar('email', { length: 100 }).unique(),
  contact_phone: varchar('contact_phone', { length: 15 }),
  address: varchar('address', { length: 100 }),
  role: roleEnum('role').default('user'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

// AuthOnUsers Table
export const authOnUsersTable = pgTable('auth_on_users', {
  id: serial('id').primaryKey(),
  user_id: integer('user_id').notNull().references(() => usersTable.user_id, { onDelete: 'cascade' }),
  password: varchar('password', { length: 100 }).notNull(),
  username: varchar('username', { length: 100 }).notNull(),
  role: roleEnum('role').default('user'),
});

// export const authOnUsersRelations = relations(authOnUsersTable, ({ one }) => ({
//   user: one(usersTable, {
//     fields: [authOnUsersTable.user_id],
//     references: [usersTable.user_id],
//   }),
// }));

// Vehicles Table
export const vehiclesTable = pgTable('vehicles', {
  vehicleSpec_id: serial('vehicleSpec_id').primaryKey(),
  vehicle_id: serial('vehicle_id').notNull().references(() => vehicleSpecificationsTable.vehicle_id),
  rental_rate: numeric('rental_rate'),
  availability: text('availability'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

// Vehicle Specifications Table
export const vehicleSpecificationsTable = pgTable('vehicle_specifications', {
  vehicle_id: serial('vehicle_id').primaryKey(),
  manufacturer: text('manufacturer'),
  model: text('model'),
  year: text('year'),
  fuel_type: text('fuel_type'),
  engine_capacity: text('engine_capacity'),
  transmission: text('transmission'),
  seating_capacity: text('seating_capacity'),
  color: text('color'),
  features: text('features'),
});

// Bookings Table
export const bookingsTable = pgTable('bookings', {
  booking_id: serial('booking_id').primaryKey(),
  user_id: serial('user_id').notNull().references(() => usersTable.user_id),
  vehicle_id: serial('vehicle_id').notNull().references(() => vehicleSpecificationsTable.vehicle_id),
  location_id: serial('location_id').notNull().references(() => locationAndBranchesTable.location_id),
  booking_date: timestamp('booking_date'),
  return_date: timestamp('return_date'),
  total_amount: numeric('total_amount'),
  booking_status: text('booking_status').default('Pending'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

// Payments Table
export const paymentsTable = pgTable('payments', {
  payment_id: serial('payment_id').primaryKey(),
  booking_id: serial('booking_id').notNull().references(() => bookingsTable.booking_id),
  amount: numeric('amount'),
  payment_status: text('payment_status').default('Pending'),
  payment_date: timestamp('payment_date'),
  payment_method: text('payment_method'),
  transaction_id: text('transaction_id'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

// Authentication Table
export const authenticationTable = pgTable('authentication', {
  auth_id: serial('auth_id').primaryKey(),
  user_id: serial('user_id').notNull().references(() => usersTable.user_id),
  password: text('password'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

// Customer Support Tickets Table
export const customerSupportTicketsTable = pgTable('customer_support_tickets', {
  ticket_id: serial('ticket_id').primaryKey(),
  user_id: serial('user_id').notNull().references(() => usersTable.user_id),
  subject: text('subject'),
  description: text('description'),
  status: text('status'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

// Location and Branches Table
export const locationAndBranchesTable = pgTable('location_and_branches', {
  location_id: serial('location_id').primaryKey(),
  name: text('name'),
  address: text('address'),
  contact_phone: varchar('contact_phone', { length: 15 }),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

// Fleet Management Table
export const fleetManagementTable = pgTable('fleet_management', {
  fleet_id: serial('fleet_id').primaryKey(),
  vehicle_id: serial('vehicle_id').notNull().references(() => vehicleSpecificationsTable.vehicle_id),
  acquisition_date: timestamp('acquisition_date'),
  depreciation_rate: numeric('depreciation_rate'),
  current_value: numeric('current_value'),
  maintenance_cost: numeric('maintenance_cost'),
  status: text('status'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

// Relationships
export const usersRelations = relations(usersTable, ({ many }) => ({
  bookings: many(bookingsTable),
  payments: many(paymentsTable),
  authentication: many(authenticationTable),
  customerSupportTickets: many(customerSupportTicketsTable),
  authOnUsers: many(authOnUsersTable),
}));

export const vehiclesRelations = relations(vehiclesTable, ({ one }) => ({
  vehicleSpecification: one(vehicleSpecificationsTable, {
    fields: [vehiclesTable.vehicle_id],
    references: [vehicleSpecificationsTable.vehicle_id],
  }),
}));

export const bookingsRelations = relations(bookingsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [bookingsTable.user_id],
    references: [usersTable.user_id],
  }),
  vehicle: one(vehicleSpecificationsTable, {
    fields: [bookingsTable.vehicle_id],
    references: [vehicleSpecificationsTable.vehicle_id],
  }),
  location: one(locationAndBranchesTable, {
    fields: [bookingsTable.location_id],
    references: [locationAndBranchesTable.location_id],
  }),
}));

export const paymentsRelations = relations(paymentsTable, ({ one }) => ({
  booking: one(bookingsTable, {
    fields: [paymentsTable.booking_id],
    references: [bookingsTable.booking_id],
  }),
}));

export const authenticationRelations = relations(authenticationTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [authenticationTable.user_id],
    references: [usersTable.user_id],
  }),
}));

export const customerSupportTicketsRelations = relations(customerSupportTicketsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [customerSupportTicketsTable.user_id],
    references: [usersTable.user_id],
  }),
}));

export const fleetManagementRelations = relations(fleetManagementTable, ({ one }) => ({
  vehicle: one(vehicleSpecificationsTable, {
    fields: [fleetManagementTable.vehicle_id],
    references: [vehicleSpecificationsTable.vehicle_id],
  }),
}));

export const authOnUsersRelations = relations(authOnUsersTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [authOnUsersTable.user_id],
    references: [usersTable.user_id],
  }),
}));

// Export inferred types for each table
export type TInsertUsers = typeof usersTable.$inferInsert;
export type TSelectUsers = typeof usersTable.$inferSelect;

export type TInsertVehicles = typeof vehiclesTable.$inferInsert;
export type TSelectVehicles = typeof vehiclesTable.$inferSelect;

export type TInsertVehicleSpecifications = typeof vehicleSpecificationsTable.$inferInsert;
export type TSelectVehicleSpecifications = typeof vehicleSpecificationsTable.$inferSelect;

export type TInsertBookings = typeof bookingsTable.$inferInsert;
export type TSelectBookings = typeof bookingsTable.$inferSelect;

export type TInsertPayments = typeof paymentsTable.$inferInsert;
export type TSelectPayments = typeof paymentsTable.$inferSelect;

export type TInsertAuthentication = typeof authenticationTable.$inferInsert;
export type TSelectAuthentication = typeof authenticationTable.$inferSelect;

export type TInsertCustomerSupportTickets = typeof customerSupportTicketsTable.$inferInsert;
export type TSelectCustomerSupportTickets = typeof customerSupportTicketsTable.$inferSelect;

export type TInsertLocationAndBranches = typeof locationAndBranchesTable.$inferInsert;
export type TSelectLocationAndBranches = typeof locationAndBranchesTable.$inferSelect;

export type TInsertFleetManagement = typeof fleetManagementTable.$inferInsert;
export type TSelectFleetManagement = typeof fleetManagementTable.$inferSelect;

export type TInsertAuthOnUsers = typeof authOnUsersTable.$inferInsert;
export type TSelectAuthOnUsers = typeof authOnUsersTable.$inferSelect;
