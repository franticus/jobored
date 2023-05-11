import s from './Search.module.scss';
import { Button } from '../common';
import { ReactComponent as SearchIcon } from './img/search-icon.svg';

export const Search = () => {
  const onClickHandler = () => {
    return console.log('onClick1');
  };

  return (
    <div className={s.search}>
      <SearchIcon />
      <input
        type='search'
        name='search'
        placeholder='Введите название ваканси'
      />
      <div>
        <Button
          color='primary'
          text='Поиск'
          size='sm'
          onClickHandler={onClickHandler}
        />
      </div>
    </div>
  );
};
