import { useEffect, useState } from 'react';
import EditIcon from '@icons/Edit';
import ProfileSubmitButton from '@/assets/icons/ProfileSubmitButton';
import styles from './CommentCard.module.scss';
import { IconButton } from '@/components/ui/Buttons/Buttons';
import { useAppSelector } from '@/services/typeHooks';
import { RootState } from '@/services/redux/store';

const CommentCard: React.FC = () => {
  const ambassador = useAppSelector(
    (state: RootState) => state.ambassadors.ambassador
  );

  const [text, setText] = useState(ambassador?.comment ?? '');
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    if (ambassador) {
      setText(ambassador?.comment ?? '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ambassador]);

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
