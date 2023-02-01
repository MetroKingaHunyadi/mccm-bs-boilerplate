import React, { useState } from 'react';

import { useShoppingListContext } from '../../../context/shoppingListProvider';
import { NewShoppingItem } from '../../../models/shopping-items';

type ShoppingListFormProps = {
  onSave: () => void;
}

const initialFormState: NewShoppingItem = {
  title: ''
}

export const ShoppingListForm: React.FC<ShoppingListFormProps> = (props) => {
  const { addItem } = useShoppingListContext();
  const [formState, setFormState] = useState<NewShoppingItem>(initialFormState);

  const onInputChange = (title: string) => {
    setFormState({ title });
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItem(formState);
    props.onSave();
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
