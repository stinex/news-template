import { IBarNews, ILinkHeader } from './data.interface'

import ImageNew1 from '@/assets/images/our-news/new-1.png'
import ImageNew2 from '@/assets/images/our-news/new-2.png'
import ImageNew3 from '@/assets/images/our-news/new-3.png'
import ImageNew4 from '@/assets/images/our-news/new-4.png'
import ImageAdv1 from '@/assets/images/our-news/adv-1.png'
import ImageAdv2 from '@/assets/images/our-news/adv-2.png'


export const dataLinkHeader: ILinkHeader[] = [
  {
    name: 'Работа',
  },
  {
    name: 'Недвижимость',
  },
  {
    name: 'Видео',
  },
  {
    name: 'Погода',
  },
  {
    name: 'Бизнес',
  },
  {
    name: 'Объявления',
  },
  {
    name: 'Афиша',
  },
  {
    name: 'Здоровье',
    class: 'active',
  },
]

export const dataBarNews: IBarNews[] = [
  {
    img: ImageNew1,
    title: 'Поясница сразу перестала болеть,когда я купила этот ...',
    description:
      'Дискомфорт в пояснице может возникнуть по множеству причин: от повреждений мышц и проблем с ...',
    date: '21 июня 2023',
    type: 'Здоровая жизнь',
  },
  {
    img: ImageNew2,
    title: 'Когда плохое качество волос означают плохое здоровье',
    description:
      'Означает ли плохая прическа плохое здоровье? Ваши волосы пытаются рассказать вам что-то о вашем здоровье?',
    date: '29 мая  2023',
    type: 'секреты красоты',
  },
  {
    img: ImageNew3,
    title: 'Боль в шее быстро ушла, когда я нашла это простое решение...',
    description:
      'Работа за компьютером, постоянная эксплуатация гаджетов, низкий уровень физической активности ...',
    date: '21 мая 2023',
    type: 'Здоровая жизнь',
  },
  {
    img: ImageNew4,
    title: 'Перестаньте совершать эти ошибки в диете',
    description:
      'Если ваша любимая пара джинсов не подходит, весы, кажется, застряли на какой-то страшной величине, или...',
    date: '18 июня 2023',
    type: 'Правильное питание',
  },
]

export const dataBarAdv = [
  {
    img: ImageAdv1,
    title: 'Массажные кресла Ergonova',
    description: 'Релакс-зона у вас дома',
    site: 'ergonova.ru',
    siteIcon: '',
    link: 'https://ergonova.ru/massazhnye-kresla',
  },
  {
    img: ImageAdv2,
    title: 'Массажер для шеи Ergonova',
    description: 'Шея больше не болит',
    site: 'ergonova.ru',
    siteIcon: '',
    link: 'https://ergonova.ru/massazhery/massazher-ergonova-magictouch-pro-neck',
  },
]
