# 🏆 Сервис для CRM Амбассадоры Яндекса (Команда №3)

🏆 Разработанная CRM система, объединяет в одном месте данные амбассадоров Яндекс Практикума, запросы которые от них поступают и возможность массовых рассылок.

> [!NOTE]
> 
> [Ссылка на проект](https://w3-work-for-food.github.io/frontend/#/login)
> 
> [Ссылка на макет в Figma](https://www.figma.com/file/tJxEBwNSJ7DwXA9M5kbNyn/%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0-%E2%84%963%2C-MVP-CRM-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%90%D0%BC%D0%B1%D0%B0%D1%81%D1%81%D0%B0%D0%B4%D0%BE%D1%80%D0%BE%D0%B2-%D0%AF.%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC%D0%B0?type=design&node-id=0-1&mode=design&t=fGUuA8HJ3a3ROahs-0)

> [!WARNING]
> Ключевая точка для media queries: 1440px.

<h2>&#10032; Команда разработчиков</h2>

- [Слепнёв Виталий Frontend](https://github.com/Vitali-workspace)
- [Комолкин Александр Frontend](https://github.com/SKom2)
- [Симонов Андрей Frontend](https://github.com/2web)


<h2>&#10032; Основные функции</h2>

- Авторизация пользователя 
- Просмотр списков амбассадоров
- Просмотр списка уведомлений
- Просмотр профиля
- Отправка мерча


<h2>&#10032; Используемые технологии</h2>

> [!IMPORTANT]
> - TypeScript
> - React Router
> - React Redux
> - Redux Toolkit
> - Material UI
> - React Hook Form
> - Yup
> - Sass
> - Docker


<h2>&#10032; Команды для запуска проекта</h2>

#### Клонирование репозитория

```bash
git clone https://github.com/W3-work-for-food/frontend.git
```
#### Установка зависимостей

```bash
yarn install
```
#### Запуск проекта

```bash
yarn dev
```
#### Сборка проекта

```bash
yarn build
```
#### Запуск проекта в Docker:

```bash
docker build -t hackathon-frontend-image .
docker run -p 8001:8001 -d hackathon-frontend-image

страница доступна по адресу
http://127.0.0.1:8001/
```
