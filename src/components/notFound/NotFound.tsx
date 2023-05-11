import s from './NotFound.module.scss';
import noFoundImg from './img/no-found.png';

export const NotFound = () => {
  return (
    <div className={s.notFound}>
      <img src={noFoundImg} alt='Not Found' />
      NotFound
    </div>
  );
};
