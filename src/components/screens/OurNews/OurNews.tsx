import { FC } from 'react'

import { Container } from '@/components/container/Container'
import { BiSearch } from 'react-icons/bi'
import { SlMenu } from 'react-icons/sl'

import styles from './OurNews.module.scss'
import { Menu } from './menu/Menu'

export const OurNews: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.header_top}>
            {' '}
            <Menu />
            <div className={styles.header_search}>
              <BiSearch size={22} />
            </div>
            <div className={styles.header_burger}>
              <SlMenu size={16} />
            </div>
          </div>
        </Container>
      </header>
      <main>
        <Container>OurNews</Container>
      </main>
    </>
  )
}
