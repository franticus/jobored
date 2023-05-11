import React from 'react';
import s from './Logo.module.scss'
import { ReactComponent as MainLogo } from './img/logo.svg';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/vacancies" className={s.logo}>
      <MainLogo />
      <span className={s.logo_name}>Jobored</span>
    </Link>
  )
}
