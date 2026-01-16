import { AgGridReact } from "ag-grid-react";
import { useMemo } from "react";

export default function UserTable({
    data
}) {

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
                />
            </div>
        </>
    )
}