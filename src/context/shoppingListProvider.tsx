import React, { createContext, useContext, useState } from 'react';

import { getShoppingItems, saveShoppingItem } from '../clients/shopping-items';
import { NewShoppingItem, ShoppingItem } from '../models/shopping-items';

type ShoppingListContextType = {
  loading: boolean;
  shoppingList: ShoppingItem[];
  getItems: Function;
  addItem: Function;
}

const shoppingContextInitialValue = {
  loading: false,
  shoppingList: [],
  getItems: () => {},
  addItem: () => {},
};

const ShoppingListContext = createContext<ShoppingListContextType>(shoppingContextInitialValue);

export const ShoppingListProvider = ({ children }: { children : any }) => {
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getItems = async () => {
    setLoading(true);
    const items = await getShoppingItems();
    setShoppingItems(items);
    setLoading(false);
    return items;
  };

  const addItem = async (data: NewShoppingItem) => {
    const result = await saveShoppingItem(data);
    const items = await getShoppingItems();
    setShoppingItems(items);
    return result;
  }

  return (
    <ShoppingListContext.Provider
      value={{ loading, shoppingList: shoppingItems ?? [], addItem, getItems }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};

export const useShoppingListContext = () => useContext(ShoppingListContext);
