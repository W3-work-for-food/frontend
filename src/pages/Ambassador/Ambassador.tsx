import Content from '@components/Layout/Content/Content';
import UserContent from '@components/UserContent/UserContent';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '@components/ui/Buttons/Buttons';
import ArrowLeft from '@icons/ArrowLeft';
import Plus from '@icons/Plus';
import UniversalModal from '@components/ui/Modal/Modal';
import { DefaultTypography, TableLabel } from '@components/ui/Form/Elements';
import { Box } from '@mui/material';
import { DefaultInput } from '@components/ui/Inputs/Inputs';
import { useAppDispatch, useAppSelector } from '@services/typeHooks';
import { pushAmbassador } from '@services/redux/slices/ambassadors/ambassadors';
import { RootState } from '@services/redux/store';
import { IAmbassador } from '@utils/types/ambassadorTypes';
import { postMerch, pushMerch } from '@services/redux/slices/merch/merch';
import { IMerch } from '@utils/types/merchTypes';
import DefaultSelect from '@components/ui/Dropdown/Dropdown';
import CommentCard from '@/components/UserContent/CommentCard/CommentCard';
import AmbassadorProfile from '@/components/UserContent/AmbassadorProfile/AmbassadorProfile';
import styles from './Ambassador.module.scss';

const Ambassador = () => {
  const [value, setValue] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentAmbassador, setCurrentAmbassador] =
    useState<IAmbassador | null>(null);
  const [currentMerch, setCurrentMerch] = useState<IMerch[] | null>(null);
  const user = useAppSelector((state: RootState) => state.user.user);
  const [comment, setComment] = useState('');
  const [selectedMerchType, setSelectedMerchType] = useState('');
  const { id } = useParams();
  const access = localStorage.getItem('accessToken') ?? '';
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(pushAmbassador(id));
      dispatch(pushMerch(id));
    }
  }, [dispatch, id]);

  const ambassador = useAppSelector(
    (state: RootState) => state.ambassadors.ambassador
  );
  const merch = useAppSelector((state: RootState) => state.merchs.merch);

  useEffect(() => {
    setCurrentAmbassador(ambassador);
    setCurrentMerch(merch);
  }, [ambassador, merch]);

  if (!currentAmbassador) return null;
  if (!currentMerch) return null;

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleMerchTypeChange = (val: string | number) => {
    setSelectedMerchType(val.toString());
  };

  const handleSubmit = () => {
    const merchItem = currentMerch[0].merch.find(
      (m) => m.merch_type === selectedMerchType
    );

    if (!merchItem) {
      console.error('Selected merch type is not found');
      return;
    }

    const requestBody = {
      id: id ? parseInt(id, 10) : 0,
      date: '123456789', // Add the 'datets' property with a valid value
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
      },
      ambassador: {
        id: currentAmbassador.id, // Add the 'id' property if it's required
        pub_date: currentAmbassador.pub_date,
        telegram: currentAmbassador.telegram,
        name: currentAmbassador.name,
        status: currentAmbassador.status,
        comment,
        guide_status: currentAmbassador.guide_status,
        profile: currentAmbassador.profile.id, // Assuming 'profile' has an 'id' property
        address: currentAmbassador.address.id,
      },
      merch: [
        {
          id: merchItem.id,
          merch_type: merchItem.merch_type,
          category: merchItem.category,
          price: merchItem.price,
        },
      ],
      amount: 12312312,
      sized_merch: [],
    };

    console.log(requestBody);
    dispatch(postMerch({ access, id: id || '', body: requestBody }));
  };

  const merchItems = currentMerch[0].merch.map((m) => ({
    label: m.merch_type,
    value: m.merch_type,
  }));

  const modalContent = (
    <DefaultTypography className={styles.modal}>
      Отправка мерча
      <Box component="div" className={styles.modal__fields}>
        <Box
          component="div"
          className={`${styles.modal__field} ${styles.modal__field_type}`}
        >
          <TableLabel>Тип мерча *</TableLabel>
          <DefaultSelect
            label="Выберите тип"
            items={merchItems}
            defaultValue=""
            onChange={handleMerchTypeChange}
            fullWidth={false}
          />
        </Box>
        <Box
          component="div"
          className={`${styles.modal__field} ${styles.modal__field_comment}`}
        >
          <TableLabel>Комментарий *</TableLabel>
          <DefaultInput
            className={styles.modal__input}
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Укажите, за что отправляем подарок"
          />
        </Box>
      </Box>
    </DefaultTypography>
  );

  return (
    <>
      <div className={styles.controls}>
        <SecondaryButton
          component={Link}
          to="/ambassadors"
          startIcon={<ArrowLeft />}
          style={{
            minWidth: '40px',
            height: '40px',
            padding: '0',
            borderRadius: '12px',
          }}
        />
        {value === 2 && (
          <PrimaryButton
            onClick={handleModal}
            className={styles.button}
            style={{
              gap: '8px',
              padding: '0 16px',
              borderRadius: '16px',
              height: '40px',
              width: '169px',
            }}
            startIcon={<Plus />}
          >
            Отправить мерч
          </PrimaryButton>
        )}
      </div>
      <Content className={styles.ambassadorPage}>
        <AmbassadorProfile />
        <CommentCard />
        <UserContent
          value={value}
          onChange={handleChange}
          ambassador={currentAmbassador}
        />
        <UniversalModal
          open={modalOpen}
          onClose={handleModal}
          content={modalContent}
          cancelButtonText="Отменить"
          confirmButtonText="Отправить"
          onConfirm={handleSubmit}
          onCancel={handleModal}
          size="large"
        />
      </Content>
    </>
  );
};

export default Ambassador;
