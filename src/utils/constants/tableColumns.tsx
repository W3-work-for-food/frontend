import { GridColDef } from '@mui/x-data-grid';
import styles from '@components/Table/Table.module.scss';
import Notification from '@components/ui/Badges/Notification/Notification';
import StatusBadge from '@components/ui/Badges/StatusBadge/StatusBadge';
import MainCheckbox from '@components/ui/CheckBoxes/CheckBoxes';

export const notificationPageTableColumns: GridColDef[] = [
  {
    field: 'ambassadorName',
    headerName: 'Имя амбассадора',
    width: 240,
    renderCell: (params) => (
      <span className={styles.ambassadorName}>{params.row.ambassadorName}</span>
    ),
  },
  {
    field: 'telegram',
    headerName: 'Telegram',
    width: 148,
    renderCell: (params) => (
      <span className={styles.telegram}>{params.row.telegram}</span>
    ),
  },
  {
    field: 'notificationType',
    headerName: 'Тип уведомления',
    width: 200,
    renderCell: (params) => (
      <Notification status={params.row.notificationType} />
    ),
  },
  {
    field: 'dateAndTime',
    headerName: 'Дата и время',
    width: 180,
    renderCell: (params) => {
      const [date, time] = params.value.split(' ');
      return (
        <div className={styles.date}>
          {date}
          <span className={styles.time}>{time}</span>
        </div>
      );
    },
  },
  {
    field: 'action',
    headerName: 'Действие',
    width: 320,
  },
];

export const ambassadorColumns: GridColDef[] = [
  {
    field: 'ambassadorName',
    headerName: 'Имя амбассадора',
    width: 210,
    renderCell: (params) => (
      <span className={styles.ambassadorName}>{params.row.ambassadorName}</span>
    ),
  },
  {
    field: 'status',
    headerName: 'Статус',
    width: 170,
    renderCell: (params) => <StatusBadge status={params.row.status} />,
  },
  {
    field: 'telegram',
    headerName: 'Telegram',
    width: 130,
    renderCell: (params) => (
      <span className={styles.telegram}>{params.row.telegram}</span>
    ),
  },
  {
    field: 'promo',
    headerName: 'Промокод',
    width: 130,
    renderCell: (params) => (
      <span className={styles.promo}>{params.row.promo}</span>
    ),
  },
  {
    field: 'direction',
    headerName: 'Направление',
    width: 230,
    renderCell: (params) => (
      <span className={styles.promo}>{params.row.direction}</span>
    ),
  },
  {
    field: 'date',
    headerName: 'Дата создания',
    width: 180,
    renderCell: (params) => {
      return <span className={styles.time}>{params.row.date}</span>;
    },
  },
  {
    field: 'guide',
    headerName: 'Гайд',
    width: 86,
    renderCell: (params) => (
      <MainCheckbox checked={params.row.guide} disabled />
    ),
  },
];