import React, { createContext, useContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { TStore, createStore } from './createStore';

const storeContext = createContext<TStore|null>(null);

export const StoreProvider = ({ children }:any) => {
  const store = useLocalStore(createStore);
  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  );
}

export const useStore = () => {
  const store = useContext(storeContext);
  if (store == null) {
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store;
}
