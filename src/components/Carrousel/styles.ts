import styled from 'styled-components'

export const Carrousel = styled.div`
  section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 300px;
    height: 300px;
    margin: 10px;
    border-radius: 8px;
  }
  .not-selected {
    opacity: 0.4;
    cursor: pointer;
  }
  .not-selected.left {
    margin-left: -45px;
    position: relative;
    z-index: 1;
    animation: toLeft 0.7s ease;
  }
  .not-selected.right {
    margin-right: -45px;
    animation: toRight 0.7s ease;
  }
  .selected {
    width: 450px;
    opacity: 1;
    height: 350px;
    position: relative;
    z-index: 99;
    animation: mymove 0.5s ease;
    box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.4);
  }
  @keyframes toLeft {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }
    100% {
      opacity: 0.4;
      transform: translateX(0px);
    }
  }
  @keyframes toRight {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 0.4;
      transform: translateX(0px);
    }
  }
  @keyframes mymove {
    to {
      opacity: 1;
    }
    from {
      opacity: 0;
    }
  }
  button {
    background: ${props => props.theme.colors.border};
    outline: 0;
    border: 0;
    cursor: pointer;
    padding: 5px 25px;
    text-align: center;
    font-size: 30px;
    justify-content: center;
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => props.theme.colors.button};
    box-shadow: 0px 0px 4px 1px ${props => props.theme.colors.button};
    transition: 0.5s;
  }

  @media (max-width: 800px) {
    .selected {
      width: 200px;
      height: 150px;
    }
    img {
      width: 150px;
      height: 100px;
    }
    button {
      padding: 3px 5px;
      font-size: 16px;
    }
    .not-selected.left {
      margin-left: -105px;
    }
    .not-selected.right {
      margin-right: -105px;
    }
  }
  @media (max-width: 500px) {
    .selected {
      width: 170px;
      height: 120px;
    }
    img {
      width: 150px;
      height: 100px;
    }
    button {
      padding: 3px 5px;
      font-size: 16px;
    }
    .not-selected.left {
      margin-left: -125px;
    }
    .not-selected.right {
      margin-right: -125px;
    }
  }
`
