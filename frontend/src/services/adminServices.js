import adminApi from "../axios/adminApi"
import { ADMIN_API } from "../constants/apiRoutes"

export const getAllUsers = async() => {
    return await adminApi.get(ADMIN_API.DASHBOARD);
}