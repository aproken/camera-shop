import { render } from '@testing-library/react';
import PriceBlock from './price-block';
import { BrowserRouter as Router } from 'react-router-dom';


describe('PriceBlock', ()=> {
  it('Принимает параметры', () => {
    const minPrice = 5000;
    const maxPrice = 100000;

    render(
      <Router>
        <PriceBlock minPrice={ minPrice } maxPrice={ maxPrice }/>
      </Router>
    );
  });
});
