import styled from 'styled-components'
const ContatoDiv = styled.div`
  div {
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
    backdrop-filter: blur(10px);
    border-radius: 18px;
    font-size: 26px;
    width: 90%;
    margin: 15px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.5;
    padding: 20px;
  }
  div img.perfil {
    border-radius: 15%;
    height: 150px;

    padding: 3px;
  }
  ul {
    display: flex;
  }
  ul li img {
    height: 54px;
  }
  ul li {
    padding: 10px 20px 0;
  }
`
export default ContatoDiv
