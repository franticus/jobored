import React, { FC } from 'react';
import { Header } from './index';
import s from './Layout.module.scss';
import { ILayoutProps } from '../interfaces';

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header className={s.header} />
      <main className={s.main}>{children}</main>
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
