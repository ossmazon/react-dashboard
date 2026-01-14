import { useTheme } from "../../context/ThemeContext"
import "./layout.css"

export default function Topbar() {

    const { theme, toggleTheme } = useTheme()

    return (
        <>
            <header className="topbar">
                <h1>
                    Admin Panel
                </h1>
                <button className="theme-btn" onClick={() => { toggleTheme() }}>
                    {theme === "dark" ? "Dark" : "Light"}
                </button>
            </header>
        </>
    )
}