"use client"
import { AgGridReact } from 'ag-grid-react'
import React, { useMemo, useRef } from 'react'

const InstrumentData = () => {

    const columnDefs = useMemo(() => [
        {
            field: "doc_type",
            headerName: "Doc Type",
            flex: 1,
            sortable: true,
            filter: "agTextColumnFilter",
        },
        {
            field: "rec_date",
            headerName: "Rec Date",
            flex: 1,
            sortable: true,
            filter: "agTextColumnFilter",
        },
        {
            field: "doc_id",
            headerName: "Doc ID",
            flex: 1,
            sortable: true,
            filter: "agTextColumnFilter",
        },
        {
            field: "party_1",
            headerName: "Party 1",
            flex: 2,
            sortable: true,
            filter: "agTextColumnFilter",
        },
        {
            field: "party_2",
            headerName: "Party 2",
            flex: 2,
            sortable: true,
            filter: "agTextColumnFilter",
        },
        {
            field: "legal",
            headerName: "Legals",
            flex: 2,
            sortable: true,
            filter: "agTextColumnFilter",
        },
        {
            field: "remark",
            headerName: "Remark",
            flex: 2,
            sortable: true,
            filter: "agTextColumnFilter",
        },
    ], [])

    const defaultColDef = useMemo(() => {
        return {
            resizable: true,
        };
    }, []);

    //table api
    const gridRef = useRef(null);

    return (
        <div>
            <div className="ag-theme-alpine" style={{ height: 450, width: "100%" }}>
                <AgGridReact
                    showOpenedGroup
                    defaultColDef={defaultColDef}
                    columnHoverHighlight={false}
                    ref={gridRef}
                    autoSizePadding={2}
                    rowHeight={30}
                    pagination={true}
                    paginationPageSize={200}

                    rowData={[]}
                    suppressRowVirtualisation={true}
                    suppressColumnVirtualisation={true}
                    overlayLoadingTemplate={
                        '<span class="ag-overlay-loading-center">Loading...</span>'
                    }
                    columnDefs={columnDefs}
                // onGridReady={() => gridRef?.current?.api?.sizeColumnsToFit()}
                ></AgGridReact>
            </div>
        </div>
    )
}

export default InstrumentData