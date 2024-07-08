import db from '../drizzle/db';
import { eq } from 'drizzle-orm';
import { locationAndBranchesTable, TInsertLocationAndBranches, TSelectLocationAndBranches } from '../drizzle/schema';

export const getAllLocationBranchesService = async () => {
    return await db.select().from(locationAndBranchesTable)
}

export const getLocationBranchByIdService = async (id: TSelectLocationAndBranches["location_id"]):Promise<TSelectLocationAndBranches[]> => {
    return await db.select().from(locationAndBranchesTable).where(eq(locationAndBranchesTable.location_id, id))
}

export const createLocationBranchService = async (data: TInsertLocationAndBranches) => {
    await db.insert(locationAndBranchesTable).values(data)
    return "Location Branch created successfully🎇";
}

export const updateLocationBranchService = async (id: TInsertLocationAndBranches["location_id"], data: TInsertLocationAndBranches) => {
    await db.update(locationAndBranchesTable).set(data).where(eq(locationAndBranchesTable.location_id, id as number))
    return "Location Branch updated successfully🎇";
}

export const deleteLocationBranchService = async (id: TSelectLocationAndBranches["location_id"]) => {
    await db.delete(locationAndBranchesTable).where(eq(locationAndBranchesTable.location_id, id))
    return "Location Branch deleted successfully";
}