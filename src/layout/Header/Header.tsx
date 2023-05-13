import React, { FC } from 'react';
import { IHeaderProps } from '../../interfaces/propsInterfaces/HeaderProps';
import { Navbar } from '../../components';

export const Header: FC<IHeaderProps> = ({ ...props }) => {
  return (
  <div {...props}>
    <Navbar />
  </div>
  );
};
