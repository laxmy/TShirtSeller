import { IconButton } from '@mui/material';
import { TShirt } from '../types';
import { useActiveDialogContext, useTShirtsContext } from '../providers';
import { TShirtDialog } from './shared/TShirtDialog';
import { EditIcon } from '../icons';
import { editTShirt } from '../shared';

export function EditTShirtDialog({ item }: { item: TShirt }) {
  const { activeContext, setActiveContext } = useActiveDialogContext();
  const { setTShirts, tShirts } = useTShirtsContext();

  const onHandleClose = () => setActiveContext(undefined);

  const onHandleSave = async (item: TShirt) => {
    const result = await editTShirt(item);
    setTShirts(tShirts.map((tee) => (tee.id === item.id ? item : tee)));
    setActiveContext(undefined);
  };

  const onEditClick = () => {
    setActiveContext({ type: 'edit', itemId: item.id });
  };

  return (
    <>
      <IconButton onClick={onEditClick} color="primary">
        <EditIcon color="primary" width={24} />
      </IconButton>
      <TShirtDialog
        open={
          activeContext !== undefined &&
          activeContext.type === 'edit' &&
          activeContext.itemId === item.id
        }
        onHandleClose={onHandleClose}
        onHandleSave={onHandleSave}
        container={document.body}
        title={'Edit a TShirt'}
        item={item}
      />
    </>
  );
}
