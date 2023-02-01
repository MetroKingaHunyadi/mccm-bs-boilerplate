import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { TitleComponent } from '../../components/title/Title.component';
import { modalService } from '../../services/ModalService';
import { ShoppingListForm } from './components/ShoppingListForm';
import { RootState, useAppDispatch } from '../../store';
import { fetchShoppingItems } from '../../store/shopping-items/actions';
import { ShoppingListItem } from '../../models/shopping-items';

type ShoppingListProps = {};

export const ShoppingList: React.FC<ShoppingListProps> = () => {
  const dispatch = useAppDispatch();
  const { list: itemList, loading: loadingState } = useSelector(
    (state: RootState) => state.shoppingItems
  );

  useEffect(() => {
    // called twice on mount because of strict mode - only happens in development mode
    console.log('loadShoppingItems');
    dispatch(fetchShoppingItems());
  }, [])

  const fetchAndClose = () => {
    modalService.closeModal();
  }

  const openCreateModal = () => {
    const createModalContent = (
      <>
        <ShoppingListForm onSave={fetchAndClose} />
        <br/>
        <button type="button" onClick={() => modalService.closeModal()}>Close</button>
      </>
    );
    return modalService.openModal({ children: createModalContent });
  }

  const openEditModal = (item: ShoppingListItem) => {
    const editModalContent = (
      <>
        <h1>Edit {item.title}</h1>
        <button type="button" onClick={() => modalService.closeModal()}>Close</button>
      </>
    );
    return modalService.openModal({ children: editModalContent });
  }

  return (
    <>
      <TitleComponent>ShoppingList</TitleComponent>
      <ul>
        {loadingState ? 'loading' : itemList.map(item => (
          !item.title ? null : (
            <li key={item.id}>
              <Link to={item.title.toLowerCase()}>{item.title}</Link>
              <button type="button" onClick={() => openEditModal(item)}>Edit</button>
            </li>
          )
        ))}
      </ul>
      <button type="button" onClick={() => openCreateModal()}>Add Item</button>
    </>
  )
}
