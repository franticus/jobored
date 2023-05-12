import { useState, useEffect } from 'react';
import s from './Vacancies.module.scss';
import axios from 'axios';
import { Search } from '../search/Search';
import { Vacancy } from '../vacancy/Vacancy';
import { Filters } from '../filters/Filters';
import { URL } from '../../constants/urls';

interface IVacancies {
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

export const Vacancies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(URL.VACANCIES, {
        headers: {
          'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
          'X-Api-App-Id':
            'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        },
      })
      .then((res) => {
        console.log('res.data.objects:', res.data.objects);
        setData(res.data.objects);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={s.vacancies}>
      <div className={s.filters}>
        <Filters />
      </div>
      <div className={s.vacanciesContainer}>
        <Search />
        {data.map((vacancy: IVacancies, i) => (
          <Vacancy
            key={i}
            profession={vacancy.profession}
            firm_name={vacancy.firm_name}
            town={vacancy.town}
            type_of_work={vacancy.type_of_work}
            payment_to={vacancy.payment_to}
            payment_from={vacancy.payment_from}
            currency={vacancy.currency}
          />
        ))}
      </div>
    </div>
  );
};
