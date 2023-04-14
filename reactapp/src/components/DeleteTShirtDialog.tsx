import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton
} from '@mui/material';
import { TShirt } from '../types';
import { useActiveDialogContext, useTShirtsContext } from '../providers';
import { DeleteIcon } from '../icons/DeleteIcon';
import { deleteTShirt } from '../shared';

export interface DeleteTShirtDialogProps {
  item: TShirt;
  onCloseCallback?: () => void;
}

export function DeleteTShirtDialog({ item, onCloseCallback }: DeleteTShirtDialogProps) {
  const { activeContext, setActiveContext } = useActiveDialogContext();
  const { setTShirts, tShirts } = useTShirtsContext();

  const onHandleClose = () => setActiveContext(undefined);

  const onDelete = async () => {
    const result = await deleteTShirt(item);
    setTShirts(tShirts.filter((tee) => tee.id !== item.id));
    setActiveContext(undefined);
    onCloseCallback && onCloseCallback();
  };

  const onClick = () => {
    setActiveContext({ type: 'delete' });
  };

  return (
    <>
      <IconButton onClick={onClick} color="error">
        <DeleteIcon color="error" width={24} />
      </IconButton>
      <Dialog
        open={activeContext !== undefined && activeContext.type === 'delete'}
        onClose={onHandleClose}
        fullWidth={true}>
        <DialogTitle sx={{ padding: 3 }}>CONFIRM DELETE</DialogTitle>
        <DialogContent sx={{ padding: 5 }}>
          <DialogContentText>
            Do you really want to delete this item? This action is irreversible
          </DialogContentText>
          <DialogActions>
            <Button onClick={onHandleClose}>Cancel</Button>
            <Button onClick={onDelete}>Delete</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}
