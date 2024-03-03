import { notificationPageTableColumns } from '@constants/tableColumns';
import { notificationsRows } from '@constants/tableRows';
import Table from '@/components/Table/Table';

const Home = () => {
  return (
    <>
      <div style={{ gridArea: 'controls', height: '76px' }} />
      <div style={{ gridArea: 'content' }}>
        <Table
          columns={notificationPageTableColumns}
          rows={notificationsRows}
        />
      </div>
    </>
  );
};

export default Home;
