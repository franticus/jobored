import { useState, useEffect } from 'react';
import s from './Vacancies.module.scss';
import axios from 'axios';
import { Search, Vacancy } from '../common';
import { IVacancy } from '../../interfaces';
import { Filters } from '../filters/Filters';
import { URL } from '../../constants/urls';
import { Pagination } from '@mantine/core';
import Loader from '../common/loader/Loader';

export const Vacancies = () => {
  const [data, setData] = useState([]);
  const [shpereKey, setShpereKey] = useState<number | undefined>(33);
  const [activePage, setPage] = useState<number | undefined>(1);
  const countPagesOnPage = 4;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${URL.MAIN}${URL.VACANCIES}?count=${countPagesOnPage}&catalogues=${shpereKey}&page=${activePage}`,
        {
          headers: {
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'X-Api-App-Id':
              'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
          },
        }
      )
      .then((res) => {
        setData(res.data.objects);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [shpereKey, activePage]);

  const sphereKeyChanger = (key: number) => {
    console.log('key:', key);
    setIsLoading(true);
    setShpereKey(key);
  };

  return (
    <div className={s.vacancies}>
      <div className={s.filters}>
        <Filters sphereKeyChanger={(key: number) => sphereKeyChanger(key)} />
      </div>
      <div className={s.vacanciesContainer}>
        <Search />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={s.vacanciesContainer}>
            <Search />
            {data.map((vacancy: IVacancy, i) => (
              <Vacancy
                key={i}
                id={vacancy.id}
                profession={vacancy.profession}
                firm_name={vacancy.firm_name}
                town={vacancy.town}
                type_of_work={vacancy.type_of_work}
                payment_to={vacancy.payment_to}
                payment_from={vacancy.payment_from}
                currency={vacancy.currency}
                isCheckedDefault={false}
              />
            ))}
          </div>
          <div className={s.paginate}>
            <Pagination
              total={125}
              boundaries={0}
              defaultValue={1}
              value={activePage}
              onChange={setPage}
            />
          </div>
        </>
      )}
    </div>
  );
};
