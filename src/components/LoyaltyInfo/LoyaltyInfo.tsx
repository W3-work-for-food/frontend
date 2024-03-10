import { Box } from '@mui/material';
import { DefaultInput } from '@components/ui/Inputs/Inputs';
import { TableLabel } from '@components/ui/Form/Elements';
import { FC } from 'react';
import { IAmbassador } from '@utils/types/ambassadorTypes';
import styles from './LoyaltyInfo.module.scss';

interface AddressFieldProps {
  label: string;
  value: string | number;
  idSuffix: string;
}

const AddressField: FC<AddressFieldProps> = ({ label, value, idSuffix }) => (
  <Box component="div" className={styles.info__field}>
    <TableLabel>{label}</TableLabel>
    <DefaultInput
      className={styles.info__input}
      id={`address-${idSuffix}`}
      aria-describedby={`address-${idSuffix}-text`}
      value={value}
      disabled
    />
  </Box>
);

interface LoyaltyInfoProps {
  ambassador: IAmbassador;
}

const LoyaltyInfo: FC<LoyaltyInfoProps> = ({ ambassador }) => {
  return (
    <Box component="div" className={styles.info}>
      <Box component="p" className={styles.info__title}>
        Информация по доставке
      </Box>
      <Box component="div" className={styles.info__content}>
        <Box component="div" className={styles.info__contentSizes}>
          <AddressField
            label="Размер одежды *"
            value={ambassador.profile.clothing_size}
            idSuffix="clothing-size"
          />
          <AddressField
            label="Размер ноги *"
            value={ambassador.profile.foot_size}
            idSuffix="foot-size"
          />
        </Box>
        <Box component="div" className={styles.info__contentAddress}>
          <Box component="p" className={styles.info__titleSm}>
            Адрес
          </Box>
          <Box component="div" className={styles.info__addressFields}>
            <Box component="div" className={styles.info__addressFieldsRow}>
              <AddressField
                label="Страна проживания *"
                value={ambassador.address.country}
                idSuffix="country"
              />
              <AddressField
                label="Индекс *"
                value={ambassador.address.postal_code}
                idSuffix="postal-code"
              />
            </Box>
            <Box component="div" className={styles.info__addressFieldsRow}>
              <AddressField
                label="Город проживания *"
                value={ambassador.address.city}
                idSuffix="city"
              />
              <AddressField
                label="Область/район"
                value={ambassador.address.region}
                idSuffix="region"
              />
            </Box>
            <AddressField
              label="Адрес проживания *"
              value={ambassador.address.address}
              idSuffix="address"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoyaltyInfo;
