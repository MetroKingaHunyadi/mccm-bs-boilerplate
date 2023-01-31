import React from 'react';

type TitleComponentProps = {
  children: React.ReactNode;
}

export const TitleComponent:React.FC<TitleComponentProps> = ({children}) => {
  return (
    <>
      <h1>{children}</h1>
    </>
  )
}
