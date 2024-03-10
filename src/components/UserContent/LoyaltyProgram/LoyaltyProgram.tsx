import { Box } from '@mui/material';
import Table from '@components/Table/Table';
import { merchTableColumns } from '@utils/constants/tableColumns';
import LoyaltyInfo from '@components/LoyaltyInfo/LoyaltyInfo';
import { IAmbassador } from '@utils/types/ambassadorTypes';
import { FC } from 'react';
import { RootState } from '@services/redux/store';
import { format } from 'date-fns';
import { useAppSelector } from '@services/typeHooks';
import { MerchRow } from '@utils/types/tableTypes';
import styles from './LoyaltyProgram.module.scss';

interface LoyaltyProgramProps {
  ambassador: IAmbassador;
}

interface IMerchItem {
  id: number;
  merch_type: string;
  price: number;
}

interface IPurchase {
  id: number;
  date: string;
  merch: IMerchItem[];
}

const transformMerchToRow = (purchase: IPurchase): MerchRow[] => {
  return purchase.merch.map(
    (item: IMerchItem): MerchRow => ({
      id: item.id,
      date: format(new Date(purchase.date), 'dd.MM.yyyy'),
      merch_type: item.merch_type,
      price: item.price.toString(),
    })
  );
};

const LoyaltyProgram: FC<LoyaltyProgramProps> = ({ ambassador }) => {
  const merchs: IPurchase[] = useAppSelector(
    (state: RootState) => state.merchs.merch
  );
  const budget: number = useAppSelector(
    (state: RootState) => state.merchs.budget
  );

  const merchRows = merchs.flatMap(transformMerchToRow);

  return (
    <Box className={styles.loyaltyProgram} component="div">
      <Table columns={merchTableColumns} rows={merchRows} budget={budget} />
      <LoyaltyInfo ambassador={ambassador} />
    </Box>
  );
};

export default LoyaltyProgram;
