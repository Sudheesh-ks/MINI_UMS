import express from 'express';
import { AuthRepository } from '../repositories/authRepository.js';
import { AuthService } from '../services/authService.js';
import { AuthController } from '../controllers/authController.js';

const userRouter = express.Router();

const authRepository = new AuthRepository();
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);


userRouter.post('/register', authController.userRegister.bind(authController));
userRouter.post('/login', authController.userLogin.bind(authController));


export default userRouter;