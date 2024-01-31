import { IGridView } from "shop-folder-core";

export const DEFAULT_COLUMNS: IGridView = {
    viewName: 'FLAT',
    isDefault: true,
    columnDefs: [
        {
            headerName: 'Todo',
            field: 'name',
            flex: 1
        },
        {
            headerName: 'Status',
            field: 'status',
            flex: 1
        },
        {
          headerName: 'Todo Group Name',
          field: 'todoGroupName',
          flex: 1,
          rowGroup: true,
          hide: true
        }
    ],
    autoGroupColumnDef: undefined
};
