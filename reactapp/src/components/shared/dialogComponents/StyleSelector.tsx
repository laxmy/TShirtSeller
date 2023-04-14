import { ReactNode } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { TShirtStyle } from '../../../types';
import { TShirtStyles } from '../../defaults';

export interface StyleSelectorProps {
  property: string;
  value: TShirtStyle;
  onChange: (event: SelectChangeEvent<TShirtStyle>, child: ReactNode) => void;
}

export const StyleSelector = ({ property, value, onChange }: StyleSelectorProps) => {
  return (
    <FormControl size="small" fullWidth={true}>
      <InputLabel id="tshirt-style">Style</InputLabel>
      <Select<TShirtStyle>
        labelId="tshirt-style"
        name={property}
        value={value}
        onChange={onChange}
        label="Size">
        {TShirtStyles.map((tStyle) => (
          <MenuItem key={tStyle} value={tStyle as any} style={{ display: `flex` }}>
            {tStyle}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
