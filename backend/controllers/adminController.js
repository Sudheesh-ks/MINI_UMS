import { HttpStatus } from "../constants/status.constants.js";

export class AdminController {
    getDashboard(req, res) {
        return res.status(HttpStatus.OK).json({
            success: true,
            message: 'Admin dashboard access granted',
            data: {
                user: req.user,
            },
        });
    }
}
