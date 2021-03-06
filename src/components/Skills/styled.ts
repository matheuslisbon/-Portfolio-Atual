import styled from 'styled-components'

const SkillsDiv = styled.div`
  margin-bottom: 40px;
  width: 90%;
  background: ${props => props.theme.colors.background};
  padding: 50px 60px;
  backdrop-filter: blur(20px);
  margin: 10px auto;
  margin-top: 60px;
  border-radius: 18px;
  color: ${props => props.theme.colors.text};

  h1 {
    font-size: 80px;
    width: min-content;
    text-align: center;
  }
  article {
    font-size: 0.2px;
    padding-bottom: 20px;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px 0;
  }
  .container .box {
    position: relative;
    width: 320px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 30px;
    transition: 0.2px;
  }
  .container .box::before {
    position: absolute;
    content: '';
    top: 0;
    left: 50px;
    width: 50%;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    transform: skewX(15deg);
    transition: 0.5s;
  }
  .container .box::after {
    position: absolute;
    content: '';
    top: 0;
    left: 50px;
    width: 50%;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    transform: skewX(15deg);
    filter: blur(30px);
    transition: 0.5s;
  }
  .container .box:hover:before,
  .container .box:hover:after {
    transform: skewX(0deg);
    left: 20px;
    width: calc(100% - 90px);
  }
  .container .box:nth-child(1):before,
  .container .box:nth-child(1):after {
    background: linear-gradient(315deg, #ffbc00, #ff0058);
  }

  .container.two .box:before,
  .container.two .box:after {
    background: linear-gradient(315deg, #03a9f4, #ff0058);
  }

  .container .box span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    pointer-events: none;
  }
  .container .box span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: 0.5s;
    animation: animate 2s ease-in-out infinite;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  .container .box:hover span::before {
    top: -50px;
    left: 50px;

    width: 100px;
    height: 100px;
    opacity: 1;
  }
  .container .box span::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;

    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: 0.5s;
    animation: animate 2s ease-in-out infinite;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    animation-delay: -1s;
  }
  .container .box:hover span::after {
    bottom: -50px;
    right: 50px;

    width: 100px;
    height: 100px;
    opacity: 1;
  }
  .container .box .content {
    z-index: 1;
    position: relative;
    left: 0;
    padding: 20px 40px;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    backdrop-filter: blur(10px);
    transition: 0.5s;
    color: white;
  }
  .container .box:hover .content {
    left: -25px;
    padding: 60px 40px;
  }
  @keyframes animate {
    0%,
    100% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 1200px) {
    header {
      flex-direction: column;
    }
    ul {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 15px;
    }
    h1 {
      font-size: 40px;
    }
  }
`

export default SkillsDiv
