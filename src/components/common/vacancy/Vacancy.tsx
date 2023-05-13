import { FC, useState } from 'react';
import s from './Vacancy.module.scss';
import { ReactComponent as StarIcon } from './img/star-icon.svg';
import { ReactComponent as LocationIcon } from './img/location-icon.svg';
import cn from 'classnames';
import { salaryTextTemplate } from './salaryTextTemplate';
import { IVacancy } from './VacancyProps';

export const Vacancy: FC<IVacancy> = (props) => {
  const { profession, town, type_of_work, payment_to, payment_from, currency } =
    props;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={s.vacancy}>
      <div className={s.profession_container}>
        <div className={s.profession}>{profession}</div>
        <div className={s.payment_container}>
          {payment_to > 0 && payment_to > 0 ? (
            <>
              <div className={s.payment_container_salary}>
                <span className={s.zp}>з/п</span>&nbsp;
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
