import { Box } from '@mui/material';
import { FC } from 'react';
import Notifications from '@constants/notifications';
import styles from './Notification.module.scss';

interface NotificationProps {
  status: string;
}

const Notification: FC<NotificationProps> = ({ status }) => {
  let notificationColor;
  if (status === Notifications.NEW_APPLICATION) {
    notificationColor = styles.orange;
  } else if (status === Notifications.NEW_CONTENT) {
    notificationColor = styles.blue;
  } else {
    notificationColor = styles.green;
  }

  return (
    <Box
      component="div"
      className={`${notificationColor} ${styles.notification}`}
    >
      {status}
    </Box>
  );
};

export default Notification;
