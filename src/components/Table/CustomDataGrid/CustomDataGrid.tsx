import { styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import vars from '@styles/_export.module.scss';
import { notificationPageTableColumns } from '@constants/tableColumns';
import { FC } from 'react';
import styles from '@/components/Table/Table.module.scss';

const CustomDataGrid = styled(DataGrid)(({ columns }) => ({
  '.MuiDataGrid-root': {
    border: 'none',
  },
  '.MuiDataGrid-footerContainer': {
    width: '100%',
    borderTop: 'none',
    minHeight: '40px',

    '& .MuiTablePagination-root, & .MuiDataGrid-selectedRowCount, & .MuiDataGrid-filterForm':
      {
        display: 'none',
      },
  },
  '& .MuiDataGrid-virtualScroller': {
    '&::-webkit-scrollbar': {
      width: '6px',
      height: '278px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: vars.defaultFiledColor,
      borderRadius: '3px',
    },
  },
  '.MuiDataGrid-virtualScrollerContent': {
    height: 'initial !important',
  },
  '.MuiToolbar-root': {
    minHeight: '40px',
  },
  '.MuiDataGrid-main': {
    width: '100%',
    maxHeight: '496px',
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
    padding: '0 0 0 12px',

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

    '&:hover': {
      backgroundColor: vars.screensBgColor,
    },

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

interface CustomDataGridFooterProps {
  count: number;
}

const CustomDataGridFooter: FC<CustomDataGridFooterProps> = ({ count }) => (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      height: '40px',
      width: '100%',
    }}
    className={styles.footer}
  >
    Всего: {count}
  </div>
);

export { CustomDataGrid, CustomDataGridFooter }