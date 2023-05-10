import React from 'react';
import { Logo } from '../common';
import s from './Navbar.module.scss';
import cn from 'classnames';

export const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <Logo />
      <div className={s.links}>
        <a className={cn(s.link, s.selected)} href='/'>
          Поиск вакансий
        </a>
        <a className={s.link} href='/'>
          Избранное
        </a>
      </div>
    </nav>
  );
};
