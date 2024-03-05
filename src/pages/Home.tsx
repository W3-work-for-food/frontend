import { ambassadorColumns } from '@constants/tableColumns';
import { ambassadorRows } from '@constants/tableRows';
import Table from '@/components/Table/Table';
import Content from '@/components/Layout/Content/Content';

const Home = () => {
  return (
    <>
      <div style={{ gridArea: 'controls', height: '76px' }} />
      <Content>
        <Table
          columns={ambassadorColumns}
          rows={ambassadorRows}
        />
      </Content>
    </>
  );
};

export default Home;
