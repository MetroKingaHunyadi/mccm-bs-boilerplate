import React, {useState} from 'react';
import {shoppingItemsUrl} from "../ShoppingList";

type ShoppingListFormProps = {
  fetchShoppingItemList: () => void
}
type FormState = {
  title: string
}

const initialFormState:FormState = {
  title: ''
}

export const ShoppingListForm: React.FC<ShoppingListFormProps> = (props) => {
  const [formState, setFormState] = useState<FormState>(initialFormState);

  const onInputChange = (title:string) => {
    setFormState({title: title})
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`${shoppingItemsUrl}`, {
      method: 'POST',
      body: JSON.stringify(formState),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(_ => {
        props.fetchShoppingItemList();
      })
  }

  return (
    <>
      <form onSubmit={(e)=>onSubmit(e)}>
        <input name="title" type="text" value={formState.title} onChange={(e) => onInputChange(e.target.value)} />
        <button type="submit">Save</button>
      </form>
    </>
  )
}
