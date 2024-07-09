import { Hono } from 'hono';
import { createVehicleSpecification, deleteVehicleSpecification, getAllVehicleSpecifications, getVehicleSpecificationById, updateVehicleSpecification } from './VehicleSpecifications.controller';
import { adminRoleAuth } from '../Middleware/bearAuth';

export const vehicleSpecificationRouter = new Hono();

vehicleSpecificationRouter.get('/vehicle-specifications', getAllVehicleSpecifications);
vehicleSpecificationRouter.get('/vehicle-specifications/:id', getVehicleSpecificationById);
vehicleSpecificationRouter.post('/vehicle-specifications', adminRoleAuth, createVehicleSpecification);
vehicleSpecificationRouter.put('/vehicle-specifications/:id', adminRoleAuth, updateVehicleSpecification);
vehicleSpecificationRouter.delete('/vehicle-specifications/:id', adminRoleAuth, deleteVehicleSpecification);
