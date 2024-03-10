import Content from '@components/Layout/Content/Content';
import Table from '@components/Table/Table';
import { notificationPageTableColumns } from '@utils/constants/tableColumns';
import { notificationsRows } from '@utils/constants/tableRows';

const Notifications = () => {
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

export default Notifications;
