import React, { FC } from 'react';
import { HeaderProps } from './HeaderProps';
import { Navbar } from '../../components';

export const Header: FC<HeaderProps> = ({ ...props }) => {
  return (
  <div {...props}>
    <Navbar />
  </div>
  );
};
