import { FC, useState } from 'react';
import s from './Vacancy.module.scss';
import { ReactComponent as StarIcon } from './img/star-icon.svg';
import { ReactComponent as LocationIcon } from './img/location-icon.svg';
import cn from 'classnames';
import { salaryTextTemplate } from './salaryTextTemplate';
import { IVacancy } from '../../../interfaces';
import { NavLink } from 'react-router-dom';

export const Vacancy: FC<IVacancy> = (props) => {
  const {
    profession,
    town,
    type_of_work,
    payment_to,
    payment_from,
    currency,
    id,
    isCheckedDefault,
  } = props;
  const [isChecked, setIsChecked] = useState<boolean>(
    isCheckedDefault || false
  );

  const localStorageFavoriteHandler = () => {
    const favoriteLocal: any = localStorage.getItem('favoriteVacancies');
    const favorite: number[] = JSON.parse(favoriteLocal) || [];
    favorite.push(id);

    if (isChecked) {
      setIsChecked(false);
      localStorage.setItem(
        'favoriteVacancies',
        JSON.stringify(favorite.filter((el) => el !== id))
      );
    } else {
      setIsChecked(true);
      localStorage.setItem(
        'favoriteVacancies',
        JSON.stringify(favorite.filter((el, id) => favorite.indexOf(el) === id))
      );
    }
  };

  return (
    <div className={s.vacancy} data-elem={`vacancy-${id}`}>
      <div className={s.profession_container}>
        <NavLink className={s.profession} to={`/vacancy/${id}`}>
          {profession}
        </NavLink>
        <div className={s.payment_container}>
          {payment_to > 0 && payment_to > 0 ? (
            <>
              <div className={s.payment_container_salary}>
                {salaryTextTemplate(payment_from, payment_to, currency)}
              </div>
              <span className={s.dot}>•</span>
            </>
          ) : (
            <div className={s.payment_container_salary}>
              <span className={s.zp}>з/п не указана</span>
              <span className={s.dot}>•</span>
            </div>
          )}
          <div className={s.type_of_work}>{type_of_work.title}</div>
        </div>
        <div className={s.location}>
          <LocationIcon />
          <div>{town.title}</div>
        </div>
      </div>
      <div className={s.star_container}>
        <span
          data-elem={`vacancy-${id}-shortlist-button`}
          className={cn(s.star, {
            [s.checked]: isChecked,
          })}
          onClick={() => localStorageFavoriteHandler()}
        >
          <StarIcon />
        </span>
      </div>
    </div>
  );
};
