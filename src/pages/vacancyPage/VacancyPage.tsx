import s from './VacancyPage.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../../constants/urls';

import { Vacancy, VacancyDescription } from '../../components/common';
import { IVacancy } from '../../interfaces';
import Loader from '../../components/common/loader/Loader';
import { favoritesLocalStorage } from '../../helpers/favoritesLocalStorage';

export const VacancyPage = () => {
  const link = window.location.href;
  const vacancyIdFromLink = link.split('/').pop();
  const [isLoading, setIsLoading] = useState(true);
  const [vacancyData, setVacancyData] = useState<IVacancy>({
    id: 0,
    profession: 'profession',
    town: {
      title: 'town',
    },
    payment_from: 0,
    payment_to: 0,
    currency: 'currency',
    type_of_work: {
      title: 'type_of_work',
    },
  });

  useEffect(() => {
    axios
      .get(`${URL.MAIN}${URL.VACANCIES}${vacancyIdFromLink}`, {
        headers: {
          'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
          'X-Api-App-Id':
            'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        },
      })
      .then((res) => {
        setVacancyData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [vacancyIdFromLink]);

  return (
    <div className={s.wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Vacancy
            id={vacancyData.id}
            profession={vacancyData.profession}
            town={vacancyData.town}
            type_of_work={vacancyData.type_of_work}
            payment_to={vacancyData.payment_to}
            payment_from={vacancyData.payment_from}
            currency={vacancyData.currency}
            isCheckedDefault={favoritesLocalStorage().includes(vacancyData.id)}
          />
          <VacancyDescription vacancyRichText={vacancyData.vacancyRichText} />
        </>
      )}
    </div>
  );
};
