import styled from 'styled-components'

export const Header = styled.div`
  div {
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index: 999;
    width: 100%;
    justify-content: space-between;
    padding: 12px;
    transition: background 0.5s;
    h1 {
      font-family: 'Sansita Swashed', cursive;
      font-size: 30px;
      padding: 3px 5px;
      border-bottom: 3px solid ${props => props.theme.colors.border};
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
    }
    li {
      padding: 5px 2px;
      border-bottom: 3px solid ${props => props.theme.colors.border};
      margin: 0 15px;
      font-weight: bold;
      font-size: 20px;
      cursor: pointer;
    }
    section {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 800px) {
      justify-content: center;
      ul {
        display: none;
      }
      div {
        display: none;
      }
    }
  }
  div.active {
    background: ${props => props.theme.colors.navbar};
    backdrop-filter: saturate(180%) blur(18px);
    border-bottom: 0.5px solid rgba(250, 250, 250, 0.1);
    transition: background 0.9s;
  }
`
