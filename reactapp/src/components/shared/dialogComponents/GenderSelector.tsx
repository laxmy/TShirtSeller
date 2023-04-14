import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Gender } from '../../../types';

export interface GenderSelectorProps {
  property: string;
  value: Gender;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}

export const GenderSelector = ({ property, value, onChange }: GenderSelectorProps) => {
  return (
    <FormControl>
      <FormLabel id="gender-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="gender-label"
        name={property}
        value={value}
        onChange={onChange}
        row>
        <FormControlLabel value="Female" control={<Radio />} label="Female" />
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
};
