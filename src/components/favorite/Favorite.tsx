import s from './Favorite.module.scss';
import notFoundImg from './img/not-found.png';

export const Favorite = () => {
  return (
    <div className={s.favorite}>
      <img className={s.not_found_img} src={notFoundImg} alt='Not Found' />
      <p className={s.not_found_text}>Упс, здесь еще ничего нет!</p>
    </div>
  );
};