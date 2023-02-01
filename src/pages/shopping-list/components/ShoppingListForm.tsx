import React, { useState } from 'react';

import { NewShoppingListItem } from '../../../models/shopping-items';
import { useAppDispatch } from '../../../store';
import { createShoppingItem } from '../../../store/shopping-items/actions';

type ShoppingListFormProps = {
  onSave: () => void;
}

const initialFormState: NewShoppingListItem = {
  title: ''
}

export const ShoppingListForm: React.FC<ShoppingListFormProps> = (props) => {
  const dispatch = useAppDispatch();
  const [formState, setFormState] = useState<NewShoppingListItem>(initialFormState);

  const onInputChange = (title: string) => {
    setFormState({ title });
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createShoppingItem(formState));
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
