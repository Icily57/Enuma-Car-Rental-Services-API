import { TInsertVehicles, TSelectVehicles, vehiclesTable } from "../drizzle/schema";
import db from "../drizzle/db";
import { eq } from "drizzle-orm";

export const getAllVehiclesService = async (): Promise<TSelectVehicles[] | null> => {
    return await db.query.vehiclesTable.findMany();
}

export const createVehicleService = async (vehicle: TInsertVehicles) => {
    await db.insert(vehiclesTable).values(vehicle);
    return "Vehicle created successfully";
}

export const getVehicleByIdService = async (id: TSelectVehicles["vehicleSpec_id"]): Promise<TSelectVehicles[]> => {
    return await db.select().from(vehiclesTable).where(eq(vehiclesTable.vehicleSpec_id, id));
}

export const updateVehicleService = async (id: number, vehicle: TInsertVehicles) => {
    await db.update(vehiclesTable).set(vehicle).where(eq(vehiclesTable.vehicleSpec_id, id));
    return "Vehicle updated successfully 🎉";
}

export const deleteVehicleService = async (id: number) => {
    await db.delete(vehiclesTable).where(eq(vehiclesTable.vehicleSpec_id, id));
    return "Vehicle deleted successfully 🎉";
}
