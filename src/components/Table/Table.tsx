import { GridColDef } from '@mui/x-data-grid';
import { notificationPageTableColumns, postedContentColumns } from '@utils/constants/tableColumns';
import { FC } from 'react';
import MainCheckbox from '@components/ui/CheckBoxes/CheckBoxes';
import styles from './Table.module.scss';
import {
  CustomDataGrid,
  CustomDataGridFooter,
} from './CustomDataGrid/CustomDataGrid';

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

interface PostedContentRow {
  id: number;
  date: string;
  link: string;
  guide: boolean;
}

interface TableProps {
  columns: GridColDef[];
  rows: AmbassadorRow[] | NotificationRow[] | PostedContentRow[];
  customClass?: string;
}

const Table: FC<TableProps> = ({ columns, rows, customClass }) => {
  return (
    <div
      style={{
        height: columns === postedContentColumns ? 436 : 580,
        width: '100%',
        padding: '32px 32px 16px',
        boxSizing: 'border-box',
      }}
      className={customClass}
    >
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
          // eslint-disable-next-line react/no-unstable-nested-components
          footer: () => <CustomDataGridFooter count={rows.length} />,
        }}
      />
    </div>
  );
};

Table.defaultProps = {
  customClass: '',
};

export default Table;
