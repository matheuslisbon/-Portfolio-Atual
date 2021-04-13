import styled from 'styled-components'
/*
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
      font-size: 30px;
      padding: 3px 5px;
      font-family: 'Sansita Swashed', cursive;
      border-bottom: 3px solid ${props => props.theme.colors.border};
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      text-shadow: 2px 1px 0px ${props => props.theme.colors.border};
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
      :hover {
        color: white;
        background: linear-gradient(to right, #4586fc, #06cbfe);
        animation: efectlist 2s reverse infinite;
        border-radius: 8px;
      }
    }

    @keyframes efectlist {
      0% {
        color: white;
        background: linear-gradient(to right, #4586fc, #06cbfe);
      }
      50% {
        color: black;
        background: linear-gradient(to right, #06cbfe, #4586fc);
      }
      75% {
        color: white;
        background: linear-gradient(to right, #4586fc, #06cbfe);
      }
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
    background: ${props => props.theme.colors.background};
    backdrop-filter: saturate(180%) blur(18px);
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.07);
    transition: background 0.9s;
  }
`
*/
export const Container = styled.div`
  .skew {
    transform: skew(-20deg);
  }
  .un-skew {
    transform: skew(20deg);
  }
  #nav-wrapper {
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
  #nav {
    background-color: ${props => props.theme.colors.background};
    backdrop-filter: saturate(180%) blur(18px);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    font-family: 'Saira Semi Condensed', sans-serif;
    height: 4em;
    overflow: hidden;
  }

  .nav {
    display: flex;
    height: 4em;
    line-height: 4em;
    flex-grow: 1;
  }
  .nav-link,
  .logo {
    padding: 0 1em;
  }
  span.gradient {
    background: -webkit-linear-gradient(45deg, #f857a8, #ff5858);
    background: linear-gradient(45deg, #f857a8, #ff5858);
    background: ${props => props.theme.colors.text};
    padding: 0 1em;
    position: relative;
    right: 1em;
    margin-right: auto;
  }
  span.gradient:hover {
    animation-name: logo-hover;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.17, 0.57, 0.31, 0.85);
  }
  h1.logo {
    font-family: 'Sansita Swashed', cursive;
    border-bottom: 3px solid ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.blackOrWhite};
    font-size: 32px;
  }
  h1.logoa,
  a:active,
  a:hover,
  a:visited {
    text-decoration: none;
    color: #fff;
  }
  .nav-link {
    text-transform: uppercase;
    text-align: center;
    border-top: 0.5px solid #ddd;
  }
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }
  a:hover {
    text-decoration: underline;
  }
  .right {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .btn-nav {
    color: #f857a8;
    padding-left: 2em;
    padding-right: 2em;
  }
  @media (min-width: 800px) {
    #nav-wrapper {
      overflow: hidden;
    }
    #nav {
      overflow: hidden;
      flex-direction: row;
    }
    .nav-link {
      border-top: none;
    }
    .right {
      overflow: hidden;
      flex-direction: row;
      justify-content: flex-end;
      position: relative;
      left: 1.5em;
      height: auto;
    }
    .btn-nav {
      display: none;
    }
    .nava:link.active,
    a:visited.active,
    a:active.active {
      background: #f857a8;
      background: -webkit-linear-gradient(45deg, #f857a8, #ff5858);
      background: linear-gradient(45deg, #f857a8, #ff5858);
      color: #fff;
    }
    .nav-link-span {
      transform: skew(20deg);
      display: inline-block;
    }
    .nav-link {
      transform: skew(-20deg);
      color: #777;
      text-decoration: none;
    }
    .nav-link:last-child {
      padding-right: 3em;
    }
    a:hover.nav-link:not(.active) {
      color: #444;
      background: #ddd;
      background: linear-gradient(45deg, #fff, #ddd);
    }
  }
  @keyframes logo-hover {
    20% {
      padding-right: 0em;
    }
    100% {
      padding-right: 5em;
    }
  }
`
