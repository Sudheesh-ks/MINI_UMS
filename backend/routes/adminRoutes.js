import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { requireRole } from "../middlewares/roleMiddleware.js";
import { AdminController } from "../controllers/adminController.js";
import { AdminService } from "../services/adminService.js";
import { UserRepository } from "../repositories/userRepository.js";

const adminRouter = express.Router();
const userRepository = new UserRepository();
const adminService = new AdminService(userRepository);
const adminController = new AdminController(adminService);

adminRouter.get(
    '/dashboard',
    authMiddleware,
    requireRole('admin'),
    adminController.getDashboard.bind(adminController)
);

export default adminRouter;