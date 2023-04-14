import { TextField } from '@mui/material';
import { ChangeEventHandler } from 'react';

export interface MadeFieldProps {
  property: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: boolean;
}
export const MadeField = ({ property, value, onChange, error }: MadeFieldProps) => {
  return (
    <TextField
      label="Made"
      name={property}
      value={value}
      onChange={onChange}
      variant="filled"
      error={error}
      fullWidth
    />
  );
};
