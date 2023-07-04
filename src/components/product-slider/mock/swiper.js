// Заглушка для модуля swiper
// Здесь вы можете определить необходимую логику или возвращать значения по умолчанию

export const SwiperMock = jest.fn().mockImplementation(() => ({
  use: jest.fn(),
  // Другие методы и свойства, необходимые в вашем коде тестирования
}));

const SwiperCoreMock = {
  use: jest.fn(),
  // Другие методы и свойства, необходимые в вашем коде тестирования
};

export default SwiperCoreMock;
