/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import { Container } from './styles'

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
    /**
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
     */
    <Container>
      <header id="nav-wrapper">
        <nav id="nav">
          <div className="nav left">
            <span className="gradient skew">
              <h1 className="logo un-skew">Matheus'Devs</h1>
            </span>
            <button id="menu" className="btn-nav">
              <span className="fas fa-bars"></span>
            </button>
          </div>
          <div className="nav right">
            <a href="#home" className="nav-link">
              <span className="nav-link-span">
                <span className="u-nav">Portfólio</span>
              </span>
            </a>
            <a href="#about" className="nav-link">
              <span className="nav-link-span">
                <span className="u-nav">Skills</span>
              </span>
            </a>
            <a href="#contact" className="nav-link">
              <span className="nav-link-span">
                <span className="u-nav">Sobre</span>
              </span>
            </a>
            <a href="#contact" className="nav-link">
              <span className="nav-link-span">
                <span className="u-nav">Contato</span>
              </span>
            </a>
            <a href="#work" className="nav-link">
              <span className="nav-link-span">
                <button onClick={togleTheme}>Theme:{theme}</button>
              </span>
            </a>
          </div>
        </nav>
      </header>
    </Container>
  )
}
