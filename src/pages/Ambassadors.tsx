import { ambassadorColumns } from '@utils/constants/tableColumns';
import { ambassadorRows } from '@utils/constants/tableRows';
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
