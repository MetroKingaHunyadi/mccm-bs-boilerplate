import React, {useEffect, useState} from 'react';
import {TitleComponent} from "../../components/title/Title.component";
import {Link} from "react-router-dom";
import {modalService} from "../../services/ModalService";
import {ShoppingListForm} from "./components/ShoppingListForm";

type ShoppingListProps = {}
export const shoppingItemsUrl = 'http://localhost:3001/items';

type ShoppingListItem = {
  id: number;
  title: string;
}

export const ShoppingList: React.FC<ShoppingListProps> = (props) => {
  const [itemList, setItemList] = useState<Array<ShoppingListItem> | undefined>();

  const fetchShoppingItemList = () => {
    fetch(shoppingItemsUrl).then(res => res.json()).then(data => {
      setItemList(data as Array<ShoppingListItem>);
    })
  }

  useEffect(()=>{
    fetchShoppingItemList();
  }, [])

  const fetchAndClose = () => {
    fetchShoppingItemList();
    modalService.closeModal();
  }

  return (
    <>
      <TitleComponent>ShoppingList</TitleComponent>
      <ul>
        {!itemList ? 'loading' : itemList.map((item, i) => {
          if(!item.title) return null;
          return <li key={item.id}>
            <Link to={item.title.toLowerCase()}>{item.title}</Link>
            <button onClick={() => modalService.openModal({children: <h1>Edit {item.title} <br/> <button type="button" onClick={() => modalService.closeModal()}>Close</button></h1>})} type="button">Edit</button>
          </li>
        })}
      </ul>
      <button type="button" onClick={()=>modalService.openModal({children: <><ShoppingListForm fetchShoppingItemList={fetchAndClose} /><br/> <button type="button" onClick={() => {
          modalService.closeModal();
        }}>Close</button></>})}>Add Item</button>
    </>
  )
}
