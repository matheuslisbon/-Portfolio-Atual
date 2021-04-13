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
  body {
  background-color: #111111;
  margin: 0;
  overflow-x: hidden;
}





@keyframes move-background {
  from {
    -webkit-transform: translate3d(0px, 0px, 0px);
  }
  to {
    -webkit-transform: translate3d(1000px, 0px, 0px);
  }
}
@-webkit-keyframes move-background {
  from {
    -webkit-transform: translate3d(0px, 0px, 0px);
  }
  to {
    -webkit-transform: translate3d(1000px, 0px, 0px);
  }
}

@-moz-keyframes move-background {
  from {
    -webkit-transform: translate3d(0px, 0px, 0px);
  }
  to {
    -webkit-transform: translate3d(1000px, 0px, 0px);
  }
}

    @-webkit-keyframes move-background {
  from {
    -webkit-transform: translate3d(0px, 0px, 0px);
  }
  to {
    -webkit-transform: translate3d(1000px, 0px, 0px);
  }
}

.background-container{
  position: fixed;
  top: 0;
  left:0;
  bottom: 0;
  right: 0;
}

.stars {
 background: ${props => props.theme.colors.stars}
 url(${props => props.theme.colors.bkUrl}) no-repeat;

 position: absolute;
 background-repeat: none;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
    z-index: 0;
  background-size:100% 100% ;
}

.twinkling{
  width:10000px;
  height: 100%;
  background: transparent url(${props => props.theme.colors.bkDefault}) repeat;
  background-size: 1000px 1000px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;

    -moz-animation:move-background 21s linear infinite;
  -ms-animation:move-background 21s linear infinite;
  -o-animation:move-background 21s linear infinite;
  -webkit-animation:move-background 21s linear infinite;
  animation:move-background 21s linear infinite;

}

.clouds{
  width:10000px;
  height: 100%;
  filter: ${props => props.theme.colors.lightNuvem};
  background: transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png") repeat;
  background-size: 1000px 1000px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;

  -moz-animation:move-background 80s linear infinite;
  -ms-animation:move-background 80s linear infinite;
  -o-animation:move-background 80s linear infinite;
  -webkit-animation:move-background 80s linear infinite;
  animation:move-background 80s linear infinite;
}
img.background-effect{
  height: 70vh;
  width:70vh;
  position: absolute;
  z-index: 3;
  right: 20px;
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
