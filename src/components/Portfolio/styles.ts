import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 30px auto;
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 50px;
  backdrop-filter: blur(20px);
`
export const Title = styled.h1`
  align-self: center;
  font-size: 70px;

  margin-bottom: 20px;
  @media (max-width: 500px) {
    font-size: 50px;
  }
`
