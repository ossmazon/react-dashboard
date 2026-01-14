import { Routes, Route, Navigate } from "react-router-dom"
import UserPage from "../features/users/userPage"
import SettingsPage from "../features/settings/SettingsPage"
import ReportsPage from "../features/reports/ReportsPage"

export default function AppRoutes() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/users" />} />
                <Route path="/users" element={<UserPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/reports" element={<ReportsPage />} />
            </Routes>
        </>
    )
}