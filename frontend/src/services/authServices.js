import userApi from "../axios/userApi"
import { USER_API } from "../constants/apiRoutes"

export const registerUserAPI = async(username, email, password) => {
    return await userApi.post(USER_API.REGISTER, { username, email, password});
}

export const loginUserAPI = async(email, password) => {
    return await userApi.post(USER_API.LOGIN, { email, password});
}