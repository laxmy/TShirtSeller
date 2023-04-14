import { useEffect } from 'react';
import { TShirtCard } from './shared/TShirtCard';
import { AddTShirtDialog } from './AddTShirtDialog';
import { fetchTShirts } from '../shared';
import { useTShirtsContext } from '../providers';
import styles from './ProductsListPage.module.css';

export const ProductsListPage = () => {
  const { setTShirts, tShirts } = useTShirtsContext();
  useEffect(() => {
    async function fetchInitialData() {
      const data = await fetchTShirts();
      setTShirts(data);
    }
    fetchInitialData();
  }, []);

  return (
    <div className={styles.listContainer}>
      <AddTShirtDialog />
      {tShirts && tShirts.map((tee) => <TShirtCard key={tee.id} item={tee} />)}
    </div>
  );
};
