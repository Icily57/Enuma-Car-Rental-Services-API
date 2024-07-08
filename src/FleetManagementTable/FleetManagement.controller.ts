import {Context} from 'hono';
import { createFleetService, getAllFleetService, getFleetByIdService } from './FleetManagement.service';

export const getAllFleets = async (c: Context) => {
    try{
      const Fleets = await getAllFleetService();
      if(Fleets == null) return c.text('No Fleets found', 404);
      return c.json(Fleets, 200);
    }catch(error:any){
      return c.text(error?.message, 500);
    }
  }

export const getFleetById = async (c: Context) => {
    try{
      const id = parseInt(c.req.param("id"))
      const Fleets = await getFleetByIdService(id);
      if(Fleets == null) return c.text('No Fleets found', 404);
      return c.json(Fleets, 200);
    }catch(error:any){
      return c.text(error?.message, 500);
    }
  }

export const createFleet = async (c: Context) => {
    try{
      let Fleets = await c.req.json();
      const createFleets = await createFleetService(Fleets);
      if(createFleets == null) return c.text('No Fleets found', 404);
      return c.json(Fleets, 200);
    }catch(error:any){
      return c.text(error?.message, 500);
    }
  }

export const updateFleet = async (c: Context) => {
    try{
      const Fleets = await getAllFleetService();
      if(Fleets == null) return c.text('No Fleets found', 404);
      return c.json(Fleets, 200);
    }catch(error:any){
      return c.text(error?.message, 500);
    }
  }

export const deleteFleet = async (c: Context) => {
    try{
      const Fleets = await getAllFleetService();
      if(Fleets == null) return c.text('No Fleets found', 404);
      return c.json(Fleets, 200);
    }catch(error:any){
      return c.text(error?.message, 500);
    }
    }