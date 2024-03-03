import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { styled } from '@mui/material';
import vars from '@styles/_export.module.scss';
import { notificationPageTableColumns } from '@constants/tableColumns';
import { FC } from 'react';
import styles from './Table.module.scss';
import MainCheckbox from '@/components/Layout/CheckBoxes/CheckBoxes';

const CustomDataGrid = styled(DataGrid)(({ columns }) => ({
  '.MuiDataGrid-root': {
    border: 'none',
  },
  '.MuiDataGrid-footerContainer': {
    width: '100%',
    borderTop: 'none',
    minHeight: '40px',
  },
  '.MuiToolbar-root': {
    minHeight: '40px',
  },
  '.MuiDataGrid-main': {
    maxHeight: '440px',
  },
  '.MuiDataGrid-columnHeaders': {
    fontFamily: 'YS',
    fontSize: '16px',
    lineHeight: '20px !important',
    maxHeight: '48px !important',
    minHeight: '48px !important',
    fontWeight: '500',
    backgroundColor: vars.hoverFiledColor,
    borderBottom: `1px solid ${vars.defaultFiledColor}`,
    color: vars.subtitlesColor,
  },
  '.MuiDataGrid-columnHeadersInner': {
    maxHeight: '48px !important',
    minHeight: '48px !important',
  },
  '.MuiDataGrid-columnHeader': {
    textAlign: 'start',
    height: '48px !important',
    maxHeight: '48px !important',
    minHeight: '48px !important',

    '&:focus': {
      outline: 'none',
    },
    ...(columns === notificationPageTableColumns && {
      '&:first-child .MuiDataGrid-columnHeaderTitleContainerContent': {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        '&:focus': {
          outline: 'none',
        },
      },
    }),

    '&:not(:first-child)': {
      padding: '0 0 0 12px',
    },
  },
  '.MuiDataGrid-columnSeparator': {
    display: 'none',
  },
  '.MuiIconButton-root': {
    display: 'none',
  },
  '.MuiDataGrid-row': {
    maxHeight: '55px !important',
    minHeight: '55px !important',
    alignItems: 'center',
    borderBottom: `1px solid ${vars.disabledFiledColor}`,

    '&.Mui-selected': {
      backgroundColor: vars.screensBgColor,
    },
  },
  '.MuiDataGrid-columnHeaderCheckbox': {
    height: '48px !important',
    width: '48px !important',
    maxWidth: '48px !important',
    minWidth: '48px !important',
  },
  '.MuiDataGrid-cellCheckbox': {
    padding: '0 !important',
    maxHeight: '48px !important',
    minHeight: '48px !important',
    maxWidth: '48px !important',
    minWidth: '48px !important',

    '&:focus-within': {
      outline: 'none',
    },
  },
  '.MuiDataGrid-cell': {
    padding: '0 0 0 12px',
    maxHeight: '56px !important',
    minHeight: '56px !important',
    borderBottom: 'none',

    '&:focus': {
      outline: 'none',
    },
  },
  '.MuiCheckbox-root': {
    padding: '0',
  },
}));

interface AmbassadorRow {
  id: number;
  ambassadorName: string;
  status: string;
  telegram: string;
  promo: string;
  direction: string;
  date: string;
  guide: boolean;
}

interface NotificationRow {
  id: number;
  ambassadorName: string;
  telegram: string;
  notificationType: string;
  dateAndTime: string;
  action: string;
}

interface TableProps {
  columns: GridColDef[];
  rows: AmbassadorRow[] | NotificationRow[];
}

const Table: FC<TableProps> = ({ columns, rows }) => {
  return (
    <div style={{ height: 524, width: '100%' }}>
      <CustomDataGrid
        className={styles.table}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0 },
          },
        }}
        checkboxSelection={columns === notificationPageTableColumns}
        slots={{
          baseCheckbox: MainCheckbox,
        }}
      />
    </div>
  );
};

export default Table;