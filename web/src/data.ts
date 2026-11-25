import { asset } from './assets'

export const BOOK_URL = 'https://n333022.yclients.ru'
export const PHONE = '+7 (912) 650-28-12'
export const PHONE_HREF = 'tel:+79126502812'
export const ADDRESS = 'г. Красноуральск, ул. Ленина, 20'
export const VK_URL = 'https://vk.ru/bautystudio_rim'

export const roads = [
  {
    id: 'color',
    index: '01',
    title: 'Окрашивание',
    text: 'Сложный цвет, блонд, тон в тон и обновление корней — под ваш исходный волос.',
    href: '#services',
  },
  {
    id: 'cut',
    index: '02',
    title: 'Стрижка',
    text: 'Женская и мужская форма: от базы до точного силуэта под лицо.',
    href: '#services',
  },
  {
    id: 'ext',
    index: '03',
    title: 'Наращивание',
    text: 'Длина и плотность с аккуратной посадкой и последующим снятием.',
    href: '#services',
  },
  {
    id: 'learn',
    index: '04',
    title: 'Обучение',
    text: 'Семинары и практика внутри студии — от базовых стрижек до подбора цвета.',
    href: '#training',
  },
] as const

export const works: Array<{
  src: string
  alt: string
  label: string
  tall?: boolean
}> = [
  { src: asset('images/work-01.jpg'), alt: 'Сложное окрашивание, светлые пряди', label: 'Цвет', tall: true },
  { src: asset('images/work-02.jpg'), alt: 'Укладка и форма', label: 'Форма' },
  { src: asset('images/work-03.jpg'), alt: 'Блонд с мягким переходом', label: 'Блонд' },
  { src: asset('images/work-04.jpg'), alt: 'Тёмный насыщенный тон', label: 'Тон' },
  { src: asset('images/work-05.jpg'), alt: 'Объёмная укладка', label: 'Укладка' },
]

export const roadStrips = [
  asset('images/strip-01.jpg'),
  asset('images/strip-02.jpg'),
  asset('images/strip-03.jpg'),
] as const

export const heroHair = asset('images/hero-hair.jpg')
export const trainPhoto = asset('images/train.jpg')

export const services = [
  {
    name: 'Окрашивания',
    desc: 'Любая сложность: коррекция, блонд, сложный цвет, тонирование.',
    tag: 'Цвет',
  },
  {
    name: 'Стрижка женская / мужская',
    desc: 'Форма под структуру волос и ваш ритм ухода.',
    tag: 'Форма',
  },
  {
    name: 'Наращивание и снятие',
    desc: 'Аккуратная посадка длины и безопасное снятие.',
    tag: 'Длина',
  },
  {
    name: 'Долговременная завивка',
    desc: 'Мягкая волна или выраженная текстура — по запросу.',
    tag: 'Текстура',
  },
  {
    name: 'Спа для волос',
    desc: 'Восстановление после цвета и плотных процедур.',
    tag: 'Уход',
  },
  {
    name: 'Укладки',
    desc: 'На выход, съёмку или повседневный объём.',
    tag: 'Финиш',
  },
] as const
