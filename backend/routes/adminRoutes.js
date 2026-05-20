import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { requireRole } from "../middlewares/roleMiddleware.js";
import { AdminController } from "../controllers/adminController.js";

const adminRouter = express.Router();
const adminController = new AdminController();

adminRouter.get(
    '/dashboard',
    authMiddleware,
    requireRole('admin'),
    adminController.getDashboard.bind(adminController)
);

export default adminRouter;