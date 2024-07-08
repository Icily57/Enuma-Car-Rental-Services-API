import { Hono } from 'hono';
import * as Tickets from './customerSupportTickets.controller';
// import * as role from '../Middleware/bearAuth';

const customerSupportTicketsRouter = new Hono();

customerSupportTicketsRouter.get('/',  Tickets.getAllTickets);
customerSupportTicketsRouter.get('/:id', Tickets.getTicketById);
customerSupportTicketsRouter.post('/', Tickets.createTicket);
customerSupportTicketsRouter.put('/:id', Tickets.updateTicket);
customerSupportTicketsRouter.delete('/:id', Tickets.deleteTicket);


export default customerSupportTicketsRouter;
