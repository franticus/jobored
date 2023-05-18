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
  const [salaryFrom, setSalaryFrom] = useState<number | string>('');
  const [salaryTo, setSalaryTo] = useState<number | string>('');
  const [activePage, setPage] = useState<number | undefined>(1);
  const [keywordsValue, setKeywordsValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const countPagesOnPage = 4;
  const countPagesOnPageMoreThanOne =
    Math.floor(totalVacanciesCount / countPagesOnPage) > 1;
  
  const sphereKeyChanger = (key: number) => {
    setIsLoading(true);
    setShpereKey(key);
    setKeywordsValue('');
    setPage(1);
  };

  useEffect(() => {
    axios
      .get(
        `${URL.MAIN}${URL.VACANCIES}?count=${countPagesOnPage}&page=${activePage}&catalogues=${shpereKey}&keyword=${keywordsValue}&payment_from=${salaryFrom}&payment_to=${salaryTo}&no_agreement=1
        `,
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
  }, [shpereKey, activePage, isLoading, keywordsValue, salaryFrom, salaryTo]);

  return (
    <div className={s.vacancies}>
      <div className={s.filters}>
        <Filters
          sphereKeyChanger={(key: number) => {
            sphereKeyChanger(key);
          }}
          salaryToChanger={(payment_to: number | string) => {
            setSalaryTo(payment_to);
          }}
          salaryFromChanger={(payment_from: number | string) => {
            setSalaryFrom(payment_from);
          }}
        />
      </div>
      <div className={s.search}>
        <Search onChangeKeywordsValue={setKeywordsValue} />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data.length !== 0 && (
            <div className={s.vacanciesContainer}>
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
          )}
          {data.length === 0 && (
            <span className={s.notFound}>Ничего не найдено</span>
          )}
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
