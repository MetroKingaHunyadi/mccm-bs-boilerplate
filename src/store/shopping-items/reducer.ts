import { createSlice } from '@reduxjs/toolkit';

import { ShoppingListItem } from '../../models/shopping-items';
import { createShoppingItem, fetchShoppingItems } from './actions';

type ShoppingListState = {
  list: Array<ShoppingListItem>;
  loading: boolean;
}

const initialState: ShoppingListState= { list: [], loading: false };

// it's safe to "mutate" state inside because it uses Immer

const shoppingItemsSlice = createSlice({
  name: 'shoppingItems',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    shoppingItemsLoading(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    // reducers for additional action types
    builder.addCase(fetchShoppingItems.fulfilled, (state, action) => {
      state.list = action.payload;
      console.log('update after fetch', state.list);
    });

    builder.addCase(createShoppingItem.fulfilled, (state, action) => {
      state.list = action.payload;
      console.log('update after create', state.list);
  });
  }
});

export const { shoppingItemsLoading } = shoppingItemsSlice.actions;

export default shoppingItemsSlice.reducer;
