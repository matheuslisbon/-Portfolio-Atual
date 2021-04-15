import React from 'react'
import { ImageSlider } from '../Carrousel'
import { SliderData } from '../Carrousel/SliderData'
import { Container, Title } from './styles'

export const Portfolio: React.FC = () => {
  return (
    <Container>
      <Title>Pórtfolio</Title>
      <ImageSlider slides={SliderData} />
      <div id="skills"></div>
    </Container>
  )
}
