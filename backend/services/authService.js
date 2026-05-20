import { HttpResponse } from "../constants/responseMessage.constants.js";
import bcrypt from 'bcrypt';
import { generateToken } from "../utils/jwt.js";

export class AuthService {
    constructor(authRepository){
        this._authRepository = authRepository;
    }

    async register({username,email,password,role}){

        if(!username || !email || !password){
            throw new Error(HttpResponse.FIELDS_REQUIRED)
        }

        const existingUser = await this._authRepository.findByEmail(email);
        if(existingUser){
            throw new Error(HttpResponse.EMAIL_ALREADY_EXISTS);
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = {
            username,
            email,
            password: hashedPassword
        }

        if(role){
            userData.role = role;
        }
        
        return await this._authRepository.createUser(userData);
    }

    async login({email,password}){
        if(!email || !password){
            throw new Error(HttpResponse.FIELDS_REQUIRED);
        }

        const user = await this._authRepository.findByEmail(email);
        if(!user) throw new Error(HttpResponse.INVALID_CREDENTIALS);

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) throw new Error(HttpResponse.INCORRECT_PASSWORD);

        const token = generateToken({
            id: user._id,
            email: user.email,
            role: user.role
        });

        return {
            token,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        };
    }
}