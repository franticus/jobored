import { Link } from 'react-router-dom';
import s from './Favorite.module.scss';
import notFoundImg from './img/not-found.png';

export const Favorite = () => {
  return (
    <div className={s.favorite}>
      <img className={s.notFound_img} src={notFoundImg} alt='Not Found' />
      <p className={s.notFound_text}>Упс, здесь еще ничего нет!</p>
      <Link to='/vacancies' className={s.notFound_btn_container}>
        <button className={s.notFound_btn}>Поиск Вакансий</button>
      </Link>
    </div>
  );
};
