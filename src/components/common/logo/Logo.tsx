import React from 'react';
import s from './Logo.module.scss'
import { ReactComponent as MainLogo } from './img/logo.svg';

export const Logo = () => {
  return (
    <a href="/" className={s.logo}>
      <MainLogo />
      <span className={s.logo_name}>Jobored</span>
    </a>
  )
}
