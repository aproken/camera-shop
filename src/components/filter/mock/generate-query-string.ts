import { FilterData, QueryParameter } from '../../../const';

export const generateQueryString = (filterData: FilterData): string => {
  const queryStringParams: string[] = [];

  // Добавляем параметр price_gte, если он определен в filterData
  if (filterData.price_gte !== undefined) {
    queryStringParams.push(`${QueryParameter.priceGte}=${encodeURIComponent(filterData.price_gte)}`);
  }

  // Добавляем параметр price_lte, если он определен в filterData
  if (filterData.price_lte !== undefined) {
    queryStringParams.push(`${QueryParameter.priceLte}=${encodeURIComponent(filterData.price_lte)}`);
  }

  // Добавляем параметр type, если он определен в filterData
  if (filterData.type !== undefined) {
    queryStringParams.push(`${QueryParameter.type}=${encodeURIComponent(filterData.type)}`);
  }

  // Добавляем параметр category, если он определен в filterData
  if (filterData.category !== undefined) {
    queryStringParams.push(`${QueryParameter.category}=${encodeURIComponent(filterData.category)}`);
  }

  // Добавляем параметр level, если он определен в filterData
  if (filterData.level !== undefined) {
    queryStringParams.push(`${QueryParameter.level}=${encodeURIComponent(filterData.level)}`);
  }

  // Объединяем все параметры запроса с помощью амперсандов и возвращаем строку запроса
  return queryStringParams.join('&');
};

