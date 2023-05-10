import React, { FC } from 'react';
import { SidebarProps } from './SidebarProps';
import { Filters } from '../../components';

export const Sidebar: FC<SidebarProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <Filters />
    </div>
  );
};
