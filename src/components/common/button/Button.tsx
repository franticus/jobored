import React, { FC } from 'react';
import s from './Button.module.scss';
import cn from 'classnames';

interface IButton {
  color?: string;
  size?: string;
  text?: string;
}

export const Button: FC<IButton> = (props) => {
  const { color = 'ghost', size = 'sm', text = 'Button' } = props;

  return (
    <button
      className={cn(s.button, {
        [s.primary]: color === 'primary',
        [s.lg]: size === 'lg',
      })}
    >
      {text}
    </button>
  );
};
