import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__container}>
        <span className={styles.header__container_img}>
          <img src="" alt="img" />
        </span>
        <span className={styles.header__container__search}>
          <input type="text" placeholder="Buscar producto..." />
          <i></i>
        </span>
        <ul className={styles.header__container__options}>
          <li className={styles.header__container__options_item}>
            <a href="">
              Mi cuenta
              <i></i>
            </a>
        </li>
          <li className={styles.header__container__options_item}><a href=""><i></i></a></li>
          <li className={styles.header__container__options_item}><a href="">Cargar pedido masivo<i></i></a></li>
          <li className={styles.header__container__options_item}><a href="">Mi carrito<i></i></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
