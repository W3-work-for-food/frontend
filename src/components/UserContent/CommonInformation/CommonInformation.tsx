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
  const profile = ambassador?.profile;
  const promocodes = ambassador?.promocodes;
  if (!profile) return <>No amba</>;
  const activePromocode = promocodes?.find((promo) => promo.is_active);
  const inactivePromocodes = promocodes
    ?.filter((promo) => !promo.is_active)
    .map((promo) => promo.promocode)
    .join(', ');

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
            <DefaultInput fullWidth value={profile.education} />
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <TableLabel>Место работы *</TableLabel>
            <DefaultInput fullWidth value={profile.job} />
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
            <DefaultInput fullWidth value={ambassador.pub_date} />
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <TableLabel>Срок нахождения в сообществе</TableLabel>
            <DefaultInput fullWidth disabled value="" />
          </Item>
        </Grid>
        <Grid xs={8} />
        <Grid xs={8}>
          <Item>
            <TableLabel>
              Программа обучения в Практикуме <sup>*</sup>
            </TableLabel>
            <DefaultInput fullWidth value={profile.education_path} />
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <TableLabel>
              Цель обучения в Практикуме <sup>*</sup>
            </TableLabel>
            <DefaultInput fullWidth value={profile.education_goal} />
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <TableLabel>
              Планы в рамках амбассадорства <sup>*</sup>
            </TableLabel>
            <DefaultInput fullWidth disabled value="" />
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <TableLabel>Ссылка на блог</TableLabel>
            <DefaultInput fullWidth value={profile.blog_link} />
          </Item>
        </Grid>
        <Grid xs={3}>
          <Item>
            <TableLabel>Действующий промокод</TableLabel>
            <DefaultInput fullWidth value={activePromocode} />
          </Item>
        </Grid>
        <Grid xs={5}>
          <Item>
            <TableLabel>Недействующие промокоды</TableLabel>
            <DefaultInput fullWidth value={inactivePromocodes} />
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <TableLabel>Дополнительная информация</TableLabel>
            <DefaultInput fullWidth value={profile.additional} />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default CommonInformation;
