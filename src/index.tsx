import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import { Home } from './pages/home/Home';
import { ShoppingList } from './pages/shopping-list/ShoppingList';
import { HeaderComponent } from './components/header/Header.component';
import { Layout } from './components/layout/Layout';
import { ShoppingListItem } from './pages/shopping-list/shopping-list-item/ShoppingListItem';
import { ModalComponent } from './components/modal/Modal.component';
import { store } from './store';
import { ShoppingListProvider } from './context/shopping-list/shoppingListContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ShoppingListProvider>
        <Provider store={store}>
          <BrowserRouter>
            <HeaderComponent />
            <ModalComponent />
            <Routes>
              <Route path={""} element={<Layout><Home /></Layout>} />
              <Route path={"/shopping-list"} element={<Layout><ShoppingList /></Layout>} />
              <Route path={"/shopping-list/*"} element={<Layout><ShoppingListItem /></Layout>} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </ShoppingListProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
