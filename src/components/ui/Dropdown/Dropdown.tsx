import { styled } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import vars from '@styles/_export.module.scss';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types'; // Добавим импорт для пропс-валидации
import { useCallback, useState } from 'react';
import ArrowDown from '@/assets/icons/ArrowDown';
import './Dropdowm.scss';

const DefaultDropDown = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: vars.borderRadius,
    position: 'relative',
    backgroundColor: vars.defaultInputBgColor,
    border: `1px solid ${vars.defaultInputBorderColor}`,
    fontSize: vars.fsMain,
    padding: '10px 44px 10px 12px',
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
}: {
  label: string;
  items: Array<{ label: string; value: string | number }>;
  defaultValue: string | null;
}) => {
  const [selectedValue, setSelectedValue] = useState<string | number>(
    defaultValue || ''
  );

  const handleChange = (event: { target: { value: string | number } }) => {
    setSelectedValue(event.target.value);
  };

  const IconComponent = useCallback(
    () => <ArrowDown className="custom-arrow-icon" />,
    []
  );

  return (
    <FormControl sx={{ m: 1 }} variant="filled">
      <Select
        value={selectedValue}
        label={label}
        onChange={handleChange}
        input={<DefaultDropDown />}
        IconComponent={IconComponent}
        displayEmpty
      >
        <MenuItem value="">{label}</MenuItem>
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
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        // Add other allowed types if necessary
      ]).isRequired,
    })
  ).isRequired,
};

export default DefaultSelect;

// const items = [
//   { label: 'Ten', value: 10 },
//   { label: 'Twenty', value: 20 },
//   { label: 'Thirty', value: 30 },
// ];
// <DefaultSelect label="Выбрать год" items={items} defaultValue="" />;
