import React from 'react';
import style from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className={style.layout}>
      {children}
    </div>
  )
}
