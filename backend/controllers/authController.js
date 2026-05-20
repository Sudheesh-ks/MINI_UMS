import { HttpResponse } from "../constants/responseMessage.constants.js";
import { HttpStatus } from "../constants/status.constants.js";

export class AuthController {
    constructor(authService){
        this._authService = authService;
    };

    async userRegister(req,res){
        try {
            const {username,email,password,role} = req.body;

            const user = await this._authService.register({username,email,password,role});
            return res.status(HttpStatus.CREATED).json({ success: true, message: HttpResponse.REGISTRATION_SUCCESSFUL, data: user });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: HttpResponse.BAD_REQUEST });
        }
    }

    async userLogin(req,res){
        try {
            const {email,password} = req.body;

            const user = await this._authService.login({email,password});
            return res.status(HttpStatus.OK).json({ success: true, message: HttpResponse.LOGIN_SUCCESSFUL, data: user})
        } catch (error) {
            console.log(error.message)
            return res.status(HttpStatus.BAD_REQUEST).json({ success: false, message: HttpResponse.BAD_REQUEST });
        }
    }
}