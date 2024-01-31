import { IGridView } from 'shop-folder-core';

export const GROUP_BY_STATUS_COLUMNS: IGridView = {
  viewName: 'Group By Status',
  isDefault: true,
  columnDefs: [
    {
      headerName: 'Status',
      valueGetter: (p) => p.data.status,
      rowGroup: true,
      hide: true,
    },
    {
      headerName: 'Todo Group Name',
      field: 'todoGroupName',
      flex: 1,
      rowGroup: false,
      hide: false,
    },
    {
      headerName: 'Todo',
      field: 'name',
      flex: 1,
    },
  ],
  autoGroupColumnDef: {
    headerName: 'Status',
  },
};
