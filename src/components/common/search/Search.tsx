import { useRef } from 'react';
import s from './Search.module.scss';

export const Search = (props) => {
  const { onChangeKeywordsValue } = props;
  const search = useRef<any>();
  const onClickHandler = () => {
    onChangeKeywordsValue(search.current.value);
  };

  return (
    <div className={s.searchBar}>
      <div className={s.searchBar_search}>
        <div className={s.searchBar_searchLine}>
          <input
            ref={search}
            data-elem={s.search_input}
            className={s.searchBar_input}
            type='search'
            autoComplete='off'
            placeholder='Введите название вакансии'
          />
        </div>
        <button
          data-elem='search-button'
          className={s.searchBar_btn}
          onClick={onClickHandler}
        >
          Поиск
        </button>
      </div>
    </div>
  );
};
