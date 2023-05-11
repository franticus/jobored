import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../common';
import s from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <>
      <nav className={s.navbar}>
        <Logo />
        <div className={s.links}>
          <NavLink
            className={({ isActive }) => (isActive ? s.link_active : s.link)}
            to='/vacancies'
          >
            Поиск вакансий
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? s.link_active : s.link)}
            to='/favorite'
          >
            Избранное
          </NavLink>
        </div>
      </nav>
    </>
  );
};
