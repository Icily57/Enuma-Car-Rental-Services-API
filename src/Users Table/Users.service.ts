// import { pgTable, serial, text, varchar, timestamp, pgEnum } from 'drizzle-orm/pg-core';
// import  db  from '../drizzle/db';
// import { SQL, Placeholder } from 'drizzle-orm';
// import {eq} from 'drizzle-orm';

// const usersTable = pgTable('users', {
//   user_id: serial('user_id').primaryKey(),
//   full_name: text('full_name'),
//   email: varchar('email', { length: 100 }).unique(),
//   contact_phone: varchar('contact_phone', { length: 15 }),
//   address: varchar('address', { length: 100 }),
//   role: pgEnum('role', ['user', 'admin'])('role').default('user'),
//   created_at: timestamp('created_at').defaultNow(),
//   updated_at: timestamp('updated_at').defaultNow(),
// });

// export const createUser = async (userData: { user_id?: number | SQL<unknown> | Placeholder<string, any> | undefined; full_name?: string | SQL<unknown> | Placeholder<string, any> | null | undefined; email?: string | SQL<unknown> | Placeholder<string, any> | null | undefined; contact_phone?: string | SQL<unknown> | Placeholder<string, any> | null | undefined; address?: string | SQL<unknown> | Placeholder<string, any> | null | undefined; role?: "user" | "admin" | SQL<unknown> | Placeholder<string, any> | null | undefined; created_at?: SQL<unknown> | Date | Placeholder<string, any> | null | undefined; updated_at?: SQL<unknown> | Date | Placeholder<string, any> | null | undefined; }) => {
//   return await db.insert(usersTable).values(userData).returning();
// };

// // export const getUserById = async (userId: string) => {
// //   return await db.select().from(usersTable).where(usersTable.user_id.eq(userId));
// // };

// // Add other service functions as needed (updateUser, deleteUser, etc.)
