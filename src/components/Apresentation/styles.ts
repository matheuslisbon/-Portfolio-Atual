import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  color: ${props => props.theme.colors.text};
  h1 {
    margin-top: 20px;
    font-size: 64px;
    z-index: 99;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    letter-spacing: -1.5px;
    text-transform: uppercase;
  }

  p.title {
    margin-top: 25px;
    z-index: 99;
    font-size: 64px;
    margin-bottom: 20px;
  }

  section {
    background: ${props => props.theme.colors.background};
    backdrop-filter: blur(20px);
    width: 90%;
    margin: 40px 0;
    padding: 20px;
    border-radius: 8px;
    color: ${props => props.theme.colors.text};

    p {
      font-size: 20px;
      line-height: 1.5;
    }
  }
  @media (max-width: 800px) {
    section {
      display: none;
    }
    h1,
    p.title {
      font-size: 30px;
    }
  }
  @media (max-width: 500px) {
    section {
      display: none;
    }
    h1,
    p.title {
      font-size: 22px;
    }
  }
`
