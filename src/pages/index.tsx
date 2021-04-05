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
      <Head>
        <title>Homepage</title>
      </Head>
      <video
        autoPlay
        loop
        className="video-background"
        src={
          'https://assets.mixkit.co/videos/preview/mixkit-smoke-with-fluorescent-particles-on-black-background-12495-large.mp4'
        }
      ></video>
      <div data-aos="fade-in" data-aos-duration="2000">
        <NavBar togleTheme={togleTheme} />
      </div>
      <div data-aos="fade-right" data-aos-duration="2000">
        <Apresentation />
      </div>
      <div data-aos="fade-right" data-aos-duration="1500">
        <Portfolio />
      </div>
      <div data-aos="fade-in" data-aos-duration="500">
        <Skills />
      </div>
      <div data-aos="fade-in" data-aos-duration="500">
        <Description />
      </div>
      <div data-aos="fade-in" data-aos-duration="500">
        <About />
      </div>
      <div data-aos="fade-in" data-aos-duration="500">
        <Footer />
      </div>
    </Container>
  )
}

export default Home
