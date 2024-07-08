// import { Context } from 'hono';
// import * as vehicleService from './Vehicles.service';

// export const createVehicle = async (c: Context) => {
//   const vehicleData = await c.req.json();
//   const newVehicle = await vehicleService.createVehicle(vehicleData);
//   return c.json(newVehicle);
// };

// export const getVehicleById = async (c: Context) => {
//   const vehicleId = c.req.param('id');
//   const vehicle = await vehicleService.getVehicleById(vehicleId);
//   return c.json(vehicle);
// };

// // Add other controller functions as needed (updateVehicle, deleteVehicle, etc.)
