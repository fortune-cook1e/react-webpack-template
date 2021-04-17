import React from 'react'
import { useHistory } from 'react-router'

import { menus, MenuItem } from '@/router/menus'

import styles from './index.module.less'

const Sidebar:React.FC = () => {
  const history = useHistory()

  const go = (path:string) => {
    history.push(path)
  }

  return (
    <nav className={styles.sidebar}>
      {
        menus.map((item:MenuItem) => {
          return (
            <div
              key={item.path}
              className={styles.sidebar__item}
              onClick={() => go(item.path)}
            >
              {item.title}
            </div>
          )
        })
      }
    </nav>
  )
}

export default Sidebar