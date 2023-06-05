import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={ <Layout />}
        >
          <Route
            index
            element={ <MainPage />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
