import { ReactNode } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { TShirtSize } from '../../../types';
import { availableSizes } from '../../defaults';

export interface SizeSelectorProps {
  property: string;
  value: TShirtSize;
  onChange: (event: SelectChangeEvent<TShirtSize>, child: ReactNode) => void;
}

export const SizeSelector = ({ property, value, onChange }: SizeSelectorProps) => {
  return (
    <FormControl sx={{ m: 1 }} size="small" fullWidth={true}>
      <InputLabel id="tshirt-size">Size</InputLabel>
      <Select<TShirtSize>
        labelId="tshirt-size"
        name={property}
        value={value}
        onChange={onChange}
        label="Size">
        {availableSizes.map((size) => (
          <MenuItem key={size.value} value={size.value}>
            {size.displayName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
