import { Paper, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import DefaultSelect from '@/components/ui/Dropdown/Dropdown';
import { Caption, TableLabel } from '@/components/ui/Form/Elements';
import { DefaultInput } from '@/components/ui/Inputs/Inputs';
import { useAppSelector } from '@/services/typeHooks';
import { RootState } from '@/services/redux/store';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));
const CommonInformation = () => {
  const ambassador = useAppSelector(
    (state: RootState) => state.ambassadors.ambassador
  );
  const itemsGender = [
    { label: 'Мужской', value: 'Мужской' },
    { label: 'Женский', value: 'Женский' },
  ];
  const itemsProgram = [
    { label: 'Аналитик данных', value: 10 },
    { label: 'Разработчик', value: 20 },
  ];
  const itemsProfession = [
    { label: 'Аналитик данных', value: 10 },
    { label: 'Разработчик', value: 20 },
  ];
  const itemsEvents = [
    { label: 'Выступать на мероприятиях', value: 10 },
    { label: 'Вести блог', value: 20 },
    { label: 'Реклама в VK', value: 30 },
  ];
  const profile = ambassador?.profile;
  if (!profile) return null;
  return (
    <>
      <Grid container spacing={0} columns={16}>
        <Grid xs={8}>
          <Item>
            <Caption>Личные данные</Caption>
            <TableLabel>
              Пол
              <sup>*</sup>
            </TableLabel>
            <DefaultSelect
              label="Выбрать пол"
              items={itemsGender}
              defaultValue={profile.gender}
              fullWidth={false}
            />
          </Item>
        </Grid>
      </Grid>
      <Grid container spacing={0} columns={16}>
        <Grid xs={16}>
          <Item>
            <Caption>Образование и опыт работы</Caption>
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <TableLabel>Образование</TableLabel>
            <DefaultInput fullWidth value="Финансы и кредит" />
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <TableLabel>Место работы *</TableLabel>
            <DefaultInput fullWidth value="ИП Алексеев, финансист" />
          </Item>
        </Grid>
      </Grid>
      <Grid container spacing={0} columns={16}>
        <Grid xs={16}>
          <Item>
            <Caption>Нахождение в сообществе</Caption>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <TableLabel>Дата добавления</TableLabel>
            <DefaultInput fullWidth value="10.10.2023" />
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <TableLabel>Срок нахождения в сообществе</TableLabel>
            <DefaultInput fullWidth value="4 месяца" />
          </Item>
        </Grid>
        <Grid xs={8} />
        <Grid xs={8}>
          <Item>
            <TableLabel>
              Программа обучения в Практикуме <sup>*</sup>
            </TableLabel>
            <DefaultSelect
              label="Выбрать программу обучения"
              items={itemsProgram}
              defaultValue=""
              fullWidth
            />
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <TableLabel>
              Цель обучения в Практикуме <sup>*</sup>
            </TableLabel>
            <DefaultSelect
              label="Получение новой профессии"
              items={itemsProfession}
              defaultValue=""
              fullWidth
            />
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <TableLabel>
              Планы в рамках амбассадорства <sup>*</sup>
            </TableLabel>
            <DefaultSelect
              label="Выбрать мероприятия"
              items={itemsEvents}
              defaultValue=""
              fullWidth
            />
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <TableLabel>Ссылка на блог</TableLabel>
            <DefaultInput fullWidth value="" />
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item>
            <TableLabel>Действующий промокод</TableLabel>
            <DefaultInput fullWidth value="ANKIR116" />
          </Item>
        </Grid>
        <Grid xs={5}>
          <Item>
            <TableLabel>Недействующие промокоды</TableLabel>
            <DefaultInput fullWidth value="" />
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <TableLabel>Дополнительная информация</TableLabel>
            <DefaultInput fullWidth value="" />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default CommonInformation;
