import React, { useEffect } from 'react';
import './App.scss';
import { Vacancies } from './components';
import { Favorite, NotFound } from './pages';
import { withLayout } from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

const App = () => {

  useEffect(() => {
    axios
      .get('https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948&hr=0', {
        headers: {
          'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
          'X-Api-App-Id':
            'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        },
      })
      .then((res) => {
        console.log(res.data);
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
