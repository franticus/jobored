import { useState, useEffect } from 'react';
import { NumberInput, Select } from '@mantine/core';
import s from './Filters.module.scss';
import axios from 'axios';
import { Button } from '../common';

export const Filters = () => {
  const [data, setData] = useState([{ value: 'loading', title: 'Загрузка' }]);
  console.log('data:', data);
  const [salaryFrom, setSalaryFrom] = useState<number | ''>(0);
  const [salaryTo, setSalaryTo] = useState<number | ''>(0);
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
        <Select
          placeholder='Выберите отрасль'
          size='lg'
          radius='md'
          maxDropdownHeight={400}
          nothingFound="Nobody here"
          transitionProps={{ transition: 'pop-top-left', duration: 100, timingFunction: 'ease' }}
          data={data.map((sphere, i) => ({
            value: sphere.title,
            title: sphere.title,
          }))}
          styles={(theme) => ({
            item: {
              fontSize: 14,
            },
          })}
        />
      </div>
      <div className={s.spheres}>
        <div className={s.clause}>Оклад</div>
        <div className={s.salaryFrom}>
          <NumberInput
            size='lg'
            radius='md'
            value={salaryFrom}
            onChange={setSalaryFrom}
            step={1000}
            placeholder='От'
          />
        </div>
        <div>
          <NumberInput
            size='lg'
            radius='md'
            value={salaryTo}
            onChange={setSalaryTo}
            step={1000}
            placeholder='До'
          />
        </div>
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
