import React from 'react';
import { Link } from 'react-router-dom';

import { TitleComponent } from '../../components/title/Title.component';
import { modalService } from '../../services/ModalService';
import { ShoppingListForm } from './components/ShoppingListForm';
import { ShoppingListItem } from '../../models/shopping-items';
import { useShoppingListContext } from '../../context/shopping-list/shoppingListContext';

type ShoppingListProps = {};

export const ShoppingList: React.FC<ShoppingListProps> = () => {
  const { isLoading, shoppingList } = useShoppingListContext();

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
        {isLoading ? 'loading' : shoppingList.map(item => (
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
