import userModel from "../models/userModel.js";

export class UserRepository {
    constructor() { }

    async createUser(userData){
        return await userModel.create(userData);
    }

    async findByEmail(email){
        return await userModel.findOne({ email });
    }

    async getAllUsers(){
        return await userModel.find().sort({ createdAt: -1 });
    }
}