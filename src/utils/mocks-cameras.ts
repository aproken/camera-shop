import { Cameras } from '../types/camera';
import { Type, Category, Level, } from '../const';

export const makeFakeCameras = (): Cameras => [
  {
    id: 1,
    name: 'Ретрокамера Dus Auge lV',
    vendorCode: 'DA4IU67AD5',
    type: Type.Collectible,
    category: Category.VideoCamera,
    description: 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники. Вы тоже можете прикоснуться к волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с Das Auge IV начнётся ваш путь к наградам всех престижных кинофестивалей.',
    previewImg: 'img/content/das-auge.jpg',
    level: Level.Amateur,
    price: 73450,
    previewImg2x: 'img/content/das-auge@2x.jpg',
    previewImgWebp: 'img/content/das-auge.webp',
    previewImgWebp2x: 'img/content/das-auge@2x.webp',
    reviewCount: 117,
    averageRating: 3,
  },
  {
    id: 2,
    name: 'FastShot MR-5',
    vendorCode: 'JH34KHN895',
    type: Type.Momentary,
    category: Category.PhotoCamera,
    description: 'Новое слово в создании моментальных фото. Высокое качество снимков, легко перезаряжаемые кассеты, встроенная вспышка. Создавайте альбомы здесь и сейчас.',
    previewImg: 'img/content/fast-shot.jpg',
    level: Level.Amateur,
    price: 18970,
    previewImg2x: 'img/content/fast-shot@2x.jpg',
    previewImgWebp: 'img/content/fast-shot.webp',
    previewImgWebp2x: 'img/content/fast-shot@2x.webp',
    reviewCount: 77,
    averageRating: 5,
  },
  {
    id: 3,
    name: 'Instaprinter P2',
    vendorCode: 'KLU789GH56',
    type: Type.Digital,
    category: Category.PhotoCamera,
    description: 'Компактная модель позволяющая получать чёткие снимки с 25-кратным зумом. В комплекте зарядное устройство и бархатный чехол, а так же удобный шнурок на шею.',
    previewImg: 'img/content/instaprinter.jpg',
    level: Level.Zero,
    price: 8430,
    previewImg2x: 'img/content/instaprinter@2x.jpg',
    previewImgWebp: 'img/content/instaprinter.webp',
    previewImgWebp2x: 'img/content/instaprinter@2x.webp',
    reviewCount: 128,
    averageRating: 4,
  },
  {
    id: 4,
    name: 'Орлёнок',
    vendorCode: 'O78DFGSD83',
    type: Type.Membranous,
    category: Category.PhotoCamera,
    description: 'Плёночная перезаряжаемая камера нового покаления уже укомплектована плёнкой и оснащена встроенной вспышкой. Легко помещается в руке и обладет интересным дизайном.',
    previewImg: 'img/content/orlenok.jpg',
    level: Level.Amateur,
    price: 19970,
    previewImg2x: 'img/content/orlenok@2x.jpg',
    previewImgWebp: 'img/content/orlenok.webp',
    previewImgWebp2x: 'img/content/orlenok@2x.webp',
    reviewCount: 34,
    averageRating: 2,
  },
  {
    id: 5,
    name: 'Van Shot',
    vendorCode: 'YU7RT5GH76',
    type: Type.Collectible,
    category: Category.VideoCamera,
    description: 'Крайне редкое наименование не потеряло актуальность не смотря на сможество альтернатив. После съёмок на данную камеру фильм не стыдно показать в рамках кинофестиваля. Первые 4К настройки, высочайшее разрешение, уникальная цветопередача.',
    previewImg: 'img/content/van-shot.jpg',
    level: Level.Professional,
    price: 149990,
    previewImg2x: 'img/content/van-shot@2x.jpg',
    previewImgWebp: 'img/content/van-shot.webp',
    previewImgWebp2x: 'img/content/van-shot@2x.webp',
    reviewCount: 32,
    averageRating: 2,
  },
  {
    id: 6,
    name: 'Click Sap',
    vendorCode: 'KLN54H76F5',
    type: Type.Membranous,
    category: Category.PhotoCamera,
    description: 'Зеркальная камера позволяющая делать четкие фотографии. Вспышка продается и подключается отдельно. Чехол в комплекте. Плёнка 35мм',
    previewImg: 'img/content/click-sap.jpg',
    level: Level.Amateur,
    price: 9490,
    previewImg2x: 'img/content/click-sap@2x.jpg',
    previewImgWebp: 'img/content/click-sap.webp',
    previewImgWebp2x: 'img/content/click-sap@2x.webp',
    reviewCount: 23,
    averageRating: 3,
  },
  {
    id: 7,
    name: 'Look 54',
    vendorCode: 'NB54Y',
    type: Type.Digital,
    category: Category.PhotoCamera,
    description: 'Профессиональный зеркальный фотоаппарат оснащен 56-кратным зумом, позволяет создавать чёткие снимки, а новейший процессор позволяет справляться с шумами и светочувствительностью.',
    previewImg: 'img/content/look-54.jpg',
    level: Level.Professional,
    price: 96490,
    previewImg2x: 'img/content/look-54@2x.jpg',
    previewImgWebp: 'img/content/look-54.webp',
    previewImgWebp2x: 'img/content/look-54@2x.webp',
    reviewCount: 31,
    averageRating: 3,
  },
  {
    id: 8,
    name: 'Look SF3',
    vendorCode: 'NBSF3',
    type: Type.Digital,
    category: Category.PhotoCamera,
    description: 'Идеальная камера для старта в репортажной фотографии. оснащена встроенным стабилизатором и вспышкой. Оптический 15 кратный зум и удобная посадка в руке. ',
    previewImg: 'img/content/look-sf3.jpg',
    level: Level.Professional,
    price: 63800,
    previewImg2x: 'img/content/look-sf3@2x.jpg',
    previewImgWebp: 'img/content/look-sf3.webp',
    previewImgWebp2x: 'img/content/look-sf3@2x.webp',
    reviewCount: 39,
    averageRating: 3,
  },
];
