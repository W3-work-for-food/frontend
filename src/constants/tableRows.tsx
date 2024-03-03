import Notifications from '@constants/notifications';
import Statuses from '@constants/statuses';

export const notificationsRows = [
  {
    id: 1,
    ambassadorName: 'Кирилл Алексеев',
    telegram: '@kirill1194',
    notificationType: Notifications.NEW_CONTENT,
    dateAndTime: '09.02.2024 16:03',
    action: 'Перейти в список контента',
  },
  {
    id: 2,
    ambassadorName: 'Имя 2',
    telegram: '@user2',
    notificationType: Notifications.NEW_APPLICATION,
    dateAndTime: '10.02.2024 12:30',
    action: 'Проверить статус',
  },
  {
    id: 3,
    ambassadorName: 'Имя 4',
    telegram: '@user4',
    notificationType: Notifications.NEW_CONTENT,
    dateAndTime: '12.02.2024 14:20',
    action: 'Отправить сообщение',
  },
  {
    id: 4,
    ambassadorName: 'Имя 5',
    telegram: '@user5',
    notificationType: Notifications.GUIDE_COMPLETE,
    dateAndTime: '13.02.2024 16:15',
    action: 'Подтвердить участие',
  },
  {
    id: 5,
    ambassadorName: 'Имя 5',
    telegram: '@user5',
    notificationType: Notifications.GUIDE_COMPLETE,
    dateAndTime: '13.02.2024 16:15',
    action: 'Подтвердить участие',
  },
  {
    id: 6,
    ambassadorName: 'Имя 5',
    telegram: '@user5',
    notificationType: Notifications.GUIDE_COMPLETE,
    dateAndTime: '13.02.2024 16:15',
    action: 'Подтвердить участие',
  },
  {
    id: 7,
    ambassadorName: 'Имя 5',
    telegram: '@user5',
    notificationType: Notifications.GUIDE_COMPLETE,
    dateAndTime: '13.02.2024 16:15',
    action: 'Подтвердить участие',
  },
  {
    id: 8,
    ambassadorName: 'Имя 5',
    telegram: '@user5',
    notificationType: Notifications.GUIDE_COMPLETE,
    dateAndTime: '13.02.2024 16:15',
    action: 'Подтвердить участие',
  },
];

export const ambassadorRows = [
  {
    id: 1,
    ambassadorName: 'Кирилл Алексеев',
    status: Statuses.ACTIVE,
    telegram: '@user5',
    promo: 'ANDR126',
    direction: 'Дизайн',
    date: '13.02.2024',
    guide: true,
  },
];