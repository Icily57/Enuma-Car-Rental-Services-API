import { Hono } from 'hono';
import * as authenticationController from './Authentication.controller';
import * as roleAuth from '../Middleware/bearAuth';

export const authRouter = new Hono();

authRouter.get('/authentications', authenticationController.getAllAuthentication);
authRouter.get('/authentication/:auth_id', authenticationController.getAuthentication);
authRouter.post('/authentication', authenticationController.createAuthentication);
authRouter.put('/authentication', authenticationController.updateAuthentication);
authRouter.delete('/authentication/:auth_id', authenticationController.deleteAuthentication);

// export default authRouter;
