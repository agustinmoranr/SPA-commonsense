import React from 'react'
import Link from 'next/link'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <nav className={style.container}>
        <Link href="/about"><a>Derechos reservados S.A de CV</a></Link>
        <Link href="/about"><a>Contacto: 55-32-54-77-43</a></Link>
        <Link href="/about"><a>Térrminos y Condiciones</a></Link>
      </nav>
    </footer>
  )
}

export default Footer
