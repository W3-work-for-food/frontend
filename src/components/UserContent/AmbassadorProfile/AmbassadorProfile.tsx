import { useEffect, useState } from 'react';
import EditIcon from '@icons/Edit';
import { Box, Grid } from '@mui/material';
import StatusPicker from '../../Layout/StatusPicker/StatusPicker';
import ProfileSubmitButton from '@/assets/icons/ProfileSubmitButton';
import styles from './AmbassadorProfile.module.scss';
import { RootState } from '@/services/redux/store';
import { useAppSelector } from '@/services/typeHooks';
import { IconButton } from '@/components/ui/Buttons/Buttons';
import { DefaultInput } from '@/components/ui/Inputs/Inputs';
import { Caption, TableLabel } from '@/components/ui/Form/Elements';

const AmbassadorProfile: React.FC = () => {
  const ambassador = useAppSelector(
    (state: RootState) => state.ambassadors.ambassador
  );
  const profile = ambassador?.profile;

  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState(ambassador?.name ?? '');
  const [email, setEmail] = useState(profile?.email ?? '');
  const [telegram, setTelegram] = useState(ambassador?.telegram ?? '');
  const [phone, setPhone] = useState(profile?.phone ?? '');

  useEffect(() => {
    if (ambassador) {
      setEmail(profile?.email ?? '');
      setTelegram(ambassador?.telegram ?? '');
      setPhone(profile?.phone ?? '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ambassador]);

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleSubmit = () => {
    if (isEditable) {
      setIsEditable(false);
    }
  };
  if (!profile) return null;

  return (
    <div className={styles.container__block}>
      <div className={styles.container__header}>
        {isEditable ? (
          <Grid>
            <Box>
              <Caption style={{ marginBottom: 14 }}>Данные амбассадора</Caption>
              <TableLabel>Имя</TableLabel>
              <DefaultInput
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
          </Grid>
        ) : (
          <h3 className={styles.container__name}>{name}</h3>
        )}

        <IconButton
          className={styles.container__button}
          type="button"
          onClick={isEditable ? handleSubmit : handleEdit}
          aria-controls="commentTextarea"
          aria-label="Редактировать комментарий"
        >
          {isEditable ? <ProfileSubmitButton /> : <EditIcon />}
        </IconButton>
      </div>
      {!isEditable ? <StatusPicker /> : null}
      <ul className={styles.container__list}>
        <li className={styles.container__caption}>
          {isEditable ? (
            <>
              <TableLabel>E-mail</TableLabel>
              <DefaultInput
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </>
          ) : (
            <>
              E-mail
              <span className={styles.container__data}>
                <a href={`mailto:${email}`}>{email}</a>
              </span>
            </>
          )}
        </li>

        <li className={styles.container__caption}>
          {isEditable ? (
            <>
              <TableLabel>Telegram</TableLabel>
              <DefaultInput
                type="text"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
              />
            </>
          ) : (
            <>
              Telegram
              <span className={styles.container__data}>
                <a href={`telegram:${telegram}`}>{telegram}</a>
              </span>
            </>
          )}
        </li>

        <li className={styles.container__caption}>
          {isEditable ? (
            <>
              <TableLabel>Телефон</TableLabel>
              <DefaultInput
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </>
          ) : (
            <>
              Телефон
              <span className={styles.container__data}>
                <a href={`tel:${phone}`}>{phone}</a>
              </span>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default AmbassadorProfile;
