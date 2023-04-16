import { TShirtCard } from '../shared/TShirtCard';
import { AddTShirtDialog } from '../addTshirt';

import { useTShirtsContext } from '../../providers';
import styles from './ProductsListPage.module.css';

export const ProductsListPage = () => {
  const { tShirts } = useTShirtsContext();

  return (
    <div className={styles.listContainer}>
      <AddTShirtDialog />
      {tShirts && tShirts.map((tee) => <TShirtCard key={tee.id} item={tee} />)}
    </div>
  );
};
