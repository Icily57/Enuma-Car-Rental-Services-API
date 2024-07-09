import { Hono } from 'hono';
import { createUser, deleteUser, getAllUsers, getMoreUsersInfo, getUserById, updateUser } from './Users.controller'
import { adminRoleAuth } from '../Middleware/bearAuth';

export const userRouter = new Hono();

userRouter.get('/users', getAllUsers);
userRouter.get('/users/:id', getUserById);
userRouter.post('/users', adminRoleAuth, createUser);
userRouter.put('/users/:id', adminRoleAuth, updateUser);
userRouter.delete('/users/:id', adminRoleAuth, deleteUser);
userRouter.get('/usersInfo', getMoreUsersInfo);
