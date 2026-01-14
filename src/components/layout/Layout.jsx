import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./layout.css"

export default function Layout({ children }) {

    return (
        <>
            <div className="layout">
                <Sidebar />
                <div className="content-wrapper">
                    <Topbar />
                    <main className="content">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}