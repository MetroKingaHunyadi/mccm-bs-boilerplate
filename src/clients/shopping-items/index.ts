import { NewShoppingItem, ShoppingItem } from '../../models/shopping-items';

export const shoppingItemsUrl = 'http://localhost:3001/items';

export const getShoppingItems = (): Promise<ShoppingItem[]>  => (
    fetch(shoppingItemsUrl)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
            return [];
        })
);

export const saveShoppingItem = (data: NewShoppingItem): Promise<ShoppingItem | null> => (
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
