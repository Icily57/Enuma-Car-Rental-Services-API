import { Hono } from 'hono';
import { createVehicle, deleteVehicle, getAllVehicles, getVehicleById, updateVehicle } from './Vehicles.controller';
import { adminRoleAuth } from '../Middleware/bearAuth';

export const vehicleRouter = new Hono();

vehicleRouter.get('/vehicles', getAllVehicles);
vehicleRouter.get('/vehicles/:id', getVehicleById);
vehicleRouter.post('/vehicles', adminRoleAuth, createVehicle);
vehicleRouter.put('/vehicles/:id', adminRoleAuth, updateVehicle);
vehicleRouter.delete('/vehicles/:id', adminRoleAuth, deleteVehicle);
