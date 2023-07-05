import { useState } from 'react';
import { Camera } from '../../types/camera';
import { START_INDEX, TABS_TITLE } from '../../const';

type ProductTabsProps = {
  product: Camera;
}

function ProductTabs({ product }: ProductTabsProps): JSX.Element {
  const { vendorCode, category, type, level, description } = product;

  const [activeTab, setActiveTab] = useState<number>(START_INDEX);

  const handleTabClick = (index: number) => setActiveTab(index);

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        {
          TABS_TITLE.map((tab, index) => (
            <button
              key={ tab }
              className={index === activeTab ? 'tabs__control is-active' : 'tabs__control'}
              type="button"
              onClick={() => handleTabClick(index)}
            >{ tab }
            </button>
          ))
        }
      </div>
      <div className="tabs__content">
        {
          activeTab !== 0
            ?
            <div className="tabs__element is-active">
              <div className="product__tabs-text">
                { description }
              </div>
            </div>
            :
            <div className="tabs__element is-active">
              <ul className="product__tabs-list">
                <li className="item-list"><span className="item-list__title">Артикул:</span>
                  <p className="item-list__text">{ vendorCode }</p>
                </li>
                <li className="item-list"><span className="item-list__title">Категория:</span>
                  <p className="item-list__text">{ category }</p>
                </li>
                <li className="item-list"><span className="item-list__title">Тип камеры:</span>
                  <p className="item-list__text">{ type }</p>
                </li>
                <li className="item-list"><span className="item-list__title">Уровень:</span>
                  <p className="item-list__text">{ level }</p>
                </li>
              </ul>
            </div>
        }
      </div>
    </div>
  );
}

export default ProductTabs;
