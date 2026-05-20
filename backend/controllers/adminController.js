import { HttpStatus } from "../constants/status.constants.js";

export class AdminController {
    constructor(adminService) {
        this._adminService = adminService;
    }
    async getDashboard(req, res) {
        try {
            const users = await this._adminService.getAllUsers();
            return res.status(HttpStatus.OK).json({ success: true, data: users });
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: "An error occurred while fetching dashboard data." });
        }
    }
}
