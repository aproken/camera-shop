import { Route, Routes, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute } from '../../const';
import ProductPage from '../../pages/product-page/product-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import BasketPage from '../../pages/basket-page/basket-page';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <Routes>
        <Route path='/' element={ <Layout /> }>

          <Route index element={ <Navigate to='/page/1' replace /> } />

          <Route
            path='/page/:pageIndex'
            element={ <MainPage /> }
          />

          <Route
            path={ AppRoute.Product }
            element={<ProductPage />}
          />

          <Route
            path={ AppRoute.Basket }
            element={<BasketPage />}
          />

          <Route path='*' element={ <NotFoundPage /> } />

        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
