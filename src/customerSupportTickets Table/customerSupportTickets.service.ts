import db from '../drizzle/db';
import { eq } from 'drizzle-orm';
import { TSelectCustomerSupportTickets, customerSupportTicketsTable } from '../drizzle/schema';


export const getAllTicketsService = async () => {
  return await db.select().from(customerSupportTicketsTable)
}

export const getTicketsByIdService = async (id: TSelectCustomerSupportTickets["ticket_id"]):Promise<TSelectCustomerSupportTickets[]> => {
  return await db.select().from(customerSupportTicketsTable).where(eq(customerSupportTicketsTable.ticket_id, id))

}

export const createTicketService = async (data: TSelectCustomerSupportTickets) => {
  await db.insert(customerSupportTicketsTable).values(data)
  return "Ticket created successfully🎇";
}

export const updateTicketService = async (id: TSelectCustomerSupportTickets["ticket_id"], data: TSelectCustomerSupportTickets) => {
  await db.update(customerSupportTicketsTable).set(data).where(eq(customerSupportTicketsTable.ticket_id, id))
  return "Ticket updated successfully🎇";
}

export const deleteTicketService = async (id: TSelectCustomerSupportTickets["ticket_id"]) => {
  await db.delete(customerSupportTicketsTable).where(eq(customerSupportTicketsTable.ticket_id, id))
  return "Ticket deleted successfully🎇";
}