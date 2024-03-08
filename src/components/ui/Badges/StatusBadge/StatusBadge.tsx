import { Box } from '@mui/material';
import { FC } from 'react';
import { Statuses } from '@utils/constants/badges';
import { AmbassadorStatus } from '@utils/types/ambassadorTypes';
import styles from './StatusBadge.module.scss';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
  let statusColor;
  let statusLabel;
  if (status === AmbassadorStatus.Active) {
    statusLabel = Statuses.ACTIVE;
    statusColor = styles.green;
  } else if (status === AmbassadorStatus.Paused) {
    statusLabel = Statuses.PAUSED;
    statusColor = styles.orange;
  } else if (status === AmbassadorStatus.NonAmbassador) {
    statusLabel = Statuses.NOT_AMBASSADOR;
    statusColor = styles.rose;
  } else {
    statusLabel = Statuses.PENDING;
    statusColor = styles.blue;
  }

  return (
    <Box component="div" className={`${statusColor} ${styles.status}`}>
      {statusLabel}
    </Box>
  );
};

export default StatusBadge;
