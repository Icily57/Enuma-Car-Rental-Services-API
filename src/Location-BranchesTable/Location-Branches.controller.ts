import {Context} from 'hono';
import { createLocationBranchService, deleteLocationBranchService, getAllLocationBranchesService, getLocationBranchByIdService, updateLocationBranchService } from './Location-Branches.service';

export const getAllBranches = async (c: Context) => {
    try{
      const Branches = await getAllLocationBranchesService();
      if(Branches == null) return c.text('No Branches found', 404);
      return c.json(Branches, 200);
    }catch(error:any){
      return c.text(error?.message, 500);
    }
  }

export const getBranchById = async (c: Context) => {
    try{
      const id = parseInt(c.req.param("id"))
      const Branches = await getLocationBranchByIdService(id);
      if(Branches == null) return c.text('No Branches found', 404);
      return c.json(Branches, 200);
    }catch(error:any){
      return c.text(error?.message, 500);
    }
  }

export const createBranch = async (c: Context) => {
    try{
      let Branches = await c.req.json();
      const createBranches = await createLocationBranchService(Branches);
      if(createBranches == null) return c.text('No Branches found', 404);
      return c.json(Branches, 200);
    }catch(error:any){
      return c.text(error?.message, 500);
    }
  }

export const updateBranch = async (c: Context) => {
    try{
        let Branches = await c.req.json();
      const createBranch = await updateLocationBranchService(Branches.location_id, Branches);
      if(createBranch  == null) return c.text('No Branches found', 404);
      return c.json(Branches, 200);
    }catch(error:any){
      return c.text(error?.message, 500);
    }
  }

export const deleteBranch = async (c: Context) => {
 try{
  const Branches = await deleteLocationBranchService(parseInt(c.req.param("id")));
  if(Branches == null) return c.text('No Branches found', 404);
  return c.json(Branches, 200);      
 }
  catch(error:any){
    return c.text(error?.message, 500);
  }
    }