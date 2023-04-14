import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogProps,
  TextField,
  Button,
  Box
} from '@mui/material';
import {
  ColorSelector,
  GenderSelector,
  MadeField,
  PreviewField,
  PriceField,
  SizeSelector,
  StyleSelector
} from './dialogComponents';
import { TShirt } from '../../types';
import { isNumber, isUrl } from '../utils';

const defaultTShirt: TShirt = {
  id: '123',
  style: 'v-neck',
  size: 'M',
  priceInUSD: 40,
  gender: 'Female',
  made: 'India',
  previewUrl:
    'https://i0.wp.com/sellmerch.org/wp-content/uploads/2019/12/Long-sleeve-Crew-neck-T-shirts_122719.png?w=500&ssl=1',
  color: '#ff9800',
  description: 'test'
};

type TShirtKeys = keyof TShirt;

type TShirtValidation = {
  [K in TShirtKeys]?: {
    isValid: boolean;
    message: string;
  };
};

export interface TShirtDialogProps extends DialogProps {
  open: boolean;
  title: string;
  item?: TShirt;
  onHandleSave: (item: TShirt) => void;
  onHandleClose: () => void;
}

export const TShirtDialog = ({
  title,
  container,
  open,
  onHandleClose,
  onHandleSave,
  item
}: TShirtDialogProps) => {
  const [tShirt, setTShirt] = useState<TShirt>(item ?? defaultTShirt);

  const stateValidation: TShirtValidation = {
    priceInUSD: {
      isValid: isNumber(`${tShirt.priceInUSD}`),
      message: 'Needs to be a number'
    },
    previewUrl: {
      isValid: isUrl(`${tShirt.previewUrl}`),
      message: 'Needs to be a number'
    }
  };

  const isValidTShirt = Object.keys(stateValidation).every(
    (key) => stateValidation[key as TShirtKeys]?.isValid
  );

  const handleValueChange = (e: any) => {
    setTShirt({
      ...tShirt,
      [e.target.name]: e.target.value
    });
  };
  return (
    <Dialog open={open} onClose={onHandleClose} container={container} fullWidth={true}>
      <DialogTitle sx={{ padding: 3 }}>{title}</DialogTitle>
      <DialogContent sx={{ padding: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <SizeSelector property={'size'} value={tShirt.size} onChange={handleValueChange} />
          <StyleSelector property={'style'} value={tShirt.style} onChange={handleValueChange} />
          <ColorSelector property={'color'} value={tShirt.color} onChange={handleValueChange} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}>
            <PriceField
              property={'priceInUSD'}
              value={`${tShirt.priceInUSD}`}
              onChange={handleValueChange}
              error={!stateValidation.priceInUSD?.isValid ?? false}
            />
            <GenderSelector
              property={'gender'}
              value={tShirt.gender}
              onChange={handleValueChange}
            />
          </Box>
          <MadeField property={'made'} value={`${tShirt.made}`} onChange={handleValueChange} />
          <PreviewField
            property={'previewUrl'}
            value={`${tShirt.previewUrl}`}
            onChange={handleValueChange}
            error={!stateValidation.previewUrl?.isValid ?? false}
          />
          <TextField
            name={'description'}
            label="Description"
            multiline
            rows={2}
            defaultValue="Optional Description"
            fullWidth={true}
            sx={{ m: 2 }}
          />
        </Box>
        <DialogActions>
          <Button onClick={onHandleClose}>Cancel</Button>
          <Button onClick={() => onHandleSave(tShirt)} disabled={!isValidTShirt}>
            Save
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
