import { useState, useEffect } from 'react';
import s from './Filters.module.scss';
import axios from 'axios';
import { Button } from '../common';

export const Filters = () => {
  const [data, setData] = useState([{ title: 'Загрузка' }]);
  const salaryFrom = [30000, 40000, 50000, 60000, 70000];
  const salaryTo = [30000, 40000, 50000, 60000, 70000];
  const spheresUrl =
    'https://startup-summer-2023-proxy.onrender.com/2.0/catalogues';

  useEffect(() => {
    axios
      .get(spheresUrl, {
        headers: { 'x-secret-key': 'GEU4nvd3rej*jeh.eqp' },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClickHandler = () => {
    return console.log('onClick2');
  };

  return (
    <div className={s.filters}>
      <div className={s.title}>Фильтры</div>
      <div className={s.spheres}>
        <div className={s.clause}>Отрасль</div>
        <select className={s.select}>
          <option value='' disabled selected>
            Выберите отрасль
          </option>
          {data.map((sphere, i) => (
            <option value='sphere.title' key={i}>
              {sphere.title}
            </option>
          ))}
        </select>
      </div>
      <div className={s.spheres}>
        <div className={s.clause}>Оклад</div>
        <select className={s.select}>
          <option value='' disabled selected>
            От
          </option>
          {salaryFrom.map((salary, i) => (
            <option value={salary} key={i}>
              {salary}
            </option>
          ))}
        </select>
        <select className={s.select}>
          <option value='' disabled selected>
            До
          </option>
          {salaryTo.map((salary, i) => (
            <option value={salary} key={i}>
              {salary}
            </option>
          ))}
        </select>
      </div>
      <Button
        color='primary'
        text='Применить'
        size='lg'
        onClickHandler={() => onClickHandler()}
      />
    </div>
  );
};
