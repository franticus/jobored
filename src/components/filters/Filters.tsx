import { useState, useEffect } from 'react';
import { NumberInput, Select } from '@mantine/core';
import s from './Filters.module.scss';
import axios from 'axios';
import { Button } from '../common';
import { URL } from '../../constants/urls';
import { ReactComponent as ArrowIcon } from './img/arrow-select.svg';

export const Filters = (props) => {
  const { sphereKeyChanger } = props;
  const [data, setData] = useState([
    { value: false, title: 'Загрузка', key: 0 },
  ]);
  const [currentSphereFilter, setCurrentSphereFilter] = useState<string | null>(
    ''
  );
  const [salaryFrom, setSalaryFrom] = useState<number | ''>();
  const [salaryTo, setSalaryTo] = useState<number | ''>();

  useEffect(() => {
    if (data[0].key === 0) {
      axios
        .get(`${URL.MAIN}${URL.SPHERES}`, {
          headers: {
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'X-Api-App-Id':
              'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
          },
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [data]);

  const onClickHandler = () => {
    const findSphereKey = data.find((e) => e.title === currentSphereFilter);
    sphereKeyChanger(findSphereKey?.key || 33);
  };

  const resetHandler = () => {
    setCurrentSphereFilter('');
    setSalaryFrom('');
    setSalaryTo('');
    return;
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
          rightSection={<ArrowIcon />}
          transitionProps={{
            transition: 'scale-y',
            duration: 300,
            timingFunction: 'ease',
          }}
          maxDropdownHeight={400}
          value={currentSphereFilter}
          onChange={setCurrentSphereFilter}
          data={data.map((sphere, i) => ({
            label: sphere.title,
            value: sphere.title,
            title: sphere.title,
          }))}
          styles={(theme) => ({
            itemsWrapper: {
              width: '250px',
            },
            item: {
              fontSize: 14,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            },
            rightSection: { pointerEvents: 'none' },
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
            styles={(theme) => ({
              rightSection: {},
              controlUp: {
                flex: 0,
                marginTop: '5px',
                color: '#ACADB9',
                border: 'transparent',
              },
              controlDown: {
                flex: 0,
                marginBottom: '10px',
                color: '#ACADB9',
                border: 'transparent',
              },
            })}
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
            styles={(theme) => ({
              rightSection: {},
              controlUp: {
                flex: 0,
                marginTop: '5px',
                color: '#ACADB9',
                border: 'transparent',
              },
              controlDown: {
                flex: 0,
                marginBottom: '10px',
                color: '#ACADB9',
                border: 'transparent',
              },
            })}
          />
        </div>
      </div>
      <Button
        color='primary'
        text='Применить'
        size='lg'
        onClickHandler={onClickHandler}
      />
    </div>
  );
};
