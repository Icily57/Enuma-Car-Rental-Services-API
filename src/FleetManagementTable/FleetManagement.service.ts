import db from '../drizzle/db';
import { eq } from 'drizzle-orm';
import { fleetManagementTable, TInsertFleetManagement, TSelectFleetManagement } from '../drizzle/schema';

export const getAllFleetService = async () => {
    return await db.select().from(fleetManagementTable)
  }

export const getFleetByIdService = async (id: TSelectFleetManagement["fleet_id"]):Promise<TSelectFleetManagement[]> => {
    return await db.select().from(fleetManagementTable).where(eq(fleetManagementTable.fleet_id, id))
}

export const createFleetService = async (data: TInsertFleetManagement) => {
    await db.insert(fleetManagementTable).values(data)
    return "Fleet created successfully🎇";
}

export const updateFleetService = async (id: TInsertFleetManagement["fleet_id"], data: TInsertFleetManagement) => {
    await db.update(fleetManagementTable).set(data).where(eq(fleetManagementTable.fleet_id, id as number))
    return "Fleet updated successfully🎇";
}

export const deleteFleetService = async (id: TSelectFleetManagement["fleet_id"]) => {
    await db.delete(fleetManagementTable).where(eq(fleetManagementTable.fleet_id, id))
    return "Fleet deleted successfully";
}