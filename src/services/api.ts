import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { BASE_URL, REQUEST_TIMEOUT } from '../const';
import { toast } from 'react-toastify';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.BAD_GATEWAY]: true,
  [StatusCodes.INTERNAL_SERVER_ERROR]: true,
  [StatusCodes.NOT_FOUND]: true,
  0: true, // Искусственно заблокированные запросы в DevTools
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string }>) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.warn('Упс! Что то пошло не так :(');
      }

      throw error;
    }
  );

  return api;
};
