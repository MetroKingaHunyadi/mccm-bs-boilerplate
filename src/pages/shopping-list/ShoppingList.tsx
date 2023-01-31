import React, {useEffect, useState} from 'react';
import {TitleComponent} from '../../components/title/Title.component';
import {Link} from 'react-router-dom';
import {modalService} from '../../services/ModalService';
import {ShoppingListForm} from './components/ShoppingListForm';
import {getShoppingItems} from '../../clients/shopping-items';

type ShoppingListProps = {}

type ShoppingListItem = {
  id: number;
  title: string;
}

export const ShoppingList: React.FC<ShoppingListProps> = () => {
  const [itemList, setItemList] = useState<Array<ShoppingListItem>>([]);
  const [loadingState, setLoadingState] = useState<boolean>(true);

  const loadShoppingItems = () => {
    setLoadingState(true);
    getShoppingItems().then(data => {
      setItemList(data as Array<ShoppingListItem>);
      setLoadingState(false);
    })
  }

  useEffect(() => {
    // called twice on mount because of stric mode - only happens in development mode
    console.log('loadShoppingItems');
    loadShoppingItems();
  }, [])

  const fetchAndClose = () => {
    loadShoppingItems();
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
