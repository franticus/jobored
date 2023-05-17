import { Link } from 'react-router-dom';
import s from './Favorite.module.scss';
import notFoundImg from './img/not-found.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../../constants/urls';
import { Vacancy } from '../../components/common';
import { IVacancy } from '../../interfaces';
import { favoritesLocalStorage } from '../../helpers/favoritesLocalStorage';

export const Favorite = () => {
  const [favoriteVacancies, setFavoriteVacancies] = useState([]);

  let idsUrl = '';

  for (let i = 0; i < favoritesLocalStorage().length; i++) {
    idsUrl += `ids[]=${favoritesLocalStorage()[i]}&`;
  }

  useEffect(() => {
    if (idsUrl) {
      axios
        .get(`${URL.MAIN}${URL.VACANCIES}?${idsUrl}`, {
          headers: {
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'X-Api-App-Id':
              'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
          },
        })
        .then((res) => {
          setFavoriteVacancies(res.data.objects);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [idsUrl]);

  return (
    <div className={s.favorite}>
      {idsUrl ? (
        <>
          {favoriteVacancies.map((vacancy: IVacancy, i) => (
            <Vacancy
              key={i}
              id={vacancy.id}
              profession={vacancy.profession}
              town={vacancy.town}
              type_of_work={vacancy.type_of_work}
              payment_to={vacancy.payment_to}
              payment_from={vacancy.payment_from}
              currency={vacancy.currency}
              isCheckedDefault={true}
            />
          ))}
        </>
      ) : (
        <>
          <img className={s.notFound_img} src={notFoundImg} alt='Not Found' />
          <p className={s.notFound_text}>Упс, здесь еще ничего нет!</p>
          <Link to='/vacancies' className={s.notFound_btn_container}>
            <button className={s.notFound_btn}>Поиск Вакансий</button>
          </Link>
        </>
      )}
    </div>
  );
};
