import { Context} from 'hono';
import { createPaymentService, deletePaymentService, getAllPaymentsService, getPaymentByIdService, updatePaymentService } from './Payments.service';

export const getAllPayments = async (c: Context) => {
    try{
   const Payments = await getAllPaymentsService();
    if(Payments == null) return c.text('No Payments found', 404);
    return c.json(Payments, 200);
    }
    catch(error:any){
        return c.text(error?.message, 500);
    }
  }

  export const getPaymentById = async (c: Context) => {
    try{
      const id = parseInt(c.req.param("id"))
      const Payments = await getPaymentByIdService(id);
      if(Payments == null) return c.text('No Payments found', 404);
      return c.json(Payments, 200);
    }catch(error:any){
      return c.text(error?.message, 500);
    }
  }

  export const createPayment = async (c: Context) => {
    try{
      let Payments = await c.req.json();
      const createPayments = await createPaymentService(Payments);
      if(createPayments == null) return c.text('No Payments found', 404);
      return c.json(Payments, 200);
    }catch(error:any){
      return c.text(error?.message, 500);
    }
  }

  export const updatePayment = async (c: Context) => {
    try{
        let Payments = await c.req.json();
      const createPayment = await updatePaymentService(Payments.payment_id, Payments);
      if(createPayment  == null) return c.text('No Payments found', 404);
      return c.json(Payments, 200);
    }catch(error:any){
      return c.text(error?.message, 500);
    }
  }

  export const deletePayment = async (c: Context) => {
    try{
      const Payments = await deletePaymentService(parseInt(c.req.param("id")));
      if(Payments == null) return c.text('No Payments found', 404);
      return c.json(Payments, 200);
    }catch(error:any){
      return c.text(error?.message, 500);
    }
    }