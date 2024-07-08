import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';
import db from '../drizzle/db';
import { TSelectAuthentication, authenticationTable } from '../drizzle/schema';
import { eq } from 'drizzle-orm';

// Define the Authentication interface
interface Authentication {
  auth_id: number;
  user_id: number;
  password: string;
}

// Service to get all authentication records
export const getAllAuthenticationService = async (): Promise<TSelectAuthentication[] | null> => {
  return await db.select().from(authenticationTable);
}

// Service to get a specific authentication record by user_id
export const getAuthenticationService = async (user_id: number): Promise<TSelectAuthentication | null> => {
  const results = await db.select().from(authenticationTable).where(eq(authenticationTable.user_id, user_id));
  return results.length > 0 ? results[0] : null;
}

// Service to create a new authentication record
export const createAuthenticationService = async (authentication: Authentication): Promise<TSelectAuthentication | null> => {
  const results = await db.insert(authenticationTable).values(authentication).returning();
  return results.length > 0 ? results[0] : null;
}

// Service to update an existing authentication record
export const updateAuthenticationService = async (authentication: Authentication): Promise<TSelectAuthentication | null> => {
  const results = await db.update(authenticationTable).set(authentication).where(eq(authenticationTable.auth_id, authentication.auth_id)).returning();
  return results.length > 0 ? results[0] : null;
}

// Service to delete an existing authentication record
export const deleteAuthenticationService = async (auth_id: number): Promise<TSelectAuthentication | null> => {
  const results = await db.delete(authenticationTable).where(eq(authenticationTable.auth_id, auth_id)).returning();
  return results.length > 0 ? results[0] : null;
}

