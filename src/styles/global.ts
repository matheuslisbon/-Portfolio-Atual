import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, :root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    scrollbar-arrow-color:red;
    scrollbar-3dlight-color:red;
    scrollbar-highlight-color:red;
    scrollbar-face-color:#FFFFFF;
    scrollbar-shadow-color:#0000FF;
    scrollbar-darkshadow-color:#FFFF00;
    scrollbar-track-color:#00FF00;
  }
  a, li{
    list-style: none;
    text-decoration: none;

  }
  body {
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;

  }

  .video-background{
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1000;
    background-size: cover;
  }
  ::-webkit-scrollbar {
  width: 8px;
  height: 10px;
  border-radius: 16px;
}
::-webkit-scrollbar-track-piece {
  background-color: #101010;
}
::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background: linear-gradient(to bottom, #0b36c3 , #7df9ff );
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: #666;
  border-radius: 3px;
}
`
