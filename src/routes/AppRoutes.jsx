import { Routes, Route, Navigate } from "react-router-dom"
import UserPage from "../features/users/userPage"
import SettingsPage from "../features/settings/SettingsPage"
import ReportsPage from "../features/reports/ReportsPage"

export default function AppRoutes() {

    return (
        <>
            <Routes>
                <Route path="/react-dashboard/" element={<Navigate to="/react-dashboard/users" />} />
                <Route path="/react-dashboard/users" element={<UserPage />} />
                <Route path="/react-dashboard/settings" element={<SettingsPage />} />
                <Route path="/react-dashboard/reports" element={<ReportsPage />} />
            </Routes>
        </>
    )
}