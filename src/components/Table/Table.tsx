import { GridColDef, GridRowParams } from '@mui/x-data-grid';
import { notificationPageTableColumns } from '@utils/constants/tableColumns';
import { FC } from 'react';
import MainCheckbox from '@components/ui/CheckBoxes/CheckBoxes';
import { useNavigate } from 'react-router-dom';
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

interface TableProps {
  columns: GridColDef[];
  rows: AmbassadorRow[] | NotificationRow[];
}

const Table: FC<TableProps> = ({ columns, rows }) => {
  const navigate = useNavigate();

  const handleRowClick = (params: GridRowParams) => {
    navigate(`/ambassador/${params.id}`);
  };

  return (
    <div
      style={{
        height: 580,
        width: '100%',
        padding: '32px 32px 16px',
        boxSizing: 'border-box',
      }}
    >
      <CustomDataGrid
        className={styles.table}
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}
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

export default Table;
