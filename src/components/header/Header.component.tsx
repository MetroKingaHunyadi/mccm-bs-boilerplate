import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';
import { classHelper } from '../../helpers/classHelper';

type HeaderProps = {}

export const HeaderComponent: React.FC<HeaderProps> = () => {
  return (
    <div className={style.header}>
      <NavLink to={'/'} className={(navClass) => classHelper(navClass, style)}>Home</NavLink>
      <NavLink to={'shopping-list'} className={(navClass) => classHelper(navClass, style)}>Shopping List</NavLink>
    </div>
  )
}
