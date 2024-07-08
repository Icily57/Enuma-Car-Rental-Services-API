import db from '../drizzle/db';
import { eq } from 'drizzle-orm';
import { paymentsTable, TInsertPayments, TSelectPayments } from '../drizzle/schema';

export const getAllPaymentsService = async () => {
    return await db.select().from(paymentsTable)
}

export const getPaymentByIdService = async (id: TSelectPayments["payment_id"]):Promise<TSelectPayments[]> => {
    return await db.select().from(paymentsTable).where(eq(paymentsTable.payment_id, id))
}

export const createPaymentService = async (payment: TInsertPayments) => {
    return await db.insert(paymentsTable).values(payment)
}

export const updatePaymentService = async (id:TInsertPayments["payment_id"], payments:TInsertPayments) => {
    await db.update(paymentsTable).set(payments).where(eq(paymentsTable, id))
    return "Payment updated successfully 🎉";
  }

export const deletePaymentService = async (id:TSelectPayments["payment_id"]) => {
    await db.delete(paymentsTable).where(eq(paymentsTable.booking_id, id))
    return "Payment deleted successfully 🎉";
  }