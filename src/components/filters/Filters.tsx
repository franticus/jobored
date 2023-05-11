import { useState, useEffect } from 'react';
import { NumberInput, Select } from '@mantine/core';
import s from './Filters.module.scss';
import axios from 'axios';
import { Button } from '../common';

export const Filters = () => {
  const [data, setData] = useState([
    { value: 'Загрузка', title: 'Загрузка'},
  ]);
  const [currentSphereFilter, setCurrentSphereFilter] = useState<string | null>('');
  const [salaryFrom, setSalaryFrom] = useState<number | ''>();
  const [salaryTo, setSalaryTo] = useState<number | ''>();
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
    return console.log('currentSphereFilter:', currentSphereFilter);
  };

  const resetHandler = () => {
    setCurrentSphereFilter('');
    setSalaryFrom('');
    setSalaryTo('');
    console.log('reset');
    return
  };

  return (
    <div className={s.filters}>
      <div className={s.top}>
        <div className={s.title}>Фильтры</div>
        <button className={s.reset} onClick={resetHandler}>
          <span>Сбросить всё</span>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='11.7425'
              y1='4.44219'
              x2='4.44197'
              y2='11.7427'
              stroke='none'
              strokeWidth='1.25'
            ></line>
            <line
              x1='11.9013'
              y1='11.7425'
              x2='4.60082'
              y2='4.44197'
              stroke='none'
              strokeWidth='1.25'
            ></line>
          </svg>
        </button>
      </div>
      <div className={s.spheres}>
        <div className={s.clause}>Отрасль</div>
        <Select
          placeholder='Выберите отрасль'
          size='md'
          radius='md'
          transitionProps={{
            transition: 'pop-top-left',
            duration: 100,
            timingFunction: 'ease',
          }}
          value={currentSphereFilter} 
          onChange={setCurrentSphereFilter}
          data={data.map((sphere, i) => ({
            label: sphere.title,
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
            size='md'
            radius='md'
            value={salaryFrom}
            onChange={setSalaryFrom}
            min={0}
            step={1000}
            placeholder='От'
            inputMode='numeric'
            data-elem='salary-from-input'
          />
        </div>
        <div className={s.salaryTo}>
          <NumberInput
            size='md'
            radius='md'
            value={salaryTo}
            onChange={setSalaryTo}
            min={0}
            step={1000}
            placeholder='До'
            inputMode='numeric'
            data-elem='salary-to-input'
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
