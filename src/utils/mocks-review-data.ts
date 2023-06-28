import { ReviewData } from '../types/review-data';

export const makeFakeReviewData = (): ReviewData => ({
  cameraId: 1,
  userName: 'Кирилл',
  advantage: 'Легкая в плане веса, удобная в интерфейсе',
  disadvantage: 'Быстро садиться зарядка',
  review: 'Это моя первая камера. Я в восторге, нареканий нет',
  rating: 5,
});
