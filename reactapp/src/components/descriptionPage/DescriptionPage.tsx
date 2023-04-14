import { useParams, useNavigate } from 'react-router-dom';
import { useTShirtsContext } from '../../providers';
import styles from './DescriptionPage.module.css';
import { Box, Paper, Table, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { EditTShirtDialog } from '../editTshirt/EditTShirtDialog';
import { DeleteTShirtDialog } from '../DeleteTShirtDialog';

export const DescriptionPage = () => {
  const { tShirts } = useTShirtsContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const tShirt = tShirts.find((tee) => tee.id === id);
  if (!tShirt) {
    return <div> An error occured! Selected item was not found</div>;
  }
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.actionsContainer}>
        <EditTShirtDialog item={tShirt} />
        <DeleteTShirtDialog item={tShirt} onCloseCallback={() => navigate('/')} />
      </div>
      <Typography variant="subtitle2">{tShirt.style} T SHIRT</Typography>
      <div className={styles.descriptionBody}>
        <Paper>
          <img src={tShirt.previewUrl} width={`60%`} />
        </Paper>
        <div>
          <Table aria-label="tShirt table">
            <TableHead></TableHead>
            <TableRow>
              <TableCell>Size</TableCell>
              <TableCell align="right">{tShirt.size}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Style</TableCell>
              <TableCell align="right">{tShirt.style}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Gender</TableCell>
              <TableCell align="right">{tShirt.gender}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Price</TableCell>
              <TableCell align="right">${tShirt.priceInUSD}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Made</TableCell>
              <TableCell align="right">${tShirt.made}</TableCell>
            </TableRow>
          </Table>
        </div>
      </div>
      <div className={styles.textSection}>
        <Typography>{tShirt.description}</Typography>
      </div>
    </div>
  );
};
