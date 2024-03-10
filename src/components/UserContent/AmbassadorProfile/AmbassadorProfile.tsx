import { useEffect, useState } from 'react';
import EditIcon from '@icons/Edit';
import StatusPicker from '../../Layout/StatusPicker/StatusPicker';
import ProfileSubmitButton from '@/assets/icons/ProfileSubmitButton';
import styles from './AmbassadorProfile.module.scss';
import { RootState } from '@/services/redux/store';
import { useAppSelector } from '@/services/typeHooks';
import { IconButton } from '@/components/ui/Buttons/Buttons';

const AmbassadorProfile: React.FC = () => {
  const ambassador = useAppSelector(
    (state: RootState) => state.ambassadors.ambassador
  );
  const profile = ambassador?.profile;

  const [isEditable, setIsEditable] = useState(false);
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
        <h3 className={styles.container__name}>{ambassador?.name}</h3>

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
      <StatusPicker />

      <ul className={styles.container__list}>
        <li className={styles.container__caption}>
          E-mail
          {isEditable ? (
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <span className={styles.container__data}>{email}</span>
          )}
        </li>

        <li className={styles.container__caption}>
          Telegram
          {isEditable ? (
            <input
              type="text"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
            />
          ) : (
            <span className={styles.container__data}>{telegram}</span>
          )}
        </li>

        <li className={styles.container__caption}>
          Телефон
          {isEditable ? (
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          ) : (
            <span className={styles.container__data}>{phone}</span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default AmbassadorProfile;
