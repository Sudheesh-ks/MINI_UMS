import userModel from "../models/userModel.js";

export class AuthRepository {
    constructor() { }

    async createUser(userData){
        return await userModel.create(userData);
    }

    async findByEmail(email){
        return await userModel.findOne({ email });
    }
}