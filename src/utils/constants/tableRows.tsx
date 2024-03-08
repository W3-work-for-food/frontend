import { Statuses, Notifications } from '@utils/constants/badges';

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
    guide: false,
  },
  {
    id: 2,
    ambassadorName: 'Кирилл Алексеев',
    status: Statuses.ACTIVE,
    telegram: '@user5',
    promo: 'ANDR126',
    direction: 'Дизайн',
    date: '13.02.2024',
    guide: true,
  },
  {
    id: 3,
    ambassadorName: 'Кирилл Алексеев',
    status: Statuses.ACTIVE,
    telegram: '@user5',
    promo: 'ANDR126',
    direction: 'Дизайн',
    date: '13.02.2024',
    guide: true,
  },
  {
    id: 4,
    ambassadorName: 'Кирилл Алексеев',
    status: Statuses.PAUSED,
    telegram: '@user5',
    promo: 'ANDR126',
    direction: 'Дизайн',
    date: '13.02.2024',
    guide: false,
  },
  {
    id: 5,
    ambassadorName: 'Кирилл Алексеев',
    status: Statuses.ACTIVE,
    telegram: '@user5',
    promo: 'ANDR126',
    direction: 'Дизайн',
    date: '13.02.2024',
    guide: true,
  },
  {
    id: 6,
    ambassadorName: 'Кирилл Алексеев',
    status: Statuses.PENDING,
    telegram: '@user5',
    promo: 'ANDR126',
    direction: 'Дизайн',
    date: '13.02.2024',
    guide: true,
  },
  {
    id: 7,
    ambassadorName: 'Кирилл Алексеев',
    status: Statuses.ACTIVE,
    telegram: '@user5',
    promo: 'ANDR126',
    direction: 'Дизайн',
    date: '13.02.2024',
    guide: true,
  },
  {
    id: 8,
    ambassadorName: 'Кирилл Алексеев',
    status: Statuses.ACTIVE,
    telegram: '@user5',
    promo: 'ANDR126',
    direction: 'Дизайн',
    date: '13.02.2024',
    guide: false,
  },

  {
    id: 9,
    ambassadorName: 'Кирилл Алексеев',
    status: Statuses.ACTIVE,
    telegram: '@user5',
    promo: 'ANDR126',
    direction: 'Дизайн',
    date: '13.02.2024',
    guide: true,
  },
];

export const postedContentRows = [
  {
    id: 0,
    date: '18.02.2024',
    link: 'https://air.example.com/berry/advertisement?berry=act&bite=aunt',
    guide: true,
  },
  {
    id: 1,
    date: '18.02.2025',
    link: 'https://air.example.com/berry/advertisement?berry=act&bite=aunt',
    guide: false,
  },
];
