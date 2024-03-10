import React from 'react';
// import vars from '@styles/_export.module.scss';
import styles from './StatusPicker.module.scss';

const StatusPicker = () => {
  const [status, setStatus] = React.useState('Активный');

  const handleChange = (event: { target: { value: string } }) => {
    setStatus(event.target.value as string);
  };

  return (
    <div>
      <select
        className={styles.menu__list}
        aria-label="меню выбора"
        id="my-select"
        value={status}
        onChange={handleChange}
      >
        <option
          className={`${styles.menu__option} ${styles.menu_active}`}
          value="Активный"
        >
          Активный
        </option>
        <option
          className={`${styles.menu__option} ${styles.menu_pause}`}
          value="На паузе"
        >
          На паузе
        </option>
        <option
          className={`${styles.menu__option} ${styles.menu_notAmbassador}`}
          value="Не амбассадор"
        >
          Не амбассадор
        </option>
        <option
          className={`${styles.menu__option} ${styles.menu__container}`}
          value="Уточняется"
        >
          Уточняется
        </option>
      </select>
    </div>
  );
};

export default StatusPicker;
