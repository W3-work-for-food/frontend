import { useState } from 'react';
import EditIcon from '@icons/Edit';
import StatusPicker from '../StatusPicker/StatusPicker';
import ProfileSubmitButton from '@/assets/icons/ProfileSubmitButton';
import styles from './AmbassadorProfile.module.scss';

const AmbassadorProfile: React.FC = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [email, setEmail] = useState('kiralex94@gmail.com');
  const [telegram, setTelegram] = useState('@kirill1194');
  const [phone, setPhone] = useState('+7-987-654-32-10');

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleSubmit = () => {
    if (isEditable) {
      console.log('отправить форму');
      setIsEditable(false);
    }
  };

  return (
    <div className={styles.container__block}>
      <div className={styles.container__header}>
        <h3 className={styles.container__name}>Кирилл Алексеев</h3>

        <button
          className={styles.container__button}
          type="button"
          onClick={isEditable ? handleSubmit : handleEdit}
          aria-controls="commentTextarea"
          aria-label="Редактировать комментарий"
        >
          {isEditable ? <ProfileSubmitButton /> : <EditIcon />}
        </button>
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
