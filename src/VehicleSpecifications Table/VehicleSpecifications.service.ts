import { TInsertVehicleSpecifications, TSelectVehicleSpecifications, vehicleSpecificationsTable } from "../drizzle/schema";
import db from "../drizzle/db";
import { eq } from "drizzle-orm";

export const getAllVehicleSpecificationsService = async (): Promise<TSelectVehicleSpecifications[] | null> => {
    return await db.query.vehicleSpecificationsTable.findMany();
}

export const createVehicleSpecificationService = async (vehicleSpecification: TInsertVehicleSpecifications) => {
    await db.insert(vehicleSpecificationsTable).values(vehicleSpecification);
    return "Vehicle specification created successfully";
}

export const getVehicleSpecificationByIdService = async (id: TSelectVehicleSpecifications["vehicle_id"]): Promise<TSelectVehicleSpecifications[]> => {
    return await db.select().from(vehicleSpecificationsTable).where(eq(vehicleSpecificationsTable.vehicle_id, id));
}

export const updateVehicleSpecificationService = async (id: number, vehicleSpecification: TInsertVehicleSpecifications) => {
    await db.update(vehicleSpecificationsTable).set(vehicleSpecification).where(eq(vehicleSpecificationsTable.vehicle_id, id));
    return "Vehicle specification updated successfully 🎉";
}

export const deleteVehicleSpecificationService = async (id: number) => {
    await db.delete(vehicleSpecificationsTable).where(eq(vehicleSpecificationsTable.vehicle_id, id));
    return "Vehicle specification deleted successfully 🎉";
}
