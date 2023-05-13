import React, { useEffect } from 'react';
import './App.scss';
import { Vacancies } from './components';
import { Favorite, NotFound } from './pages';
import { withLayout } from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { URL } from './constants/urls';

const App = () => {
  useEffect(() => {
    axios
      .get(`${URL.MAIN}${URL.PASSWORD}${URL.CLIENT_SECRET}`, {
        headers: {
          'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
          'X-Api-App-Id':
            'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        },
      })
      .then((res) => {
        console.log(res.data.access_token ? 'pass' : 'failed');
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Vacancies />} />
        <Route path='/vacancies' element={<Vacancies />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default withLayout(App);
