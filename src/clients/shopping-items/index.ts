export const shoppingItemsUrl = 'http://localhost:3001/items';

export const getShoppingItems = () => (
    fetch(shoppingItemsUrl)
        .then(res => res.json())
        .catch(err => {
            console.log(err);
            return [];
        })
);

export const saveShoppingItem = (data: any) => (
    fetch(shoppingItemsUrl, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err))
);
