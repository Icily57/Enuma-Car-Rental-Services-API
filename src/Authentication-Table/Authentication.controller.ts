import { Context } from 'hono';
import * as authenticationService from './Authentication.service';
import * as schema from '../drizzle/schema';

// export const registerUser = async (c: Context) => {
//   const authData = await c.req.json();
//   const newUser = await authService.registerUser(authData);
//   return c.json(newUser);
// };

//Get all Authentication
export const getAllAuthentication = async (c:Context) => {
  try {
      const Authentication = await authenticationService.getAllAuthenticationService();
      if(Authentication == null) return c.text('No Authentication found', 404)
      return c.json(Authentication, 200)
  } catch (error:any) {
      return c.text(error?.message, 500)
  }
}

//Get a specific Authentication
export const getAuthentication = async (c:Context) => {
  try {
      const auth_id = parseInt(c.req.param("auth_id"));
      const Authentication = await authenticationService.getAuthenticationService(auth_id);
      if(Authentication == null) return c.text('No Authentication found', 404)
      return c.json(Authentication, 200)
  } catch (error:any) {
      return c.text(error?.message, 500)
  }
}

//Create a new Authentication
export const createAuthentication = async (c:Context) => {
  try {
      const Authentication = await c.req.json();
      const newAuthentication = await authenticationService.createAuthenticationService(Authentication);
      return c.json(newAuthentication, 201)
  } catch (error:any) {
      return c.text(error?.message, 500)
  }
}

//Update an existing Authentication
export const updateAuthentication = async (c:Context) => {
  try {
      const Authentication = await c.req.json();
      const updatedAuthentication = await authenticationService.updateAuthenticationService(Authentication);
      return c.json(updatedAuthentication, 200)
  } catch (error:any) {
      return c.text(error?.message, 500)
  }
}

//Delete an existing Authentication
export const deleteAuthentication = async (c:Context) => {
  try {
      const auth_id = parseInt(c.req.param("auth_id"));
      const deletedAuthentication = await authenticationService.deleteAuthenticationService(auth_id);
      return c.json(deletedAuthentication, 200)
  } catch (error:any) {
      return c.text(error?.message, 500)
  }
}


