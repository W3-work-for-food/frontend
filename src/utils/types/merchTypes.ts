import { AmbassadorStatus } from './ambassadorTypes';

interface IUser {
  first_name: string;
  last_name: string;
}

interface IMerchAmbassador {
  id: number;
  pub_date: string;
  telegram: string;
  name: string;
  status: AmbassadorStatus;
  comment: string;
  guide_status: boolean;
  profile: number;
  address: number;
}

export interface IMerchItem {
  id: number;
  merch_type: string;
  category: string;
  price: number;
}

export interface IMerch {
  id: number;
  user: IUser;
  date: string;
  ambassador: IMerchAmbassador;
  merch: IMerchItem[];
  amount: number;
  sized_merch: string;
}
