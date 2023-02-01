import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import shoppingItemsReducer from './shopping-items/reducer'

// The store now has redux-thunk added and the Redux DevTools Extension is turned on
export const store = configureStore({
  reducer: {
    shoppingItems: shoppingItemsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
