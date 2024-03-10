import { GridColDef } from '@mui/x-data-grid';
import styles from '@components/Table/Table.module.scss';
import Notification from '@components/ui/Badges/Notification/Notification';
import StatusBadge from '@components/ui/Badges/StatusBadge/StatusBadge';
import MainCheckbox from '@components/ui/CheckBoxes/CheckBoxes';
import CustomLink from '@components/ui/CustomLink/CustomLink';

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
    renderCell: (params) => (
      <CustomLink url={params.row.url} size="m">{params.row.action}</CustomLink>
    ),
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

export const merchTableColumns: GridColDef[] = [
  {
    field: 'date',
    headerName: 'Дата отправки',
    width: 136,
    renderCell: (params) => {
      return <span className={styles.merch}>{params.row.date}</span>;
    },
  },
  {
    field: 'merch_type',
    headerName: 'Тип мерча',
    width: 104,
    renderCell: (params) => {
      return (
        <span className={styles.merch}>{params.row.merch_type}</span>
      );
    },
  },
  {
    field: 'price',
    headerName: 'Стоимость',
    width: 104,
    renderCell: (params) => {
      return <span className={styles.merch}>{params.row.price}</span>;
    },
  },
];
