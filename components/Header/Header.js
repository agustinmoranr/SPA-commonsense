import React from 'react'
import styles from './header.module.css'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Link href="/"><a><HomeOutlinedIcon style={{fontSize: "2.25rem"}} /></a></Link>
        <h1>Rick y Morty</h1>
        <Link href="/about"><a>Nosotros</a></Link>
      </nav>
    </header>
  )
}

export default Header
