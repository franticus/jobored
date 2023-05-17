import { useState, useEffect } from 'react';
import s from './Vacancies.module.scss';
import axios from 'axios';
import { Search, Vacancy } from '../common';
import { IVacancy } from '../../interfaces';
import { Filters } from '../filters/Filters';
import { URL } from '../../constants/urls';
import { Pagination } from '@mantine/core';
import Loader from '../common/loader/Loader';
import { favoritesLocalStorage } from '../../helpers/favoritesLocalStorage';

export const Vacancies = () => {
  const [data, setData] = useState([]);
  console.log('data:', data);
  const [totalVacanciesCount, setTotalVacanciesCount] = useState<number>(0);
  const [shpereKey, setShpereKey] = useState<number>(0);
  const [activePage, setPage] = useState<number | undefined>(1);
  const [keywordsValue, setKeywordsValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const countPagesOnPage = 4;
  const countPagesOnPageMoreThanOne = Math.floor(
    totalVacanciesCount / countPagesOnPage
  );

  const sphereKeyChanger = (key: number) => {
    setIsLoading(true);
    setShpereKey(key);
  };

  useEffect(() => {
    axios
      .get(
        `${URL.MAIN}${URL.VACANCIES}?count=${countPagesOnPage}&catalogues=${shpereKey}&page=${activePage}&keyword=${keywordsValue}`,
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
        setTotalVacanciesCount(res.data.total);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [shpereKey, activePage, isLoading, keywordsValue]);

  return (
    <div className={s.vacancies}>
      <div className={s.filters}>
        <Filters sphereKeyChanger={(key: number) => sphereKeyChanger(key)} />
      </div>
      {isLoading && (
        <div className={s.vacanciesContainer}>
          <Search onChangeKeywordsValue={setKeywordsValue} />
        </div>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={s.vacanciesContainer}>
            <Search onChangeKeywordsValue={setKeywordsValue} />
            {data.map((vacancy: IVacancy, i) => (
              <Vacancy
                key={i}
                id={vacancy.id}
                profession={vacancy.profession}
                town={vacancy.town}
                type_of_work={vacancy.type_of_work}
                payment_to={vacancy.payment_to}
                payment_from={vacancy.payment_from}
                currency={vacancy.currency}
                isCheckedDefault={data.find(
                  (vacancy: any) => vacancy.id === favoritesLocalStorage()[i]
                )}
              />
            ))}
          </div>
          {countPagesOnPageMoreThanOne && (
            <div className={s.paginate}>
              <Pagination
                total={Math.floor(totalVacanciesCount / 4)}
                boundaries={0}
                defaultValue={1}
                value={activePage}
                onChange={setPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};
