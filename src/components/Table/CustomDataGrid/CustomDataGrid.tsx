import { styled } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import vars from '@styles/_export.module.scss';
import {
  notificationPageTableColumns,
  postedContentColumns,
} from '@utils/constants/tableColumns';
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
    ...(columns === postedContentColumns && {
      maxHeight: '436px !important',
    }),
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
    ...(columns === postedContentColumns && {
      maxHeight: '44px !important',
      minHeight: '44px !important',
    }),
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
    ...(columns === postedContentColumns && {
      height: '44px !important',
      maxHeight: '44px !important',
      minHeight: '44px !important',
    }),
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
    ...(columns === postedContentColumns && {
      maxHeight: '48px !important',
      minHeight: '48px !important',
    }),
  },
  '.MuiDataGrid-cell[data-field="guide_condition"]': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  [`.MuiDataGrid-cell[data-colindex="${postedContentColumns.length - 1}"]`]: {
    justifyContent: 'center',
    padding: '0 !important',
  },
  '.MuiDataGrid-cell[data-colindex="0"]': {
    color: vars.mainTextColor,
  },
  '.MuiDataGrid-cell--withRenderer': {
    '&:focus-within': {
      outline: 'none',
    },
  },
  '.MuiDataGrid-columnHeaderCheckbox': {
    height: '48px !important',
    width: '48px !important',
    maxWidth: '48px !important',
    minWidth: '48px !important',
    ...(columns === postedContentColumns && {
      justifyContent: 'center',
      height: '44px !important',
      maxWidth: '44px !important',
      minWidth: '44px !important',
    }),
  },
  '.MuiDataGrid-cellCheckbox': {
    padding: '0 !important',
    maxHeight: '48px !important',
    minHeight: '48px !important',
    maxWidth: '48px !important',
    minWidth: '48px !important',
    ...(columns === postedContentColumns && {
      maxHeight: '48px !important',
      minHeight: '48px !important',
    }),
  },
  '.MuiDataGrid-cell': {
    padding: '0 0 0 12px',
    maxHeight: '56px !important',
    minHeight: '56px !important',
    borderBottom: 'none',

    '&:focus': {
      outline: 'none',
    },
    ...(columns === postedContentColumns && {
      maxHeight: '48px !important',
      minHeight: '48px !important',
    }),
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

export { CustomDataGrid, CustomDataGridFooter };
