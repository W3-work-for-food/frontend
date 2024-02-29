import Header from '@components/Layout/Header/Header';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';
import {
  IconButton,
  PrimaryButton,
  SecondaryButton,
} from '@/components/Layout/Buttons/Buttons';
import MainCheckbox from '@/components/Layout/CheckBoxes/CheckBoxes';
import Logout from '@/assets/icons/Logout';
import Bin from '@/assets/icons/Bin';

const Home = () => {
  return (
    <>
      <Header />
      <Box
        style={{
          display: 'flex',
          padding: '24px',
          margin: '24px',
          flexDirection: 'row',
          gap: '16px',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
        }}
      >
        <PrimaryButton>Primary</PrimaryButton>
        <PrimaryButton disabled>Primary</PrimaryButton>
        <PrimaryButton startIcon={<AddIcon />}>Primary</PrimaryButton>
        <PrimaryButton startIcon={<AddIcon />} disabled>
          Primary
        </PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <SecondaryButton disabled>Secondary</SecondaryButton>
      </Box>
      <Box
        style={{
          display: 'flex',
          padding: '24px',
          margin: '24px',
          flexDirection: 'row',
          gap: '16px',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
        }}
      >
        <IconButton startIcon={<Bin />} />
        <IconButton startIcon={<Logout />} />
        <IconButton startIcon={<Logout />} />
        <IconButton className="">1</IconButton>
        <IconButton className="active">99</IconButton>
        <IconButton disabled className="active">
          55
        </IconButton>
        <IconButton disabled startIcon={<Bin />} />
        <IconButton disabled startIcon={<Logout />} />
      </Box>
      <Box
        style={{
          display: 'flex',
          padding: '24px',
          margin: '24px',
          flexDirection: 'row',
          gap: '16px',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
        }}
      >
        <MainCheckbox defaultChecked />
        <MainCheckbox />
        <MainCheckbox disabled />
        <MainCheckbox disabled checked />
      </Box>
      <FormGroup
        style={{
          display: 'flex',
          padding: '24px',
          margin: '24px',
          flexDirection: 'row',
          gap: '16px',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
        }}
      >
        <FormControlLabel
          control={<MainCheckbox defaultChecked />}
          label="Label"
        />
        <FormControlLabel
          required
          control={<MainCheckbox />}
          label="Required"
        />
        <FormControlLabel
          disabled
          control={<MainCheckbox />}
          label="Disabled"
        />
      </FormGroup>
    </>
  );
};

export default Home;
