import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { deleteUserRequest } from "../../../store/users/user.slice";
import "./UserTable.css"

export default function UserTable({
    data
}) {

    const dispatch = useDispatch()

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
            headerName: "Actions",
            field: "action",
            flex: "1",
            cellRenderer: (params) => {
                return (

                    <button
                        className="delete-btn"
                        onClick={() => params.context.deleteUser(params.data.id)}
                    >
                        Delete
                    </button>
                )
            }
        }
    ], [])
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
                    context={{ deleteUser }}
                />
            </div>
        </>
    )
}