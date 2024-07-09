import { Hono } from 'hono';
import * as Tickets from './customerSupportTickets.controller';
// import * as role from '../Middleware/bearAuth';

const customerSupportTicketsRouter = new Hono();

customerSupportTicketsRouter.get('/tickets',  Tickets.getAllTickets);
customerSupportTicketsRouter.get('/tickets/:id', Tickets.getTicketById);
customerSupportTicketsRouter.post('/tickets', Tickets.createTicket);
customerSupportTicketsRouter.put('/tickets/:id', Tickets.updateTicket);
customerSupportTicketsRouter.delete('/tickets/:id', Tickets.deleteTicket);


export default customerSupportTicketsRouter;
