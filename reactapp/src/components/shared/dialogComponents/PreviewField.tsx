import { TextField, Box } from '@mui/material';
import { ChangeEventHandler } from 'react';

export interface PreviewFieldProps {
  property: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: boolean;
}
export const PreviewField = ({ property, value, onChange, error }: PreviewFieldProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <TextField
        label="Preview"
        name={property}
        value={value}
        onChange={onChange}
        variant="filled"
        error={error}
        sx={{ width: 3 / 4 }}
      />
      <img src={value} alt="preview" height={`60px`} />
    </Box>
  );
};
