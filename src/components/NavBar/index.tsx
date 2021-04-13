/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import { Header } from './styles'

interface Props {
  togleTheme(): void
  theme: string
}
export const NavBar: React.FC<Props> = ({ togleTheme, theme }) => {
  const [navBar, setNavBar] = useState(false)
  function Scroll() {
    useEffect(function onFirstMount() {
      function onScroll() {
        if (window.scrollY >= 150) {
          setNavBar(true)
        } else {
          setNavBar(false)
        }
      }

      window.addEventListener('scroll', onScroll)
    }, []) // empty dependencies array means "run this once on first mount"
    return null
  }

  Scroll()

  return (
    <Header>
      <div className={navBar ? 'active' : ''}>
        <h1>Matheus Dev's</h1>
        <ul>
          <li>Portfólio</li>
          <li>Skills</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
        <section>
          <button onClick={togleTheme}>Theme:{theme}</button>
        </section>
      </div>
    </Header>
  )
}
