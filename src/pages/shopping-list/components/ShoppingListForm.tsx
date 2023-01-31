import React, {useState} from 'react';
import {saveShoppingItem} from '../../../clients/shopping-items';

type ShoppingListFormProps = {
  onSave: () => void
}
type FormState = {
  title: string
}

const initialFormState:FormState = {
  title: ''
}

export const ShoppingListForm: React.FC<ShoppingListFormProps> = (props) => {
  const [formState, setFormState] = useState<FormState>(initialFormState);

  const onInputChange = (title: string) => {
    setFormState({ title })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveShoppingItem(JSON.stringify(formState))
      .then(() => {
        props.onSave();
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
