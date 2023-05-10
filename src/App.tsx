import './App.scss';
import {
  Vacancies
} from './components';
import { withLayout } from './layout/Layout';

const App = () => {
  return (
    <div className="app">
      <Vacancies />
    </div>
  );
}

export default withLayout(App);
