import { styled } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import vars from '@styles/_export.module.scss';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types'; // Добавим импорт для пропс-валидации
import { useCallback, useState } from 'react';
import ArrowDown from '@/assets/icons/ArrowDown';
import './Dropdown.scss';

const DefaultDropDown = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: vars.borderRadius,
    position: 'relative',
    backgroundColor: vars.defaultInputBgColor,
    border: `1px solid ${vars.defaultInputBorderColor}`,
    fontSize: vars.fsSecondMain,
    padding: '7px 44px 8px 12px',
    fontFamily: [vars.mainFont],
    '&:hover': {
      borderRadius: vars.borderRadius,
      borderColor: vars.defaultInputHoverBorderColor,
    },
    '&:focus': {
      borderRadius: vars.borderRadius,
      borderColor: vars.defaultInputFocusedBorderColor,
    },
  },
}));

const DefaultSelect = ({
  label,
  items,
  defaultValue = '',
  fullWidth = true,
  onChange,
}: {
  label: string;
  items: Array<{ label: string; value: string | number }>;
  defaultValue: string | null;
  fullWidth: boolean;
  onChange?: (value: string | number) => void;
}) => {
  const [selectedValue, setSelectedValue] = useState<string | number>(
    defaultValue || ''
  );

  const handleChange = (event: { target: { value: string | number } }) => {
    const { value } = event.target;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  const IconComponent = useCallback(
    () => <ArrowDown className="custom-arrow-icon" />,
    []
  );

  return (
    <FormControl
      fullWidth={fullWidth ? true : undefined}
      sx={{ m: 0 }}
      style={{ width: '100%', margin: '0', height: '40px' }}
      variant="filled"
    >
      <Select
        fullWidth={fullWidth ? true : undefined}
        value={selectedValue}
        onChange={handleChange}
        input={<DefaultDropDown />}
        IconComponent={IconComponent}
        displayEmpty
        style={{
          height: '38px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {label && (
          <MenuItem disabled value="">
            {label}
          </MenuItem>
        )}
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
DefaultSelect.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DefaultSelect.defaultProps = {
  defaultValue: '',
  onChange: undefined, // or provide a default function if needed
};

export default DefaultSelect;
