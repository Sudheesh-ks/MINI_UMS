import express from 'express';
import { UserRepository } from '../repositories/userRepository.js';
import { AuthService } from '../services/authService.js';
import { AuthController } from '../controllers/authController.js';

const userRouter = express.Router();

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);


userRouter.post('/register', authController.userRegister.bind(authController));
userRouter.post('/login', authController.userLogin.bind(authController));


export default userRouter;