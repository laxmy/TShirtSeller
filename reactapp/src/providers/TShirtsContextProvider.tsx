import { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { fetchTShirts } from '../shared';
import { TShirt } from '../types';

export type TShirtsContextProviderProps = {
  children: ReactNode | ReactNode[];
};

export interface TShirtsContext {
  tShirts: TShirt[];
  setTShirts: (items: TShirt[]) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
}

export const TShirtsContext = createContext<TShirtsContext | undefined>(undefined);

export const TShirtsContextProvider = ({ children }: TShirtsContextProviderProps) => {
  const [tShirts, setTShirts] = useState<TShirt[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchInitialData() {
      const data = await fetchTShirts();
      setTShirts(data);
    }
    fetchInitialData();
  }, []);

  const value = {
    tShirts,
    loading,
    setTShirts,
    setLoading
  };

  return <TShirtsContext.Provider value={value}>{children}</TShirtsContext.Provider>;
};

export function useTShirtsContext() {
  const context = useContext(TShirtsContext);
  if (context === undefined) {
    throw new Error('useTShirtsContext must be used within a TShirtsContextProvider');
  }
  return context;
}
