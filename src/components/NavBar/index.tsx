/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Container } from './styles'

interface Props {
  togleTheme(): void
  theme: string
}
export const NavBar: React.FC<Props> = ({ togleTheme, theme }) => {
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
            <span id="menu" className="btn-nav skew">
              <button className="toggle-theme" onClick={togleTheme}>
                Theme: {theme}
              </button>
            </span>
          </div>
          <div className="nav right">
            <a href="#portfolio" className="nav-link">
              <span className="nav-link-span">
                <span className="u-nav">Portfólio</span>
              </span>
            </a>
            <a href="#skills" className="nav-link">
              <span className="nav-link-span">
                <span className="u-nav">Skills</span>
              </span>
            </a>
            <a href="#sobre" className="nav-link">
              <span className="nav-link-span">
                <span className="u-nav">Sobre</span>
              </span>
            </a>
            <a href="#contato" className="nav-link">
              <span className="nav-link-span">
                <span className="u-nav">Contato</span>
              </span>
            </a>
            <a href="#work" id="theme" className="nav-link ">
              <span className="nav-link-span">
                <button className="toggle-theme" onClick={togleTheme}>
                  Theme: {theme}
                </button>
              </span>
            </a>
          </div>
        </nav>
      </header>
    </Container>
  )
}
