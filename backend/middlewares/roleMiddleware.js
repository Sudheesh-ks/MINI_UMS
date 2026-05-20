import { HttpResponse } from "../constants/responseMessage.constants.js";
import { HttpStatus } from "../constants/status.constants.js";

export const requireRole = (role) => {
    return (req, res, next) => {
        const userRole = req.user?.role;

        if (!userRole || userRole !== role) {
            return res.status(HttpStatus.FORBIDDEN).json({ success: false, message: HttpResponse.INVALID_ROLE });
        }

        next();
    };
};