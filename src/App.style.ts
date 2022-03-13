import styled from 'styled-components'

export const ContainerWrap = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
`

export const PageHeader = styled.div`

  position:relative;
  height:1000px;
  width:100%;
  margin:0 auto;

  @keyframes cf3FadeInOut {
    0% {
     opacity:1;
    }
    45% {
      opacity:1;
    }
    55% {
      opacity:0;
    }
    100% {
      opacity:0;
    }
  }

  img {
    position:absolute;
    left:0;
    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    transition: opacity 1s ease-in-out;
    height: 100%;
  }

  img.transparent {
    opacity:0;
  }

  img.top {
    animation-name: cf3FadeInOut;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 10s;
    animation-direction: alternate;
  }

  .titulo {
    height: auto;
    min-height: unset;
    color: #FFF;
    padding-top: 150px;
    padding-bottom: 150px;
  }
`

export const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 10fr 1.3fr;
    grid-template-areas: "left body right";

    ${(props) => props.theme.breakpoints.down('lg')} {
        grid-template-columns: 12fr;
   }

`

export const LeftContainer = styled.div`
    background-image: url("/assets/images/background-left.png");
    grid-area: left;
    background-repeat: no-repeat, repeat;

    ${(props) => props.theme.breakpoints.down('lg')} {
        background-image: none;
   }
`

export const RightContainer = styled.div`
    background-image: url("/assets/images/background-right.png");
    grid-area: right;
    background-repeat: no-repeat, repeat;
    ${(props) => props.theme.breakpoints.down('lg')} {
        background-image: none;
   }
`

export const MainContainer = styled.div`
    grid-area: body;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
`