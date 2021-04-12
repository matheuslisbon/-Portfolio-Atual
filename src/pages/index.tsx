import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import { NavBar } from '../components/NavBar'
import { Apresentation } from '../components/Apresentation'
import { Portfolio } from '../components/Portfolio'
import { Skills } from '../components/Skills'
import { Footer } from '../components/Footer'
import { Description } from '../components/Description'
import { About } from '../components/About'

interface Props {
  togleTheme(): void
}
const Home: React.FC<Props> = ({ togleTheme }) => {
  return (
    <Container>
      <div className="background-container">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
          alt=""
          className="background-effect"
        />
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <Head>
        <title>Homepage</title>
      </Head>
      <div data-aos="fade-in" data-aos-duration="2000">
        <NavBar togleTheme={togleTheme} />
      </div>
      <div data-aos="fade-right" data-aos-duration="2000">
        <Apresentation />
      </div>
      <div data-aos="fade-right" data-aos-duration="1500">
        <Portfolio />
      </div>
      <div data-aos="fade-right" data-aos-duration="1500">
        <Skills />
      </div>
      <div data-aos="fade-right" data-aos-duration="1500">
        <Description />
      </div>
      <div data-aos="fade-right" data-aos-duration="1500">
        <About />
      </div>
      <div data-aos="fade-right" data-aos-duration="1500">
        <Footer />
      </div>
    </Container>
  )
}

export default Home
