import React, {useEffect} from 'react';
import {Link, useMatch} from "react-router-dom";

type ShoppingListItemProps = {}

export const ShoppingListItem: React.FC<ShoppingListItemProps> = (props) => {
  const path = useMatch('shopping-list/:name');
  const name = path?.params.name ?? '';

  useEffect(()=>{
    console.log('render')
    return () => {
      console.log('unmount')
    }
  }, [props])

  return (
    <>
      <Link to={'./'}> {`< back`} </Link>
      <br/>
      <br/>
      {name.toUpperCase()}
    </>
  )
}
