import { ambassadorColumns } from '@utils/constants/tableColumns';
import { useAppSelector } from '@services/typeHooks';
import { RootState } from '@services/redux/store';
import { format } from 'date-fns';
import { IAmbassador } from '@utils/types/ambassadorTypes';
import Table from '@/components/Table/Table';
import Content from '@/components/Layout/Content/Content';

const transformAmbassadorToRow = (ambassador: IAmbassador) => {
  return {
    id: ambassador.id,
    ambassadorName: ambassador.name,
    status: ambassador.status,
    telegram: ambassador.telegram,
    promo:
      ambassador.promocodes.length > 0
        ? ambassador.promocodes[0].promocode
        : 'N/A',
    direction: 'Не указано',
    date: format(new Date(ambassador.pub_date), 'dd.MM.yyyy'),
    guide: ambassador.guide_status,
  };
};

const Ambassadors = () => {
  const ambassadors = useAppSelector(
    (state: RootState) => state.ambassadors.ambassadors
  );
  const ambassadorRows = ambassadors.map(transformAmbassadorToRow);

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
