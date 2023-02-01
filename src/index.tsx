import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/Home';
import { ShoppingList } from './pages/shopping-list/ShoppingList';
import { HeaderComponent } from './components/header/Header.component';
import { Layout } from './components/layout/Layout';
import { ShoppingItem } from './pages/shopping-list/shopping-list-item/ShoppingListItem';
import { ModalComponent } from './components/modal/Modal.component';
import { ShoppingListProvider } from './context/shoppingListProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ShoppingListProvider>
      <BrowserRouter>
        <HeaderComponent />
        <ModalComponent />
        <Routes>
          <Route path={""} element={<Layout><Home /></Layout>} />
          <Route path={"/shopping-list"} element={<Layout><ShoppingList /></Layout>} />
          <Route path={"/shopping-list/*"} element={<Layout><ShoppingItem /></Layout>} />
        </Routes>
      </BrowserRouter>
    </ShoppingListProvider>
  </React.StrictMode>
);
