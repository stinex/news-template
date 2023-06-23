import { FC } from 'react'

import { MenuItem } from './menu-item/MenuItem'

import { dataLinkHeader } from '@/assets/data/our-news/data'

import styles from './Menu.module.scss'

export const Menu: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_ul}>
        {dataLinkHeader.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  )
}
