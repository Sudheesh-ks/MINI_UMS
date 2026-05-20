import { Route } from "react-router-dom"
import Dashboard from "../pages/admin/Dashboard"

export const adminRoutes = () => {
    return (
        <>
            <Route path="/admin/dashboard" element={<Dashboard />} />
        </>
    )
}