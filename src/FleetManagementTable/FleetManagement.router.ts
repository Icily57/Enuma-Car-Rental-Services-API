import { Hono } from 'hono';
import * as Fleets from './FleetManagement.controller';

export const FleetManagementRouter = new Hono();

FleetManagementRouter.get('/',  Fleets.getAllFleets);
FleetManagementRouter.get('/:id', Fleets.getFleetById);
FleetManagementRouter.post('/', Fleets.createFleet);
FleetManagementRouter.put('/:id', Fleets.updateFleet);
FleetManagementRouter.delete('/:id', Fleets.deleteFleet);

