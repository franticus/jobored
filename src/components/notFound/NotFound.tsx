import s from './NotFound.module.scss';
import notFoundImg from './img/not-found.png';

export const NotFound = () => {
  return (
    <div className={s.notFound}>
      <img className={s.notFound_img} src={notFoundImg} alt='Not Found' />
      <p className={s.notFound_text}>Страница не найдена. Она была удалена, либо вовсе не существовала на сайте.</p>
    </div>
  );
};
