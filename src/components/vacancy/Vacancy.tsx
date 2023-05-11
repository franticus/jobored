import { FC, useState } from 'react';
import s from './Vacancy.module.scss';
import { ReactComponent as StarIcon } from './img/star-icon.svg';
import { ReactComponent as LocationIcon } from './img/location-icon.svg';
import cn from 'classnames';

interface IVacancy {
  profession: string;
  firm_name: string;
  town: {
    title: string;
  };
  type_of_work: {
    title: string;
  };
  payment_to: number;
  payment_from: number;
  currency: number;
}

export const Vacancy: FC<IVacancy> = (props) => {
  const { profession, town, type_of_work, payment_to, payment_from, currency } =
    props;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={s.vacancy}>
      <div className={s.profession_container}>
        <div className={s.profession}>{profession}</div>
        <div className={s.payment_container}>
          <span>з/п от</span>&nbsp;<div>{payment_from}</div>
          <div>{payment_to}</div>
          <div>{currency}</div>
          <span className={s.dot}>•</span>
          <div className={s.type_of_work}>{type_of_work.title}</div>
        </div>
        <div className={s.location}>
          <LocationIcon />
          <div>{town.title}</div>
        </div>
      </div>
      <div className={s.star_container}>
        <span
          className={cn(s.star, {
            [s.checked]: isChecked,
          })}
          onClick={() => setIsChecked(!isChecked)}
        >
          <StarIcon />
        </span>
      </div>
    </div>
  );
};
