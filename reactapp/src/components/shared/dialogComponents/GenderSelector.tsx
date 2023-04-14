import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
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
