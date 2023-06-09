import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute } from '../../const';
import ProductPage from '../../pages/product-page/product-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout />}>

          <Route index element={ <Navigate to='/page/1' replace /> } />

          <Route path='/page/'>
            <Route index element={ <Navigate to='/1' replace /> } />
            <Route
              path=':pageIndex'
              element={ <MainPage />}
            />
          </Route>

          <Route
            path={AppRoute.Product}
            element={ <ProductPage />}
          />
          <Route
            path='*'
            element={ <NotFoundPage />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
