import { Context } from 'hono';
import { createVehicleSpecificationService, deleteVehicleSpecificationService, getAllVehicleSpecificationsService, getVehicleSpecificationByIdService, updateVehicleSpecificationService } from './VehicleSpecifications.service';

export const getAllVehicleSpecifications = async (c: Context) => {
    try {
        const vehicleSpecifications = await getAllVehicleSpecificationsService();
        if (vehicleSpecifications == null) return c.text('No vehicle specifications found', 404);
        return c.json(vehicleSpecifications, 200);
    } catch (error: any) {
        return c.text(error?.message, 500);
    }
}

export const createVehicleSpecification = async (c: Context) => {
    try {
        const vehicleSpecification = await c.req.json();
        const createVehicleSpecification = await createVehicleSpecificationService(vehicleSpecification);
        if (!createVehicleSpecification) {
            return c.json({ message: 'Vehicle specification not created' });
        }
        return c.json({ msg: createVehicleSpecification });
    } catch (error: any) {
        return c.text(error?.message, 500);
    }
}

export const getVehicleSpecificationById = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text('Invalid ID 😒', 400);
        const vehicleSpecification = await getVehicleSpecificationByIdService(id);
        if (vehicleSpecification == undefined) return c.text('Vehicle specification not found 😒', 404);
        return c.json(vehicleSpecification, 200);
    } catch (error: any) {
        return c.text(error?.message, 500);
    }
}

export const updateVehicleSpecification = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        const vehicleSpecification = await c.req.json();
        if (isNaN(id)) return c.text('Invalid ID 😒', 400);
        const existingVehicleSpecification = await getVehicleSpecificationByIdService(id);
        if (existingVehicleSpecification == undefined) return c.text('Vehicle specification not found 😒', 404);
        let updateVehicleSpecification = await updateVehicleSpecificationService(id, vehicleSpecification);
        if (!updateVehicleSpecification) {
            return c.json({ message: 'Vehicle specification not updated' });
        }
        return c.json({ msg: updateVehicleSpecification });
    } catch (error: any) {
        return c.text(error?.message, 500);
    }
}

export const deleteVehicleSpecification = async (c: Context) => {
    try {
        const id = Number(c.req.param("id"));
        if (isNaN(id)) return c.text('Invalid ID 😒', 400);
        const existingVehicleSpecification = await getVehicleSpecificationByIdService(id);
        if (existingVehicleSpecification == undefined) return c.text('Vehicle specification not found 😒', 404);
        let deleteVehicleSpecification = await deleteVehicleSpecificationService(id);
        if (!deleteVehicleSpecification) {
            return c.json({ message: 'Vehicle specification not deleted' });
        }
        return c.json({ msg: deleteVehicleSpecification });
    } catch (error: any) {
        return c.text(error?.message, 500);
    }
}
