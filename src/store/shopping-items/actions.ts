import { createAsyncThunk } from '@reduxjs/toolkit';

import * as shoppingItemsClient from '../../clients/shopping-items';
import { NewShoppingItem } from '../../models/shopping-items';
import { shoppingItemsLoading } from './reducer';

export const fetchShoppingItems = createAsyncThunk(
  'shoppingItems/fetchAll',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(shoppingItemsLoading(true));
    const response = await shoppingItemsClient.getShoppingItems();
    thunkAPI.dispatch(shoppingItemsLoading(false));

    return response;
  }
);

export const createShoppingItem = createAsyncThunk(
  'shoppingItems/create',
  async (data: NewShoppingItem, thunkAPI) => {
    await shoppingItemsClient.saveShoppingItem(data);

    // saveShoppingItem returns the newly added items, but we also call fetchShoppingItems, because:
    // we don't know the new order of the items and there might be new items (e.g. others doing changes in the same time)
    const response = await shoppingItemsClient.getShoppingItems();

    return response;
  }
);
