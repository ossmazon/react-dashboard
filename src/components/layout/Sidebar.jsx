import { NavLink } from "react-router-dom"
import "./layout.css"

export default function Sidebar() {

    return (
        <>
            <aside className="sidebar">
                <h2 className="sidebar-title">
                    Dashboard
                </h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/users" className="nav-item">Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings" className="nav-item">Settings</NavLink>
                        </li>
                        <li>
                            <NavLink to="/reports" className="nav-item">Reports</NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}