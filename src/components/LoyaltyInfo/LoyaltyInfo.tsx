import styles from './LoyaltyInfo.module.scss';
import { Box } from '@mui/material';
import { DefaultInput } from '@components/ui/Inputs/Inputs';
import { TableLabel } from '@components/ui/Form/Elements';
const LoyaltyInfo = () => {
  return (
    <Box component="div" className={styles.info}>
      <Box component="p" className={styles.info__title}>
        Информация по доставке
      </Box>
      <Box component="div" className={styles.info__content}>
        <Box component="div" className={styles.info__content_sizes}>
          <Box component="div" className={`${styles.info__field} ${styles.info__field_clothes}`}>
            <TableLabel>Размер одежды *</TableLabel>
            <DefaultInput className={styles.info__input} id="clothing-size" aria-describedby="clothing-size-text" placeholder="XL" disabled />
          </Box>
          <Box component="div" className={`${styles.info__field} ${styles.info__field_step}`}>
            <TableLabel>Размер одежды *</TableLabel>
            <DefaultInput className={styles.info__input} id="clothing-size" aria-describedby="clothing-size-text" placeholder="43" disabled />
          </Box>
        </Box>
        <Box component="div" className={styles.info__content_adress}>
          <Box component="p" className={styles.info__title_sm}>
            Адрес
          </Box>
          <Box component="div" className={styles.info__addressFields}>
            <Box component="div" className={styles.info__addressFields_row}>
              <Box component="div" className={`${styles.info__field} ${styles.info__field_country}`}>
                <TableLabel>Страна проживания *</TableLabel>
                <DefaultInput className={styles.info__input} id="clothing-size" aria-describedby="clothing-size-text" placeholder="Россия" disabled />
              </Box>
              <Box component="div" className={`${styles.info__field} ${styles.info__field_index}`}>
                <TableLabel>Индекс *</TableLabel>
                <DefaultInput className={styles.info__input} id="clothing-size" aria-describedby="clothing-size-text" placeholder="145604" disabled />
              </Box>
            </Box>
            <Box component="div" className={styles.info__addressFields_row}>
              <Box component="div" className={`${styles.info__field} ${styles.info__field_city}`}>
                <TableLabel>Город проживания *</TableLabel>
                <DefaultInput className={styles.info__input} id="clothing-size" aria-describedby="clothing-size-text" placeholder="Москва" disabled />
              </Box>
              <Box component="div" className={`${styles.info__field} ${styles.info__field_region}`}>
                <TableLabel>Область/район</TableLabel>
                <DefaultInput className={styles.info__input} id="clothing-size" aria-describedby="clothing-size-text" disabled />
              </Box>
            </Box>
            <Box component="div" className={`${styles.info__field} ${styles.info__field_adress}`}>
              <TableLabel>Адрес проживания *</TableLabel>
              <DefaultInput className={styles.info__input} id="clothing-size" aria-describedby="clothing-size-text" placeholder="ул. Большая Грузинская 87, стр. 7, кв. 678" disabled />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoyaltyInfo;