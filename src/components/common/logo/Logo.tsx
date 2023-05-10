import React from 'react';
import s from './Logo.module.scss'
import logo from './img/logo.svg';

export const Logo = () => {
  return (
    <a href="/" className={s.logo}>
      <img className={s.logo__icon} src={logo} alt='Boldo'></img>
      <span className={s.logo__name}>Jobored</span>
    </a>
  )
}
