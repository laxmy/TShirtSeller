import { Button, Card } from '@mui/material';
import { TShirtDialog } from '../shared/TShirtDialog';
import { useActiveDialogContext, useTShirtsContext } from '../../providers';
import { TShirt } from '../../types';
import { addTShirt } from '../../shared';
import styles from './AddTShirtDialog.module.css';

export function AddTShirtDialog() {
  const { activeContext, setActiveContext } = useActiveDialogContext();
  const { setTShirts, tShirts } = useTShirtsContext();

  const onHandleClose = () => setActiveContext(undefined);

  const onHandleSave = async (item: Omit<TShirt, 'id'>) => {
    const addedItem = await addTShirt(item);
    setTShirts([...tShirts, addedItem]);
    setActiveContext(undefined);
  };

  const onAddClick = () => setActiveContext({ type: 'add' });

  return (
    <>
      <Card className={styles.addButtonCard}>
        <Button variant="contained" onClick={onAddClick}>
          Add New +
        </Button>
      </Card>
      <TShirtDialog
        open={activeContext !== undefined && activeContext.type === 'add'}
        onHandleClose={onHandleClose}
        onHandleSave={onHandleSave}
        container={document.body}
        title={'Add New TShirt'}
      />
    </>
  );
}
