export enum NotificationType  {
  NEW_PROFILE = 'new_profile',
  NEW_CONTENT = 'new_content',
  GUIDE_COMPLETED = 'guide_completed',
}

export enum NotificationStatus {
  READ = 'read',
  UNREAD = 'unread',
}
export interface INotification {
  id: number;
  pub_date: string;
  type: NotificationType;
  status: NotificationStatus;
  ambassador: number;
};
