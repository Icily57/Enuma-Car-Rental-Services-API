import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { TIPayment, TSPayment, PaymentsTable } from "../drizzle/schema";

export const paymentService = async (): Promise<TSPayment[] | null> => {
 
  return await db.query.PaymentsTable.findMany();
};

export const getPaymentService = async (
  id: number
): Promise<TIPayment | undefined> => {
  return await db.query.PaymentsTable.findFirst({
    where: eq(PaymentsTable.id, id),
  });
};

export const createPaymentService = async (payment: TIPayment) => {
  await db.insert(PaymentsTable).values(payment);
  return "payment created successfully";
};

export const updatePaymentService = async (id: number, payment: TIPayment) => {
  await db.update(PaymentsTable).set(payment).where(eq(PaymentsTable.id, id));
  return "payment updated successfully";
};

export const deletePaymentService = async (id: number) => {
  await db.delete(PaymentsTable).where(eq(PaymentsTable.id, id));
  return "payment deleted successfully";
};

// export const getActivepaymentsService = async (): Promise<TSPayment[] | null> => {
//     return await db.query.PaymentsTable.findMany({
//         where: eq(PaymentsTable.amount, true)
//     });
// };

export const getMorePaymentInfoService = async () => {
  return await db.query.PaymentsTable.findMany({
    columns: { 
      payment_date: true, 
      payment_method: true, 
      payment_status: true 
    },
    with: {
      BookingsTable: {
        columns: { total_amount: true },
      },
    },
  });
};

//get payments by user id
export const getPaymentsByUserIdService = async (user_id:number) => {
  return await db.query.PaymentsTable.findMany({
    where: eq(PaymentsTable.user_id, user_id),
  });
};

export const UpdateCheckoutPaymentService = async (session_id:string) => {
  await db.update(PaymentsTable).set({payment_status:"paid"}).where(eq(PaymentsTable.transaction_id, session_id));
  return "payment updated successfully";
}
