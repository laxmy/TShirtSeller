import { createContext, useContext, ReactNode, useState } from 'react';

export type ProviderProps = {
  children: ReactNode | ReactNode[];
};

export interface AddContext {
  type: 'add';
}

export interface EditContext {
  type: 'edit';
  itemId: string;
}

export interface DeleteContext {
  type: 'delete';
}

export type ActiveContext = AddContext | EditContext | DeleteContext | undefined;
export type SetActiveContext = (context: ActiveContext) => void;

export const ActiveDialogContext = createContext<
  { activeContext: ActiveContext; setActiveContext: SetActiveContext } | undefined
>(undefined);

export const ActiveDialogProvider = ({ children }: ProviderProps) => {
  const [activeContext, setActiveContext] = useState<ActiveContext>(undefined);

  return (
    <ActiveDialogContext.Provider value={{ activeContext, setActiveContext }}>
      {children}
    </ActiveDialogContext.Provider>
  );
};

export function useActiveDialogContext() {
  const context = useContext(ActiveDialogContext);
  if (context === undefined) {
    throw new Error('useActiveDialogContext must be used within a ActiveDialogProvider');
  }
  return context;
}
