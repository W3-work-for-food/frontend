import Statuses from '@constants/statuses';
import Notifications from '@constants/notifications';
import { Box } from '@mui/material';
import StatusBadge from '@/components/ui/Badges/StatusBadge/StatusBadge';
import Notification from '@/components/ui/Badges/Notification/Notification';

const Home = () => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'row', margin: '30px' }}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: '20px',
          gap: '10px',
        }}
      >
        <StatusBadge status={Statuses.ACTIVE} />
        <StatusBadge status={Statuses.PAUSED} />
        <StatusBadge status={Statuses.NOT_AMBASSADOR} />
        <StatusBadge status={Statuses.PENDING} />
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Notification status={Notifications.NEW_APPLICATION} />
        <Notification status={Notifications.NEW_CONTENT} />
        <Notification status={Notifications.GUIDE_COMPLETE} />
      </Box>
    </Box>
  );
};

export default Home;
