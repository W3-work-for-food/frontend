export interface AmbassadorRow {
  id: number;
  ambassadorName: string;
  status: string;
  telegram: string;
  promo: string;
  direction: string;
  date: string;
  guide: boolean;
}

export interface NotificationRow {
  id: number;
  ambassadorName: string;
  telegram: string;
  notificationType: string;
  dateAndTime: string;
  action: string;
}

export interface PostedContentRow {
  id: number;
  date: string;
  link: string;
  guide_condition: boolean;
}
