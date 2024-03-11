import { GridColDef, GridRowParams } from '@mui/x-data-grid';
import {
  merchTableColumns,
  notificationPageTableColumns,
} from '@utils/constants/tableColumns';
import { FC } from 'react';
import MainCheckbox from '@components/ui/CheckBoxes/CheckBoxes';
import { useNavigate } from 'react-router-dom';
import {
  AmbassadorRow,
  MerchRow,
  NotificationRow,
} from '@utils/types/tableTypes';
import styles from './Table.module.scss';
import {
  CustomDataGrid,
  CustomDataGridFooter,
} from './CustomDataGrid/CustomDataGrid';

interface TableProps {
  columns: GridColDef[];
  rows: AmbassadorRow[] | NotificationRow[] | MerchRow[];
  budget?: number;
}

const Table: FC<TableProps> = ({ columns, rows, budget }) => {
  const navigate = useNavigate();

  const handleRowClick = (params: GridRowParams) => {
    navigate(`/ambassador/${params.id}`);
  };

  return (
    <div
      style={{
        height: columns === merchTableColumns ? '100%' : 628,
        width: '100%',
        padding: columns === merchTableColumns ? '0' : '32px 32px 16px',
        boxSizing: 'border-box',
      }}
    >
      <CustomDataGrid
        className={styles.table}
        rows={rows}
        columns={columns}
        {...(columns !== merchTableColumns && { onRowClick: handleRowClick })}
        initialState={{
          pagination: {
            paginationModel: { page: 0 },
          },
        }}
        checkboxSelection={columns === notificationPageTableColumns}
        slots={{
          baseCheckbox: MainCheckbox,
          // eslint-disable-next-line react/no-unstable-nested-components
          footer: () => (
            <CustomDataGridFooter
              info={columns === merchTableColumns ? budget : rows.length}
              columns={columns}
            />
          ),
        }}
      />
    </div>
  );
};

Table.defaultProps = {
  budget: 0,
};

export default Table;
