import s from './Search.module.scss';

export const Search = () => {
  const onClickHandler = () => {
    return console.log('onClick1');
  };

  return (
    <div className={s.searchBar}>
      <div className={s.searchBar_search}>
        <div className={s.searchBar_searchLine}>
          <input
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
      {/* <SearchIcon />
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
      </div> */}
    </div>
  );
};
