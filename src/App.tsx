import React from 'react';
import './App.scss';
import {
  Favorite,
  Vacancies,
  NotFound
} from './components';
import { withLayout } from './layout/Layout';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Vacancies />} />
        <Route path='/vacancies' element={<Vacancies />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default withLayout(App);
