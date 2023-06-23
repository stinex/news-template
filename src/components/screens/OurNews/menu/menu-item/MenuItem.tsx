import { FC } from 'react'
import Link from 'next/link'

import styles from './MenuItem.module.scss'
import { ILinkHeader } from '@/assets/data/our-news/data.interface'

interface IMenuItem {
  item: ILinkHeader
}

export const MenuItem: FC<IMenuItem> = ({ item }) => {
  return (
    <li className={styles.nav_li}>
      <Link
        href="#"
        className={`${styles.nav_link} ${item.class ? styles.active : ''}`}
      >
        {item.name}
      </Link>
    </li>
  )
}
