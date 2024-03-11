import { styled } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import vars from '@styles/_export.module.scss';
import {
  merchTableColumns,
  notificationPageTableColumns,
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
      backgroundColor: vars.disabledFiledColor,
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
    ...(columns === merchTableColumns && {
      maxHeight: '44px !important',
      minHeight: '44px !important',
    }),
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
      '&:first-of-type': {
        padding: '0 !important',
      },
    }),
    ...(columns === notificationPageTableColumns && {
      '&:first-of-type .MuiDataGrid-columnHeaderTitleContainerContent': {
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
    cursor: 'pointer',
    maxHeight: '55px !important',
    minHeight: '55px !important',
    alignItems: 'center',
    borderBottom: `1px solid ${vars.disabledFiledColor}`,
    ...(columns === merchTableColumns && {
      maxHeight: '36px !important',
      minHeight: '36px !important',
    }),

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
    ...(columns === merchTableColumns && {
      maxHeight: '36px !important',
      minHeight: '36px !important',
    }),
  },
  '.MuiDataGrid-cellCheckbox': {
    padding: '0 !important',
    maxHeight: '48px !important',
    minHeight: '48px !important',
    maxWidth: '48px !important',
    minWidth: '48px !important',
    ...(columns === merchTableColumns && {
      maxHeight: '36px !important',
      minHeight: '36px !important',
    }),

    '&:focus-within': {
      outline: 'none',
    },
  },
  '.MuiDataGrid-cell': {
    padding: '0 0 0 12px',
    maxHeight: '56px !important',
    minHeight: '56px !important',
    borderBottom: 'none',
    ...(columns === merchTableColumns && {
      padding: '0 0 0 8px',
      maxHeight: '36px !important',
      minHeight: '36px !important',
    }),

    '&:focus': {
      outline: 'none',
    },
  },
  '.MuiCheckbox-root': {
    padding: '0',
  },
}));

interface CustomDataGridFooterProps {
  info: number | string | undefined;
  columns: GridColDef[];
}

const CustomDataGridFooter: FC<CustomDataGridFooterProps> = ({
  info,
  columns,
}) => {
  const footerText =
    columns === merchTableColumns
      ? `Бюджет на мерч: ${info}`
      : `Всего: ${info}`;

  return (
    <div
      style={{
        marginLeft: columns === merchTableColumns ? '8px' : undefined,
        alignItems: 'center',
        display: 'flex',
        height: '40px',
        width: '100%',
      }}
      className={
        columns === merchTableColumns ? styles.footerMerch : styles.footer
      }
    >
      {footerText}
    </div>
  );
};

export { CustomDataGrid, CustomDataGridFooter };
