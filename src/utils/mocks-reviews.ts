import { Reviews, Review } from '../types/review';

export const makeFakeReviews = (): Reviews => [
  {
    id: '9309e98a-11e5-4b7c-a6d2-73b1d8e2f0bf',
    userName: 'Дарья',
    advantage: 'Цена соответствует качеству.',
    disadvantage: 'Без объектива',
    review: 'Это моя первая камера. Я в восторге, нареканий нет',
    rating: 4,
    createAt: '2023-03-28T11:52:11.598Z',
    cameraId: 1
  },
  {
    id: '6b4ce4f7-efd0-4798-985c-a357fab7ec79',
    userName: 'Артём',
    advantage: 'Недорогая, за такую цену отличный вариант.',
    disadvantage: 'Трудно найти чехол. Заводские крайне дррогие',
    review: 'Это моя первая камера. Я в восторге, нареканий нет',
    rating: 2,
    createAt: '2023-03-07T11:52:11.601Z',
    cameraId: 1
  },
  {
    id: '13fd5b97-6dd1-4d41-88d0-af71b0047f9c',
    userName: 'Александр',
    advantage: 'Недорогая, за такую цену отличный вариант.',
    disadvantage: 'Не рекомендую!',
    review: 'Хорошая камера. Лучше за эти деньги не найти.',
    rating: 3,
    createAt: '2023-02-24T11:52:11.601Z',
    cameraId: 1
  },
  {
    id: 'ad29c899-6f93-49f8-b06a-64f985749da1',
    userName: 'ee',
    advantage: 'eee',
    disadvantage: 'eeee',
    review: 'eeeeeee',
    rating: 3,
    cameraId: 1,
    createAt: '2023-06-09T12:20:30.311Z'
  },
  {
    id: '586f3d9a-4f74-40ba-8ab5-bb32f431e3e0',
    userName: 'dd',
    advantage: 'dd',
    disadvantage: 'dd',
    review: 'dddddd',
    rating: 3,
    cameraId: 1,
    createAt: '2023-06-09T12:54:18.892Z'
  },
  {
    id: 'ffe82f62-afe8-4a38-8835-3b9dd217ed45',
    review: 'asdasd',
    advantage: 'sdfsdf',
    disadvantage: 'sdfsdf',
    userName: 'asdads',
    rating: 4,
    cameraId: 1,
    createAt: '2023-06-14T09:08:02.262Z'
  },
  {
    id: '97e9b1ff-24a8-4115-a24d-8729cd2cc8e1',
    cameraId: 1,
    userName: 'sdfsdfsdfs',
    advantage: 'ddddddddddd',
    disadvantage: 'dddddddddd',
    rating: 2,
    review: 'dffffffffffff',
    createAt: '2023-06-14T15:08:33.049Z'
  },
  {
    id: '3db7bfee-4d5c-45de-9cbb-7d67ad0ed74c',
    review: 'dddddddddddddddddddddddddd',
    advantage: 'dddddddddddddddd',
    disadvantage: 'ddddddddddddd',
    userName: 'ddddddddddddddddd',
    rating: 4,
    cameraId: 1,
    createAt: '2023-06-15T13:32:43.159Z'
  },
  {
    id: '1c92fe9d-3cdd-4ac6-bf10-763c34c9afaa',
    review: 'dddddddddddddddd',
    advantage: 'ddddddddddddddd',
    disadvantage: 'ddddddddddd',
    userName: 'ddddddddddddddd',
    rating: 3,
    cameraId: 1,
    createAt: '2023-06-15T13:33:03.527Z'
  },
  {
    id: '7cf9622b-d8c9-4566-ace5-9f16f7c3e8c7',
    review: 'dddddddddddddddddddddddddddddd',
    advantage: 'dddddddddddddddddddddd',
    disadvantage: 'ddddddddd',
    userName: 'dddddddddddddddd',
    rating: 3,
    cameraId: 1,
    createAt: '2023-06-15T13:33:45.580Z'
  },
  {
    id: 'aa291c5a-d59d-4867-9b0b-5ec57d628ca1',
    review: 'dddddddddddddd',
    advantage: 'sdfddddddddddddd',
    disadvantage: 'dddddddddddddddddddd',
    userName: 'sdfsdf',
    rating: 4,
    cameraId: 1,
    createAt: '2023-06-15T13:37:27.836Z'
  },
  {
    id: 'c7d5367a-7593-4f02-bd8a-53d8d2ca7439',
    cameraId: 1,
    userName: 'Александра',
    advantage: 'Интересный дизайн',
    disadvantage: 'Неудобно пользоваться',
    review: 'В целом осталась довольна покупкой этой камеры.',
    rating: 4,
    createAt: '2023-06-16T09:28:09.195Z'
  },
  {
    id: '7b46003f-be62-4327-a511-468217a80576',
    review: '111111',
    advantage: 'фыч',
    disadvantage: '111',
    userName: 'ё11',
    rating: 5,
    cameraId: 1,
    createAt: '2023-06-16T17:19:47.217Z'
  },
  {
    id: 'dabb630a-dc6a-4179-a7a9-0ef269be8075',
    review: 'ddddddddddddd',
    advantage: 'ddddddddddd',
    disadvantage: 'dddddddddddd',
    userName: 'ddddddddddddddd',
    rating: 3,
    cameraId: 1,
    createAt: '2023-06-16T21:26:36.781Z'
  },
  {
    id: 'a3490c95-5309-41f9-8dfc-eb82636df632',
    review: 'dddddddddddddddddddddddddddd',
    advantage: 'dddddddddddddddddddd',
    disadvantage: 'ddddddddddddddddddd',
    userName: 'ddddddddddddddddddddddd',
    rating: 3,
    cameraId: 1,
    createAt: '2023-06-17T06:15:11.724Z'
  },
  {
    id: '50daf6d2-4fbf-4da5-8fa2-b755b963eaa0',
    review: '\nываыва',
    advantage: 'вввввввввв',
    disadvantage: 'ываыва',
    userName: 'вввввввввввввв',
    rating: 5,
    cameraId: 1,
    createAt: '2023-06-17T08:11:27.169Z'
  },
  {
    id: '3e9b8954-7c18-4f12-b4e8-2ef36caea7b3',
    review: 'dddddddddddddddddddddd',
    advantage: 'ddddddddddddddddddddddd',
    disadvantage: 'dddddddddddddddd',
    userName: 'sdddddddddddd',
    rating: 5,
    cameraId: 1,
    createAt: '2023-06-17T08:49:00.953Z'
  },
  {
    id: '1e9051ca-03f0-433c-b819-0533a3f1bea9',
    review: 'dddddddddddddddddddd',
    advantage: 'dddddddddddddddd',
    disadvantage: 'dddddddddddd',
    userName: 'dddddddddddddddddd',
    rating: 3,
    cameraId: 1,
    createAt: '2023-06-17T08:49:24.382Z'
  },
  {
    id: 'bf391443-6ce3-4f19-b57e-c0baa117e984',
    review: 'asdfffffffffffffffffff',
    advantage: 'adfadfa',
    disadvantage: 'adfasdf',
    userName: 'dsdfasdf',
    rating: 3,
    cameraId: 1,
    createAt: '2023-06-17T10:47:01.927Z'
  },
  {
    id: '126b0cfc-1dca-4396-a0cf-f9871fb607eb',
    review: 'dddddddddddddddddddddd',
    advantage: 'ddddddddddddddd',
    disadvantage: 'ddddddddddddddddd',
    userName: 'ddddddddddddddddddddd',
    rating: 5,
    cameraId: 1,
    createAt: '2023-06-17T10:53:25.325Z'
  },
  {
    id: '84c763d7-7275-4a7a-a14f-4b97deb46af1',
    review: 'ssssssssssssss',
    advantage: 'sdfsf',
    disadvantage: 'sdfsdfsdf',
    userName: 'sdfsdddddddddddddddd',
    rating: 3,
    cameraId: 1,
    createAt: '2023-06-17T11:52:23.679Z'
  },
  {
    id: '70093204-99f8-4838-b4f4-ae7bd13d7b6d',
    review: 'sddddddddddddddd',
    advantage: 'ddddddddddd',
    disadvantage: 'dddddddddd',
    userName: 'sdfsdddddddddddddddd',
    rating: 3,
    cameraId: 1,
    createAt: '2023-06-17T12:01:11.453Z'
  },
  {
    id: '07c44e70-54f5-43ee-beb8-541618b3f150',
    review: 'dddddddddddddddddd',
    advantage: 'ddddddddddddd',
    disadvantage: 'ddddddddddddd',
    userName: 'sdddddddddddddd',
    rating: 3,
    cameraId: 1,
    createAt: '2023-06-17T12:10:17.038Z'
  },
  {
    id: 'dd6adedf-6a95-4868-ab45-3a20f4b78f66',
    review: 'ddddddddddddddddddddd',
    advantage: 'ddddddddddddddddd',
    disadvantage: 'ddddddddddddddddddd',
    userName: 'ddddddddddddddddddd',
    rating: 4,
    cameraId: 1,
    createAt: '2023-06-17T12:12:01.534Z'
  },
  {
    id: 'c42c993d-c3f8-47c6-9eae-b5e7b4a795e3',
    review: 'sdsffffffffffffff',
    advantage: 'sdfsdfsdfsdf',
    disadvantage: 'sdfsdfsdfsdf',
    userName: 'sdfsfsdf',
    rating: 5,
    cameraId: 1,
    createAt: '2023-06-17T12:19:57.179Z'
  },
  {
    id: 'c66896a0-2240-4750-a7ea-4441ef43375a',
    review: 'sdssssssssssssssssssssss',
    advantage: 'ddddddddddddd',
    disadvantage: 'dddddddddddddd',
    userName: 'ddddddddddddd',
    rating: 4,
    cameraId: 1,
    createAt: '2023-06-17T13:10:33.431Z'
  },
  {
    id: 'd0caecc2-bd12-43db-9281-20300f838a5a',
    review: 'dddddddddddddddddddd',
    advantage: 'ddddddddddddddd',
    disadvantage: 'dddddddddddddddd',
    userName: 'ddddddddddddddddddd',
    rating: 3,
    cameraId: 1,
    createAt: '2023-06-17T13:10:50.546Z'
  },
  {
    id: 'a3c5b6bb-c73b-4677-88d8-e59bf897d305',
    review: 'ssssssssssssssssssssssss',
    advantage: 'sssssssssssssssssss',
    disadvantage: 'sssssssssssssssssss',
    userName: 'sssssssssssss',
    rating: 5,
    cameraId: 1,
    createAt: '2023-06-17T13:18:15.881Z'
  },
  {
    id: '9e5b13d3-c6c7-4981-8c5d-ef21211fb958',
    review: 'ssssssssssssssssssssssssssss',
    advantage: 'sssssssssssssssssssssssssssssssss',
    disadvantage: 'ssssssssssssssssssssssssssss',
    userName: 'asssssssssssssssssssssssssssss',
    rating: 3,
    cameraId: 1,
    createAt: '2023-06-17T13:18:45.374Z'
  },
  {
    id: '3be96b75-e7a3-46e1-ac1d-7d81b18a1c15',
    review: 'sssssssssssssss',
    advantage: 'ssssssssssssssssss',
    disadvantage: 'ssssssssssssss',
    userName: 'sssssssssssssssss',
    rating: 5,
    cameraId: 1,
    createAt: '2023-06-17T13:58:21.121Z'
  },
  {
    id: '77e0d96d-2d97-488b-8be7-9bd6adc6a295',
    review: 'ddddddddddddddddddddddddddd',
    advantage: 'ddddddddddddddddddddddddd',
    disadvantage: 'ddddddddddddddddddd',
    userName: 'dddddddddddddddddd',
    rating: 4,
    cameraId: 1,
    createAt: '2023-06-17T14:18:07.154Z'
  },
  {
    id: '9b339cd9-eaff-46b1-ac23-fe6ef51e1f7d',
    review: 'ывсывсывсывсывс',
    advantage: 'ывсывс',
    disadvantage: 'ывсывс',
    userName: 'всысывс',
    rating: 4,
    cameraId: 1,
    createAt: '2023-06-17T18:19:29.371Z'
  },
  {
    id: '1daf9f5d-cdd6-4692-b547-99ae69e3e298',
    review: '111111',
    advantage: '111',
    disadvantage: '11111',
    userName: '1111',
    rating: 2,
    cameraId: 1,
    createAt: '2023-06-17T18:24:54.804Z'
  },
  {
    id: '55f2d7a4-aea2-4695-ad9f-15c0af1b53fb',
    advantage: 'bbbbbbbbbb',
    cameraId: 1,
    disadvantage: 'bbbbbbbbbbbbbbbb',
    rating: 4,
    review: 'gggggggggggggggg',
    userName: '1w311212e',
    createAt: '2023-06-18T07:42:32.033Z'
  },
  {
    id: 'aa600023-b96b-4087-8828-119b715f48ae',
    cameraId: 1,
    userName: 't',
    advantage: 't',
    disadvantage: 't',
    review: 'ttttt',
    rating: 2,
    createAt: '2023-06-18T16:45:55.132Z'
  },
  {
    id: '8ab1eb89-54ec-4f23-a76b-32c4a7ebb214',
    cameraId: 1,
    userName: 't',
    advantage: 't',
    disadvantage: 't',
    review: 'ttttt',
    rating: 2,
    createAt: '2023-06-18T16:45:56.184Z'
  },
  {
    id: '41f68fc3-7e74-46d2-98aa-6138e26857d4',
    cameraId: 1,
    userName: 't',
    advantage: 't',
    disadvantage: 't',
    review: 'ttttt',
    rating: 3,
    createAt: '2023-06-18T16:46:02.001Z'
  },
  {
    id: '96ad1967-b0ff-4d9e-acb6-a8cd23049736',
    cameraId: 1,
    userName: 't',
    advantage: 't',
    disadvantage: 't',
    review: 'ttttt',
    rating: 3,
    createAt: '2023-06-18T16:46:11.537Z'
  },
  {
    id: '386fa260-d754-4cc3-9e8c-e5ba6c2402a3',
    cameraId: 1,
    userName: 't',
    advantage: 't',
    disadvantage: 't',
    review: 'ttttt',
    rating: 2,
    createAt: '2023-06-18T16:46:29.432Z'
  },
  {
    id: '6c8f1fb5-5574-4f1c-93a0-4ced89392e9e',
    cameraId: 1,
    userName: 'u',
    advantage: 'u',
    disadvantage: 'u',
    review: 'uuuuuuuuuuu',
    rating: 1,
    createAt: '2023-06-18T18:13:26.635Z'
  },
  {
    id: '0cc4c5da-f0c3-49bb-94bb-7cae21717c05',
    cameraId: 1,
    userName: 'u',
    advantage: 'u',
    disadvantage: 'u',
    review: 'uuuuuuuuuuu',
    rating: 1,
    createAt: '2023-06-18T18:13:27.744Z'
  },
  {
    id: 'c40e6d7e-32c3-4a8a-82db-f8ae78331f2a',
    cameraId: 1,
    userName: 'u',
    advantage: 'u',
    disadvantage: 'u',
    review: 'uuuuuuuuuuu',
    rating: 1,
    createAt: '2023-06-18T18:13:28.498Z'
  },
  {
    id: '57d194ba-af9a-4ee8-8b47-76a1c6233b74',
    cameraId: 1,
    userName: 'u',
    advantage: 'u',
    disadvantage: 'u',
    review: 'uuuuuuuuuuu',
    rating: 1,
    createAt: '2023-06-18T18:13:29.236Z'
  },
  {
    id: '6c5ac036-a6e2-4cd7-b505-9357f651e530',
    cameraId: 1,
    userName: 'g',
    advantage: 'g',
    disadvantage: 'g',
    review: 'gggggggg',
    rating: 2,
    createAt: '2023-06-18T18:21:01.365Z'
  },
  {
    id: 'bc859785-a353-4bed-9ae5-05da46bddc36',
    cameraId: 1,
    userName: 'testestest',
    advantage: 'qweqwe',
    disadvantage: 'qweqwe',
    review: 'qweqweqwe',
    rating: 2,
    createAt: '2023-06-18T19:21:54.646Z'
  },
  {
    id: '37ea87c6-5311-46aa-b7e2-7deabacd51a6',
    cameraId: 1,
    userName: 'g',
    advantage: 'g',
    disadvantage: 'g',
    review: 'gggggggggggggggggggg',
    rating: 3,
    createAt: '2023-06-18T19:27:41.112Z'
  },
  {
    id: 'f1c9a73d-b2f3-4713-81b0-ca6daab45692',
    cameraId: 1,
    userName: 'd',
    advantage: 'd',
    disadvantage: 'd',
    review: 'ddddddddd',
    rating: 2,
    createAt: '2023-06-18T19:41:20.066Z'
  },
  {
    id: '50bd8f7d-a6da-48b6-ad24-ec57219ab6c5',
    cameraId: 1,
    userName: 'f',
    advantage: 'f',
    disadvantage: 'f',
    review: 'fffff',
    rating: 2,
    createAt: '2023-06-18T19:44:23.075Z'
  },
  {
    id: 'fe82a117-8ffd-43f1-b5eb-ab0d82781028',
    cameraId: 1,
    userName: 'f',
    advantage: 'f',
    disadvantage: 'f',
    review: 'fffff',
    rating: 2,
    createAt: '2023-06-18T19:44:26.883Z'
  },
  {
    id: 'b6c88e90-7a90-434d-a798-57e79a4d5887',
    cameraId: 1,
    userName: 'f',
    advantage: 'f',
    disadvantage: 'f',
    review: 'fffff',
    rating: 2,
    createAt: '2023-06-18T19:44:29.584Z'
  },
  {
    id: 'ee831565-3f12-4b0b-8eb2-81000150dc5b',
    cameraId: 1,
    userName: 'f',
    advantage: 'f',
    disadvantage: 'f',
    review: 'fffff',
    rating: 2,
    createAt: '2023-06-18T19:44:31.660Z'
  },
  {
    id: 'dfc59793-50c7-43a2-b55f-fdf9cbcc5f2c',
    cameraId: 1,
    userName: 'f',
    advantage: 'f',
    disadvantage: 'f',
    review: 'fffff',
    rating: 2,
    createAt: '2023-06-18T19:44:33.589Z'
  },
  {
    id: '27ff500d-eab6-4de3-97d6-640e22027c6d',
    cameraId: 1,
    userName: 'r',
    advantage: 'r',
    disadvantage: 'r',
    review: 'rrrrrrrr',
    rating: 2,
    createAt: '2023-06-18T19:44:50.841Z'
  },
  {
    id: '6b8da5a4-ff17-47a8-947b-8088068b262c',
    cameraId: 1,
    userName: 'r',
    advantage: 'r',
    disadvantage: 'r',
    review: 'rrrrrrrrr',
    rating: 2,
    createAt: '2023-06-18T20:13:50.312Z'
  },
  {
    id: '4343aaab-65db-48d4-a27b-d9a92448fd58',
    cameraId: 1,
    userName: 'i',
    advantage: 'i',
    disadvantage: 'i',
    review: 'iiiiiiiiii',
    rating: 3,
    createAt: '2023-06-18T20:19:41.332Z'
  },
  {
    id: '9c6fb5a4-6bb8-4ef7-9a2c-57969e9de935',
    cameraId: 1,
    userName: 'm',
    advantage: 'm',
    disadvantage: 'm',
    review: 'mmmmmmmmmmm',
    rating: 2,
    createAt: '2023-06-18T20:19:59.311Z'
  },
  {
    id: '609dd90d-c9dc-46b1-a94a-529b388bd08b',
    cameraId: 1,
    userName: 'm',
    advantage: 'm',
    disadvantage: 'm',
    review: 'mmmmmmmmmmm',
    rating: 2,
    createAt: '2023-06-18T20:20:01.885Z'
  },
  {
    id: '527bea7e-8533-4d2e-860e-a645358a519e',
    rating: 5,
    userName: 'ffffffffdf',
    advantage: 'ffffffffffffffffffff',
    disadvantage: 'fffffffffffffffffffffff',
    review: 'ggggggggggggggggggggggggggggggggg',
    cameraId: 1,
    createAt: '2023-06-19T10:04:07.824Z'
  },
  {
    id: '9c057c58-b8fe-4f3c-87fe-851704888fb8',
    rating: 5,
    userName: 'ffffffffdf',
    advantage: 'ffffffffffffffffffff',
    disadvantage: 'fffffffffffffffffffffff',
    review: 'gggggggggggggggggggggggggggggg',
    cameraId: 1,
    createAt: '2023-06-19T10:45:39.537Z'
  },
  {
    id: '31ded570-232a-4910-8677-3f8de06f8924',
    rating: 5,
    userName: 'ffffffffdf',
    advantage: 'ffffffffffffffffffff',
    disadvantage: 'fffffffffffffffffffffff',
    review: 'gggggggggggggggggggggggggggggg',
    cameraId: 1,
    createAt: '2023-06-19T10:47:07.014Z'
  },
  {
    id: '78cefdb5-6af1-43b4-9c20-3820a1ef3008',
    rating: 5,
    userName: 'ffffffffdf',
    advantage: 'ffffffffffffffffffff',
    disadvantage: 'fffffffffffffffffffffff',
    review: 'ggggggggggggggggggggggggg',
    cameraId: 1,
    createAt: '2023-06-19T10:53:50.937Z'
  },
  {
    id: 'f73524c0-6b55-4425-93ba-cd3190a57b1e',
    rating: 5,
    userName: 'ffffffffdf',
    advantage: 'ffffffffffffffffffff',
    disadvantage: 'fffffffffffffffffffffff',
    review: 'ffffffffffffffffffffffffffffffffffffff',
    cameraId: 1,
    createAt: '2023-06-19T11:43:40.627Z'
  },
  {
    id: 'b2d24af0-b02c-448a-9476-523dfa5d1569',
    cameraId: 1,
    userName: 'aaaaaaaa',
    advantage: 'ooooooo',
    disadvantage: 'aaaaaaaaaa',
    review: 'dddddddddddddddd',
    rating: 5,
    createAt: '2023-06-20T08:37:43.003Z'
  },
  {
    id: 'b2816104-38f4-4d15-ac6a-062b79b99784',
    cameraId: 1,
    userName: 'Кирилл',
    advantage: 'Легкая в плане веса, удобная в интерфейсе',
    disadvantage: 'Быстро садиться зарядка',
    review: 'Это моя первая камера. Я в восторге, нареканий нет',
    rating: 5,
    createAt: '2023-06-20T15:34:06.536Z'
  },
  {
    id: '1cd6bb86-608e-490e-98c7-4cea31aed007',
    cameraId: 1,
    userName: 'aaaaa',
    advantage: 'aaaaa',
    disadvantage: 'aaaaa',
    rating: 5,
    review: 'aaaaa',
    createAt: '2023-06-20T19:49:44.139Z'
  },
  {
    id: '196d605b-7073-467e-a9c8-a3cd9303d814',
    cameraId: 1,
    userName: 'qqqqqqqqqq',
    advantage: 'qqqqqq',
    disadvantage: 'qqqqqqq',
    review: 'qqqqqqqq',
    rating: 2,
    createAt: '2023-06-20T19:55:07.983Z'
  },
  {
    id: '99ddd214-77e1-435c-914e-be3105e83854',
    cameraId: 1,
    userName: 'aaaaaaaa',
    advantage: 'd',
    disadvantage: 'ииииииииии',
    review: 'ffffffffffffffff',
    rating: 4,
    createAt: '2023-06-20T20:21:21.060Z'
  },
  {
    id: '8b09c56a-0807-44ea-8c44-8ef885fe2d78',
    cameraId: 1,
    userName: 'c',
    advantage: 'd',
    disadvantage: 'd',
    review: 'hhhhhh',
    rating: 3,
    createAt: '2023-06-20T20:21:51.880Z'
  },
  {
    id: '8c868985-4b49-432c-8fdc-1bb529d58fa3',
    cameraId: 1,
    userName: 'c',
    advantage: 'ooooooo',
    disadvantage: 'd',
    review: 'zzzzzz',
    rating: 5,
    createAt: '2023-06-20T20:23:32.914Z'
  },
  {
    id: 'd9d48e09-54d8-4d3a-92f3-dd968466d41d',
    cameraId: 1,
    userName: 'qqqqqqqqqq',
    advantage: 'ooooooo',
    disadvantage: 'ddd',
    review: 'iiiiiiiiiiiiiiii',
    rating: 3,
    createAt: '2023-06-21T07:31:33.168Z'
  },
  {
    id: '45eccddb-bc3c-4bfa-baa3-8ced0ef9b9ba',
    cameraId: 1,
    userName: 'c',
    advantage: 'd',
    disadvantage: 'd',
    review: 'dddddddd',
    rating: 3,
    createAt: '2023-06-21T07:56:43.233Z'
  },
  {
    id: '41798127-9452-4206-97fc-cd74ff2c3886',
    cameraId: 1,
    userName: 'йййййййййй',
    advantage: 'йййййййййй',
    disadvantage: 'ййййййй',
    review: 'ййййййййййй',
    rating: 4,
    createAt: '2023-06-21T08:02:49.365Z'
  },
  {
    id: '42e0a06a-5769-4fa3-a367-37cac8d98102',
    cameraId: 1,
    userName: 'c',
    advantage: 'aaaaaaaaaaa',
    disadvantage: 'aaaaaaaaaa',
    review: 'qqqqqqqqqqqqqq',
    rating: 5,
    createAt: '2023-06-21T08:48:08.194Z'
  },
  {
    id: '0241b395-23e0-4544-8552-d375f940ef2d',
    cameraId: 1,
    userName: '5555555',
    advantage: '5555555',
    disadvantage: '55555555',
    review: '55555555',
    rating: 4,
    createAt: '2023-06-21T10:44:12.351Z'
  },
  {
    id: '4ae182f3-eba0-4c2d-89a1-f4f9b71e0b6a',
    cameraId: 1,
    userName: '66666',
    advantage: '666666',
    disadvantage: '666666',
    review: '66666666',
    rating: 5,
    createAt: '2023-06-21T10:44:55.105Z'
  },
  {
    id: 'b6f779d8-eed7-4466-831d-c92df5d7da22',
    cameraId: 1,
    userName: 'фыч',
    advantage: 'фыч',
    disadvantage: 'фыч',
    review: 'фычфыч',
    rating: 3,
    createAt: '2023-06-21T13:34:46.869Z'
  },
  {
    id: '2416b481-b62d-4ab4-9e41-d5d9c75dc734',
    cameraId: 1,
    userName: 'еЕлены',
    advantage: '53ц25',
    disadvantage: '2525',
    review: '52525цеце',
    rating: 4,
    createAt: '2023-06-21T14:29:30.756Z'
  },
  {
    id: '91960ee7-ceb4-4389-a9a8-c4930bc5b179',
    userName: 'FFF',
    advantage: 'Voo',
    disadvantage: 'Freee',
    review: 'ewrwwwwww',
    rating: 1,
    cameraId: 1,
    createAt: '2023-06-21T17:39:17.208Z'
  },
  {
    id: '1d4bc2ab-4b7f-4a26-989c-8954299492b8',
    userName: 'VLD',
    advantage: 'Voo',
    disadvantage: 'Freee',
    review: 'ewrwwwwww',
    rating: 4,
    cameraId: 1,
    createAt: '2023-06-21T17:39:48.609Z'
  },
  {
    id: '0e5a8483-73aa-47cc-b9f2-bbf33eb3362d',
    userName: 'Vladislav',
    advantage: 'price',
    disadvantage: 'woo',
    review: 'AFdsfd',
    rating: 5,
    cameraId: 1,
    createAt: '2023-06-22T04:53:52.722Z'
  },
  {
    id: '0fa1f9aa-0f20-4555-b1d0-25f5d0172535',
    userName: 'Vladislav',
    advantage: 'wea',
    disadvantage: 'woo',
    review: 'dfsadfddddddddd',
    rating: 4,
    cameraId: 1,
    createAt: '2023-06-22T05:54:46.347Z'
  },
  {
    id: 'd3a47cb3-1437-4788-ab1e-e3de1280c9f3',
    userName: 'Vladislav',
    advantage: 'price',
    disadvantage: 'woo',
    review: 'aaaaaggggggggggggggggggggggge',
    rating: 4,
    cameraId: 1,
    createAt: '2023-06-22T06:06:03.733Z'
  },
  {
    id: '7057e961-0d16-43a8-9341-22fbec7a96fc',
    userName: 'Vladislav',
    advantage: 'wea',
    disadvantage: 'woo',
    review: 'ddddddhh',
    rating: 3,
    cameraId: 1,
    createAt: '2023-06-22T06:23:34.032Z'
  },
  {
    id: '7026d852-bb57-4d77-98d1-2d1ceacab2f9',
    userName: 'Vladislav',
    advantage: 'wea',
    disadvantage: 'woo',
    review: 'afddddddddddd',
    rating: 2,
    cameraId: 1,
    createAt: '2023-06-22T07:31:40.216Z'
  },
  {
    id: 'b81241b7-ba7d-48ce-98b7-027a9d28ad16',
    advantage: 'sadf',
    cameraId: 1,
    disadvantage: 'asdf',
    rating: 3,
    review: '1111asfdsadf',
    userName: 'sadf',
    createAt: '2023-06-22T07:39:09.203Z'
  },
  {
    id: 'f2caf377-754a-4e84-9283-440565fb75aa',
    userName: 'Vladislav',
    advantage: 'wea',
    disadvantage: 'woo',
    review: 'ddddddddddaw',
    rating: 4,
    cameraId: 1,
    createAt: '2023-06-22T08:25:32.356Z'
  },
  {
    id: 'bf3cdaf0-23e8-4f6a-845d-e31361ad5b94',
    rating: 5,
    userName: 'hhhhhhhhhhhhhhh',
    advantage: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
    disadvantage: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
    review: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
    cameraId: 1,
    createAt: '2023-06-22T14:10:52.308Z'
  },
  {
    id: '7ff01215-dca9-42e0-8b33-c94bc8d99dc3',
    cameraId: 1,
    userName: 'zzzzzzzzzzzzzzzz',
    advantage: 'zzzzzzzzzzzzzzzzzzzzzz',
    disadvantage: 'zzzzzzzzzzzzzzzzzzzzzzzzzzz',
    review: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    rating: 1,
    createAt: '2023-06-22T17:31:49.992Z'
  },
  {
    id: '63d8062c-1e3d-43af-813e-073a21d84489',
    cameraId: 1,
    userName: 'фвфыв',
    advantage: 'фыфыч',
    disadvantage: 'фычфыч',
    review: 'фычфычфычфыч',
    rating: 4,
    createAt: '2023-06-22T18:12:41.257Z'
  },
  {
    id: '79bb94aa-d796-443a-ae84-f8a66e999d66',
    cameraId: 1,
    userName: 'zzzzzzzzzzzzzzzzz',
    advantage: 'zzzzzzzzzzzzzzzzzzzzzzz',
    disadvantage: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    review: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    rating: 3,
    createAt: '2023-06-22T18:17:23.443Z'
  },
  {
    id: '5bf7269f-a99f-4274-a680-92fc95bee277',
    cameraId: 1,
    userName: 'ыыыыыыыыыыыыыыыыыыыы',
    advantage: 'ыыыыыыыыыыыыыы',
    disadvantage: 'ыыыыыыыыыыыыыыыыыы',
    rating: 3,
    review: 'ыыыыыыыыыыыыыы',
    createAt: '2023-06-22T18:52:24.971Z'
  },
  {
    id: '0a1ec450-09f1-48f8-9293-70f5a06cc033',
    cameraId: 1,
    userName: 'z',
    advantage: 'zz',
    disadvantage: 'zzz',
    review: 'zzzzzzzzzzzzzz',
    rating: 1,
    createAt: '2023-06-22T21:58:28.772Z'
  },
  {
    id: 'b0cb5fd8-c1a6-4fa3-b3ce-c7d58dbeb6c7',
    cameraId: 1,
    userName: 'u',
    advantage: 'uuuuuuuuuuu',
    disadvantage: 'uuu',
    review: 'uuuuuuuuuuuuuuuuuuuuuuu',
    rating: 1,
    createAt: '2023-06-22T22:02:17.167Z'
  },
  {
    id: 'b8509b6f-6def-4d80-be00-4547bad0a97f',
    rating: 1,
    userName: 'Vladislav',
    advantage: 'weadf',
    disadvantage: 'woodf',
    review: 'aadsfdsdfssg',
    cameraId: 1,
    createAt: '2023-06-23T04:42:31.549Z'
  },
  {
    id: '580ad086-52ea-4737-928e-9db1909f8769',
    rating: 1,
    userName: 'Vladislav',
    advantage: 'price',
    disadvantage: 'woogth',
    review: 'bn nnnnnnnnn',
    cameraId: 1,
    createAt: '2023-06-23T06:13:51.765Z'
  },
  {
    id: '40f14a2c-d9d1-445a-8df4-c5a11575203a',
    rating: 5,
    userName: 'Vl',
    advantage: 'weajk',
    disadvantage: 'wookkj',
    review: 'jkkkkkkj',
    cameraId: 1,
    createAt: '2023-06-23T06:14:29.687Z'
  },
  {
    id: 'ab26b0ac-c84f-43d6-9c93-77e069190c3c',
    rating: 4,
    userName: 'Vladislav',
    advantage: 'price',
    disadvantage: 'MICES',
    review: 'FFFFFFFFASSSSSSSSSS',
    cameraId: 1,
    createAt: '2023-06-23T06:15:32.257Z'
  },
  {
    id: 'e35041ba-fd7f-4666-9f13-d5cf9716f2ba',
    rating: 5,
    userName: 'ffffffffdf',
    advantage: 'ffffffffffffffffffff',
    disadvantage: 'ggggggggggggggg',
    review: 'ggggggggggggggggggggggggggggggggggggggg',
    cameraId: 1,
    createAt: '2023-06-23T21:39:15.420Z'
  },
  {
    id: '748297cb-9b19-4434-b25c-47e866b8b33e',
    rating: 1,
    userName: 'ffffffffdf',
    advantage: 'ffffffffffffffffffff',
    disadvantage: 'fffffffffffffffffffffff',
    review: 'ggggggggggggggggggggggggg',
    cameraId: 1,
    createAt: '2023-06-23T21:39:59.744Z'
  },
  {
    id: 'fb41e7d6-e4d4-4136-8dc8-3a839396a5ed',
    cameraId: 1,
    userName: 'cccc',
    advantage: 'dasdasdasdas',
    disadvantage: 'Werf',
    review: 'rerererer',
    rating: 2,
    createAt: '2023-06-24T07:57:17.709Z'
  },
  {
    id: '559bd4f0-aaa3-4d4f-baf5-655cdc4aeb1e',
    cameraId: 1,
    userName: 'cccc',
    advantage: 'dasdasdasdas',
    disadvantage: 'Werf',
    review: 'rerererer',
    rating: 2,
    createAt: '2023-06-24T07:57:23.120Z'
  },
  {
    id: '158c615a-14c2-434a-91b0-4b34217cd470',
    cameraId: 1,
    userName: 'cccc',
    advantage: 'dasdasdasdas',
    disadvantage: 'Werf',
    review: 'rerererer',
    rating: 2,
    createAt: '2023-06-24T07:57:23.200Z'
  },
  {
    id: '92bcdb67-d3bb-47a6-b016-27abb3a17f18',
    cameraId: 1,
    userName: 'cccc',
    advantage: 'dasdasdasdas',
    disadvantage: 'Werf',
    review: 'rerererer',
    rating: 2,
    createAt: '2023-06-24T07:57:23.225Z'
  },
  {
    id: '942c2830-ec18-4c8e-ab3f-dcd9f69be601',
    cameraId: 1,
    userName: 'cccc',
    advantage: 'dasdasdasdas',
    disadvantage: 'Werf',
    review: 'rerererer',
    rating: 2,
    createAt: '2023-06-24T07:57:23.392Z'
  },
  {
    id: 'ae369158-dbd0-4ced-ab4b-73e06389c6f4',
    cameraId: 1,
    userName: 'cccc',
    advantage: 'dasdasdasdas',
    disadvantage: 'Werf',
    review: 'rerererer',
    rating: 2,
    createAt: '2023-06-24T07:57:23.587Z'
  },
  {
    id: '8ef76687-d097-46dc-95c1-83b5dade6cf3',
    rating: 5,
    userName: 'ggggggggggggggggg',
    advantage: 'fffggggggggggggggggggggggggggggggggggggggggg',
    disadvantage: 'gggggggggggggggggggggggggggggg',
    review: 'gggggggggggggggggggggggggggggggggg',
    cameraId: 1,
    createAt: '2023-06-24T18:00:48.389Z'
  },
  {
    id: '468e822c-7f39-4ade-a495-afecbabdb079',
    cameraId: 1,
    userName: 'sadf',
    advantage: 'sdfsaf',
    disadvantage: 'asfasdf',
    review: 'sadfas',
    rating: 4,
    createAt: '2023-06-26T06:15:01.263Z'
  },
  {
    id: '6561c6be-6923-4bec-ac5d-da081cd4edb2',
    cameraId: 1,
    userName: 'ывсвс',
    advantage: 'ывс',
    disadvantage: 'ывс',
    review: 'ывссывс',
    rating: 4,
    createAt: '2023-06-26T06:58:11.603Z'
  },
  {
    id: '55008c7f-910b-4982-8185-1898c5944dc7',
    cameraId: 1,
    userName: 'ывсвс',
    advantage: 'ывс',
    disadvantage: 'ывс',
    review: 'ывссывс',
    rating: 4,
    createAt: '2023-06-26T06:58:23.302Z'
  },
  {
    id: '0d907c74-585e-4a7b-811c-69fec4b9e7b0',
    cameraId: 1,
    userName: 'ывсвс',
    advantage: 'ывс',
    disadvantage: 'ывс',
    review: 'ывссывс',
    rating: 4,
    createAt: '2023-06-26T06:58:32.587Z'
  },
  {
    id: '49bc68e2-8f25-4767-8c55-45b410e01908',
    cameraId: 1,
    userName: 'ывсвс',
    advantage: 'ывс',
    disadvantage: 'ывс',
    review: 'ывссывс',
    rating: 4,
    createAt: '2023-06-26T06:58:37.373Z'
  },
  {
    id: '74da93f3-ff22-4422-a55c-bfcfc0b13ba4',
    review: 'JNHGF',
    advantage: 'jhgfd',
    disadvantage: 'BVC',
    userName: 'hgfdd',
    rating: 5,
    cameraId: 1,
    createAt: '2023-06-26T08:29:56.402Z'
  },
  {
    id: 'b5fe0a9e-5682-4bb8-b727-9e888e903d87',
    cameraId: 1,
    userName: 'уккцук',
    advantage: 'куцкуц',
    disadvantage: 'уцкцк',
    review: 'укцкку',
    rating: 5,
    createAt: '2023-06-26T09:42:55.124Z'
  },
  {
    id: '555abf1f-46dc-4583-83a2-85a682fb07d3',
    cameraId: 1,
    userName: 'ав',
    advantage: 'выаы',
    disadvantage: 'ваыаы',
    review: 'выаыа',
    rating: 4,
    createAt: '2023-06-26T09:44:12.606Z'
  },
  {
    id: 'f3f4eee6-e9e8-4bf3-8e3c-55b77e706335',
    cameraId: 1,
    userName: 'товаолиа',
    advantage: 'иоыиваары',
    disadvantage: 'оыиоыаи',
    review: 'ыоивоыи',
    rating: 2,
    createAt: '2023-06-26T09:46:44.175Z'
  },
  {
    id: '282cd5f5-3d45-40cd-bb4d-4739a4a1f019',
    cameraId: 1,
    userName: 'Вася',
    advantage: 'Хороший аппарат',
    disadvantage: 'Не очень удобные кнопки',
    review: 'мне подошел',
    rating: 4,
    createAt: '2023-06-26T10:53:43.603Z'
  },
  {
    id: '9cf3e8db-25bc-4fa7-8dd4-5fa03ad45e48',
    rating: 5,
    userName: 'aqua',
    advantage: 'мне нравится!',
    disadvantage: 'не заметила',
    review: 'Круто!',
    cameraId: 1,
    createAt: '2023-06-26T16:03:01.199Z'
  }
];


export const makeFakeReviewItem = (): Review => (
  {
    id: '9cf3e8db-25bc-4fa7-8dd4-5fa03ad45e48',
    rating: 5,
    userName: 'aqua',
    advantage: 'мне нравится!',
    disadvantage: 'не заметила',
    review: 'Круто!',
    cameraId: 1,
    createAt: '2023-06-26T16:03:01.199Z'
  }
);
