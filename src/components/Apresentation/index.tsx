import React from 'react'
import { Container } from './styles'

export const Apresentation: React.FC = () => {
  return (
    <Container>
      <h1>Olá sou Matheus Eduardo</h1>
      <p className="title">FullStack Developer</p>
      <section>
        <p>
          Aqui você vai descobrir um pouco do que eu faço, do que aprendi na
          minha caminhada, oque estou aprendendo, minha trajetoria, e minhas
          aventuras,você também vai descobrir que não foi fácil aprender, e que
          lutei muito pra saber oque eu sei hoje, seja bem vindo espero que
          goste !
        </p>
        <div id="portfolio"></div>
      </section>
    </Container>
  )
}
