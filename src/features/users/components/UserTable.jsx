import { AgGridReact } from "ag-grid-react";
import { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserRequest } from "../../../store/users/user.slice";
import "./UserTable.css"
import AddUserDrawer from "./AddUserDrawer";

export default function UserTable({
    data
}) {

    const dispatch = useDispatch()

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const [userToEdit, setUserToEdit] = useState(null)

    const openEditDrawer = useCallback((user) => {
        setUserToEdit(user)
        setIsDrawerOpen(true)
    }, [])

    const closeDrawer = () => {
        setIsDrawerOpen(false)
        setUserToEdit(null)
    }
    const deleteUser = (id) => {
        dispatch(deleteUserRequest(id))
    }

    const columnDefs = useMemo(() => [

        {
            headerName: "ID",
            field: "id",
            sortable: true,
            filter: true,
            flex: "1",
            valueFormatter: (params) => params.value?.toString()
        },
        {
            headerName: "Name",
            field: "name",
            sortable: true,
            filter: true,
            flex: "2"
        },
        {
            headerName: "Email",
            field: "email",
            sortable: true,
            filter: true,
            flex: "1"
        },
        {
            headerName: "Phone",
            field: "phone",
            sortable: true,
            filter: true,
            flex: "1"

        },
        {
            headerName: "Update",
            field: "update",
            flex: "1",
            cellRenderer: (params) => {
                return (
                    <button
                        className="update-btn"
                        onClick={() => openEditDrawer(params.data)}
                    >
                        Update
                    </button>
                )
            }
        },
        {
            headerName: "Delete",
            field: "delete",
            flex: "1",
            cellRenderer: (params) => {
                return (

                    <button
                        className="delete-btn"
                        onClick={() => deleteUser(params.data)}
                    >
                        Delete
                    </button>
                )
            }
        }
    ], [openEditDrawer])

    return (
        <>
            <div className="ag-theme-alpine" style={{
                height: 500,
                width: "100%"
            }}>
                <AgGridReact
                    rowData={data}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={15}
                />
            </div>
            <AddUserDrawer
                isOpen={isDrawerOpen}
                onClose={closeDrawer}
                userToEdit={userToEdit}
            />
        </>
    )
}