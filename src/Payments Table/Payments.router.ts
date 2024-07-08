import { Hono } from 'hono';
import * as Payment from './Payments.controller';

export const PaymentsRouter = new Hono();

PaymentsRouter.get('/',  Payment.getAllPayments);
PaymentsRouter.get('/:id', Payment.getPaymentById);
PaymentsRouter.post('/', Payment.createPayment);
PaymentsRouter.put('/:id', Payment.updatePayment);
PaymentsRouter.delete('/:id', Payment.deletePayment);