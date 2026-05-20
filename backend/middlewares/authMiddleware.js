import jwt from 'jsonwebtoken';
import { HttpStatus } from '../constants/status.constants.js';
import { HttpResponse } from '../constants/responseMessage.constants.js';
import { verifyToken } from '../utils/jwt.js';

export const authMiddleware = (req,res,next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if(!token){
            return res.status(HttpStatus.FORBIDDEN).json(HttpResponse.INVALID_TOKEN);
        }

        const decoded = verifyToken(token);

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(HttpStatus.FORBIDDEN).json(HttpResponse.INVALID_TOKEN)
    }
}