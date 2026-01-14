import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/users/user.slice";
import UserTable from "./components/UserTable";
import AddUserDrawer from "./components/AddUserDrawer";

export default function UserPage() {

    const dispatch = useDispatch()
    const { list, loading, error } = useSelector((state) => state.users)
    const [showAddModal, setShowAddModal] = useState(false)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p style={{ color: "red" }}>Error: {error}</p>
    }
    const openDrawer = () => {
        setShowAddModal(true)
    }

    const closeDrawer = () => {
        setShowAddModal(false)
    } 

    return (
        <>
            <div className="page-wrapper">
                <h1>
                    Users
                </h1>
                <button className="add-user-btn" onClick={() => { openDrawer() }}>Add User</button>
                {showAddModal && (
                    <>
                        <AddUserDrawer isOpen={showAddModal}
                            //handleModal={handleModal}
                            onClose={closeDrawer}
                        />
                    </>
                )}
                <UserTable
                    data={list}
                />
            </div>
        </>
    )
}