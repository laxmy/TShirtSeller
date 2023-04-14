import { TextField, InputAdornment } from '@mui/material';
import { ChangeEventHandler } from 'react';

export interface PriceFieldProps {
  property: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error: boolean;
}
export const PriceField = ({ property, value, onChange, error }: PriceFieldProps) => {
  return (
    <TextField
      label="Price"
      name={property}
      value={value}
      onChange={onChange}
      sx={{ width: '25ch' }}
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>
      }}
      variant="filled"
      error={error}
    />
  );
};
