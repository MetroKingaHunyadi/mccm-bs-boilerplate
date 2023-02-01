import { NewShoppingListItem, ShoppingListItem } from '../../models/shopping-items';

export const shoppingItemsUrl = 'http://localhost:3001/items';

export const getShoppingItems = (): Promise<ShoppingListItem[]>  => (
    fetch(shoppingItemsUrl)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
            return [];
        })
);

export const saveShoppingItem = (data: NewShoppingListItem): Promise<ShoppingListItem | null> => (
    fetch(shoppingItemsUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(err => {
            console.log(err);
            return null;
        })
);
