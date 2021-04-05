import styled from 'styled-components'

export const Container = styled.div`
  color: ${props => props.theme.colors.text};
  padding-bottom: 20px;
  h1 {
    text-align: center;
    border-bottom: 2px solid #06cbfe;
    font-size: 64px;
    margin-bottom: 10px;
  }
  div {
    border-radius: 18px;
    width: 90%;
    margin: 20px auto;
    background: ${props => props.theme.colors.background};
    backdrop-filter: blur(10px);

    padding: 20px 20px 20px 20px;
    line-height: 1.5;
    font-size: 26px;
    font-weight: 500;
  }
  div.div-grid {
    display: flex;
    flex-direction: column;
  }
  div.sobre-apr {
    margin-top: 20px;
  }
  label {
    font-weight: 500;
    font-style: italic;
    color: ${props => props.theme.colors.text};
  }
  img {
    height: 190px;
  }
  @media (max-width: 800px) {
    div {
      font-size: 22px;
    }
    h1 {
      font-size: 42px;
    }
  }
  @media (max-width: 500px) {
    div {
      font-size: 18px;
      line-height: 1.5;
    }
    h1 {
      font-size: 32px;
    }
  }
`
