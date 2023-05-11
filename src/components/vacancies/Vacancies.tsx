import { useState, useEffect } from 'react';
import s from './Vacancies.module.scss';
import axios from 'axios';
import { Search } from '../search/Search';

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
  const vacanciesUrl =
    'https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?client_secret=v3.r.137440105.341ef00d2e927f8d6623c79f2624d0efb95d624b.9e2bbefe9835d4ae910cdc6d51381dade19d493c';

  useEffect(() => {
    axios
      .get(vacanciesUrl, {
        headers: {
          'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
          'X-Api-App-Id':
            'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        },
      })
      .then((res) => {
        console.log('response: ', res.data.objects);
        // console.log('response: ', res.data.objects[0].catalogues[0].title);
        setData(res.data.objects);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={s.vacancies}>
      <Search />
      <ul>
        {data.map((vacancy: IVacancies, i) => (
          <li key={i}>
            {vacancy.profession}
            {vacancy.firm_name}
            {vacancy.firm_name}
            {vacancy.town.title}
            {vacancy.type_of_work.title}
            {vacancy.payment_to}
            {vacancy.payment_from}
            {vacancy.currency}
          </li>
        ))}
      </ul>
    </div>
  );
};
