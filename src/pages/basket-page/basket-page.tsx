import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasketCard from '../../components/basket-card/basket-card';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { AppRoute } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getCamerasInBasket, getDiscount } from '../../store/basket-process/selectors';
import {
  getFinalPrice,
  getStylizedPrice,
  getTotalDiscount,
  getTotalPrice,
} from '../../utils/utils';
import { fetchAddNewOrderAction, fetchDiscountAction } from '../../store/api-action';
import { actions } from '../../store/basket-process/basket-process';
import OrderSuccessModal from '../../components/buy-dialog/order-success';
import Modal from '../../components/modal/modal';


function BasketPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const orders = useAppSelector(getCamerasInBasket);
  const coupon = useAppSelector(getDiscount);

  const { discount } = coupon;

  const [couponValue, setCouponValue] = useState<string>(coupon.coupon || '');
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const productCrumbs = [
    {label: 'Главная', href: '/'},
    {label: 'Каталог', href: '/'},
    {label: 'Корзина'}
  ];

  const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCouponValue(value);
  };

  const handlerOnClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if(couponValue !== '') {
      dispatch(fetchDiscountAction(couponValue));
    }
  };

  const handlerCheckout = () => {
    const camerasIds: number[] = orders.flatMap(
      (order) => Array(order.quantity).fill(Number(order.camera.id)) as number[]
    );
    dispatch(fetchAddNewOrderAction({
      camerasIds: camerasIds,
      coupon: coupon.coupon || ''
    })).then(() => toggle());
    dispatch(actions.clearBasket());
  };

  return (
    <main id="basket-page">
      <div className="page-content">
        <Breadcrumbs crumbs={ productCrumbs }/>
        <section className="basket">
          <div className="container">
            <h1 className="title title--h2">Корзина</h1>
            <ul className="basket__list">
              {
                orders.map((order) => (
                  <BasketCard
                    key={ order.camera.id }
                    order={ order }
                  />
                ))
              }
            </ul>
            {
              orders.length !== 0
                ?
                <div className="basket__summary">
                  <div className="basket__promo">
                    <p className="title title--h4">Если у вас есть промокод на скидку, примените его в этом поле</p>
                    <div className="basket-form">
                      <form action="#">
                        <div className="custom-input">
                          <label><span className="custom-input__label">Промокод</span>
                            <input
                              onChange = { handlerChangeInput }
                              value={ couponValue }
                              type="text"
                              name="promo"
                              placeholder="Введите промокод"
                            />
                          </label>
                          <p className="custom-input__error">Промокод неверный</p>
                          <p className="custom-input__success">Промокод принят!</p>
                        </div>
                        <button
                          onClick={ handlerOnClick }
                          className="btn"
                          type="submit"
                        >Применить
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="basket__summary-order">
                    <p className="basket__summary-item"><span className="basket__summary-text">Всего:</span><span className="basket__summary-value">{`${ getStylizedPrice(getTotalPrice(orders))} ₽`}</span></p>
                    <p className="basket__summary-item"><span className="basket__summary-text">Скидка:</span><span className="basket__summary-value basket__summary-value--bonus">{`${ getTotalDiscount(orders, discount) }  ₽`}</span></p>
                    <p className="basket__summary-item"><span className="basket__summary-text basket__summary-text--total">К оплате:</span><span className="basket__summary-value basket__summary-value--total">{`${ getStylizedPrice(getFinalPrice(orders, discount))} ₽`}</span></p>
                    <button
                      className="btn btn--purple"
                      type="submit"
                      onClick={ handlerCheckout }
                    >Оформить заказ
                    </button>
                  </div>
                </div>
                :
                <>
                  <p>В корзине пока пусто...</p>
                  <button
                    onClick={ () => navigate(AppRoute.Main) }
                    className="btn btn--purple"
                  >Перейти в каталог
                  </button>
                </>
            }
          </div>
        </section>
        <Modal isOpen={ isOpen } onClose={ toggle } >
          <OrderSuccessModal onClose={ toggle }/>
        </Modal>
      </div>
    </main>
  );
}

export default BasketPage;

// TODO валидация поля купона
// TODO debounce оставить только для Input
