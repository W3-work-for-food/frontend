import {
  notificationPageTableColumns,
  postedContentColumns,
} from '@utils/constants/tableColumns';
import { FC } from 'react';
import MainCheckbox from '@components/ui/CheckBoxes/CheckBoxes';
import {
  AmbassadorRow,
  NotificationRow,
  PostedContentRow,
} from '@utils/types/tablesTypes';
import { GridColDef } from '@mui/x-data-grid';
import styles from './Table.module.scss';
import {
  CustomDataGrid,
  CustomDataGridFooter,
} from './CustomDataGrid/CustomDataGrid';

interface TableProps {
  columns: GridColDef[];
  rows: AmbassadorRow[] | NotificationRow[] | PostedContentRow[];
  customClass?: string;
  isEditing?: boolean;
}

const Table: FC<TableProps> = ({ columns, rows, customClass, isEditing }) => {
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
        style={{
          gap: columns === postedContentColumns ? '26px' : '',
        }}
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
          footer: () => <CustomDataGridFooter count={rows.length} />,
        }}
      />
    </div>
  );
};

Table.defaultProps = {
  customClass: '',
  isEditing: false,
};

export default Table;
