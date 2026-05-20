
export class AdminService {
    constructor(userRepository){
        this._userRepository = userRepository;
    }

    async getAllUsers(){
        const users = await this._userRepository.getAllUsers();
        return users.map(user => ({
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }));
    }
}