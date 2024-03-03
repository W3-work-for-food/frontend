import { notificationPageTableColumns } from '@constants/tableColumns';
import { notificationsRows } from '@constants/tableRows';
import Table from '@/components/Table/Table';
import Content from '@/components/Layout/Content/Content';

const Home = () => {
  return (
    <>
      <div style={{ gridArea: 'controls', height: '76px' }} />
      <Content>
        <Table
          columns={notificationPageTableColumns}
          rows={notificationsRows}
        />
      </Content>
    </>
  );
};

export default Home;
