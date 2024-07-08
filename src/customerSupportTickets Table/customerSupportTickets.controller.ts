import {Context} from 'hono';
import { createTicketService, getAllTicketsService, getTicketsByIdService } from './customerSupportTickets.service';


export const getAllTickets = async (c: Context) => {
  try{
    const Tickets = await getAllTicketsService();
    if(Tickets == null) return c.text('No Tickets found', 404);
    return c.json(Tickets, 200);
  }catch(error:any){
    return c.text(error?.message, 500);
  }
}

export const getTicketById = async (c: Context) => {
  try{
    const id = parseInt(c.req.param("id"))
    const Tickets = await getTicketsByIdService(id);
    if(Tickets == null) return c.text('No Tickets found', 404);
    return c.json(Tickets, 200);
  }catch(error:any){
    return c.text(error?.message, 500);
  }
}

export const createTicket = async (c: Context) => {
  try{
    let Tickets = await c.req.json();
    const createTickets = await createTicketService(Tickets);
    if(createTickets == null) return c.text('No Tickets found', 404);
    return c.json(Tickets, 200);
  }catch(error:any){
    return c.text(error?.message, 500);
  }
}

export const updateTicket = async (c: Context) => {
  try{
    const Tickets = await getAllTicketsService();
    if(Tickets == null) return c.text('No Tickets found', 404);
    return c.json(Tickets, 200);
  }catch(error:any){
    return c.text(error?.message, 500);
  }
}

export const deleteTicket = async (c: Context) => {
  try{
    const Tickets = await getAllTicketsService();
    if(Tickets == null) return c.text('No Tickets found', 404);
    return c.json(Tickets, 200);
  }catch(error:any){
    return c.text(error?.message, 500);
  }
}