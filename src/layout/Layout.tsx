import React, { FC } from 'react';
import { LayoutProps } from './LayoutProps';
import { Header } from './index';
import s from './Layout.module.scss';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header className={s.header} />
      <div className={s.body}>{children}</div>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
