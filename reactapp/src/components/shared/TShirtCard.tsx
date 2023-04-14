import { Card, Box, Chip, CardContent, Typography } from '@mui/material';
import { TShirt } from '../../types';
import { EditTShirtDialog } from '../EditTShirtDialog';
import { DeleteTShirtDialog } from '../DeleteTShirtDialog';
import styles from './TShirtCard.module.css';
import { Link } from 'react-router-dom';

export interface TShirtCardProps {
  item: TShirt;
}

export const TShirtCard = ({ item }: TShirtCardProps) => {
  return (
    <Card className={styles.cardMain}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${item.style}`}
        </Typography>

        <div className={styles.cardThumbnail}>
          <img src={item.previewUrl} height={`100px`} />
          <div className={styles.cardActions}>
            <EditTShirtDialog item={item} />
            <DeleteTShirtDialog item={item} />
          </div>
        </div>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            gap: 2
          }}>
          <Chip label={item.size} />
          <Chip label={`$${item.priceInUSD}`} />
          <Chip label={item.gender} />
        </Box>
      </CardContent>
      <Link to={`/products/${item.id}`}>Details</Link>
    </Card>
  );
};
