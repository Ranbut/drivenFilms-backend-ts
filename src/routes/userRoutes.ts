import { Router } from 'express';
import schemaValidation from '../middlewares/schemaMiddleware.ts';
import User from '../schemas/User.ts';
import userController from '../controllers/userController.ts';

const userRoutes  = Router();

userRoutes.post('/sign-up', schemaValidation(User.signUp), userController.signUp);
userRoutes.post('/login', schemaValidation(User.login), userController.login);

export default userRoutes;