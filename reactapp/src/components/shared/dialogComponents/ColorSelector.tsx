import { ReactNode } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Avatar,
  Typography,
  Box
} from '@mui/material';
import { availableColors } from '../../defaults';

export interface ColorSelectorProps {
  property: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
}

const getColorItem = (
  colorItem:
    | {
        color: string;
        displayName: string;
      }
    | undefined
) => {
  if (!colorItem) {
    return <Typography variant="inherit">Unknown color</Typography>;
  }
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: 0.5 }}>
      <Typography variant="inherit">{colorItem.displayName}</Typography>
      <Avatar sx={{ bgcolor: colorItem.color, width: 20, height: 20, ml: 1 }}> </Avatar>
    </Box>
  );
};

export const ColorSelector = ({ property, value, onChange }: ColorSelectorProps) => {
  return (
    <FormControl sx={{ m: 1 }} size="small" fullWidth={true}>
      <InputLabel id="tshirt-color">Color</InputLabel>
      <Select<string>
        labelId="tshirt-color"
        name={property}
        value={value}
        onChange={onChange}
        label="Color"
        renderValue={(value) => getColorItem(availableColors.find((item) => item.color === value))}>
        {availableColors.map((colorItem) => (
          <MenuItem key={colorItem.color} value={colorItem.color as any}>
            {/* Casting to any above due to this bug: https://github.com/mui/material-ui/issues/14286*/}
            {getColorItem(colorItem)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
