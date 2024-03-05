import { ambassadorColumns } from '@constants/tableColumns';
import { ambassadorRows } from '@constants/tableRows';
import Content from '@/components/Layout/Content/Content';
import Table from '@/components/Table/Table';

const Ambassadors = () => {
  return (
    <>
      <div style={{ gridArea: 'controls', height: '76px' }} />
      <Content>
        <Table columns={ambassadorColumns} rows={ambassadorRows} />
      </Content>
    </>
  );
};

export default Ambassadors;
