import React, { createContext, useContext } from 'react';
import { useQuery } from 'react-query';

import { getShoppingItems, saveShoppingItem } from '../../clients/shopping-items';
import { NewShoppingListItem, ShoppingListItem } from '../../models/shopping-items';

type ShoppingListContextType = {
  isLoading: boolean;
  shoppingList: ShoppingListItem[];
}

const shoppingContextInitialValue = {
  isLoading: false,
  shoppingList: []
};

const ShoppingListContext = createContext<ShoppingListContextType>(shoppingContextInitialValue);

export const ShoppingListProvider = ({ children }: { children : any }) => {
  const getItems = async () => {
    const items = await getShoppingItems();
    return items;
  };

  const { isLoading, data } = useQuery(['shoppingList'], getItems);

  return (
    <ShoppingListContext.Provider
      value={{ isLoading, shoppingList: data ?? [] }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};

export const useShoppingListContext = () => useContext(ShoppingListContext);
