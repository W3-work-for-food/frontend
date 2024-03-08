import { Box } from '@mui/material';
import { FC } from 'react';
import { Statuses } from '@utils/constants/badges';
import styles from './StatusBadge.module.scss';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
  let statusColor;
  if (status === Statuses.ACTIVE) {
    statusColor = styles.green;
  } else if (status === Statuses.PAUSED) {
    statusColor = styles.orange;
  } else if (status === Statuses.NOT_AMBASSADOR) {
    statusColor = styles.rose;
  } else {
    statusColor = styles.blue;
  }

  return (
    <Box component="div" className={`${statusColor} ${styles.status}`}>
      {status}
    </Box>
  );
};

export default StatusBadge;
