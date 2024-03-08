export enum ClothingSize {
  ExtraSmall = 'extra_small',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  ExtraLarge = 'extra_large',
}

export enum IGender {
  Male = 'male',
  Female = 'female',
}

export enum AmbassadorStatus {
  Active = 'active',
  Paused = 'paused',
  NonAmbassador = 'non_ambassador',
  Clarifying = 'clarifying',
}

interface IProfile {
  id: number;
  email: string;
  gender: IGender;
  job: string;
  clothing_size: ClothingSize;
  foot_size: number;
  blog_link: string;
  additional: string;
  education: string;
  education_path: string;
  education_goal: string;
  phone: string;
}

interface IAddress {
  id: number;
  country: string;
  region: string;
  city: string;
  address: string;
  postal_code: number;
}

interface IPromocode {
  id: number;
  promocode: string;
  is_active: boolean;
}

export interface IAmbassador {
  id: number;
  pub_date: string;
  telegram: string;
  name: string;
  profile: IProfile;
  address: IAddress;
  promocodes: IPromocode[];
  comment: string;
  guide_status: boolean;
  status: AmbassadorStatus;
}
