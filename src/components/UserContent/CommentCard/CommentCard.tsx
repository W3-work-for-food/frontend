import { useState } from 'react';
import EditIcon from '@icons/Edit';
import ProfileSubmitButton from '@/assets/icons/ProfileSubmitButton';
import styles from './CommentCard.module.scss';

const CommentCard: React.FC = () => {
  const [text, setText] = useState('');
  const [isEditable, setIsEditable] = useState(false);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(evt.target.value);
  };

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleSubmit = () => {
    if (isEditable) {
      setIsEditable(false);
    }
  };

  return (
    <div className={styles.container__block}>
      <div className={styles.container__header}>
        <h3 className={styles.container__title}>Комментарий</h3>
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
      <textarea
        className={styles.container__form}
        id="commentTextarea"
        value={text}
        onChange={handleChange}
        onBlur={handleSubmit}
        disabled={!isEditable}
        placeholder={`Нажмите на кнопку редактирования, чтобы 
добавить текст`}
      />
    </div>
  );
};

export default CommentCard;
