import { Context } from 'hono';
import { createVehicleService, deleteVehicleService, getAllVehiclesService, getVehicleByIdService, updateVehicleService } from './Vehicles.service';

export const getAllVehicles = async (c: Context) => {
    try {
        const vehicles = await getAllVehiclesService();
        if (vehicles == null) return c.text('No vehicles found', 404);
        return c.json(vehicles, 200);
    } catch (error: any) {
        return c.text(error?.message, 500);
    }
}

export const createVehicle = async (c: Context) => {
    try {
        const vehicle = await c.req.json();
        const createVehicle = await createVehicleService(vehicle);
        if (!createVehicle) {
            return c.json({ message: 'Vehicle not created' });
        }
        return c.json({ msg: createVehicle });
    } catch (error: any) {
        return c.text(error?.message, 500);
    }
}

export const getVehicleById = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text('Invalid ID 😒', 400);
        const vehicle = await getVehicleByIdService(id);
        if (vehicle == undefined) return c.text('Vehicle not found 😒', 404);
        return c.json(vehicle, 200);
    } catch (error: any) {
        return c.text(error?.message, 500);
    }
}

export const updateVehicle = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const vehicle = await c.req.json();
        if (isNaN(id)) return c.text('Invalid ID 😒', 400);
        const existingVehicle = await getVehicleByIdService(id);
        if (existingVehicle == undefined) return c.text('Vehicle not found 😒', 404);
        let updateVehicle = await updateVehicleService(id, vehicle);
        if (!updateVehicle) {
            return c.json({ message: 'Vehicle not updated' });
        }
        return c.json({ msg: updateVehicle });
    } catch (error: any) {
        return c.text(error?.message, 500);
    }
}

export const deleteVehicle = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        if (isNaN(id)) return c.text('Invalid ID 😒', 400);
        const existingVehicle = await getVehicleByIdService(id);
        if (existingVehicle == undefined) return c.text('Vehicle not found 😒', 404);
        let deleteVehicle = await deleteVehicleService(id);
        if (!deleteVehicle) {
            return c.json({ message: 'Vehicle not deleted' });
        }
        return c.json({ msg: deleteVehicle });
    } catch (error: any) {
        return c.text(error?.message, 500);
    }
}
