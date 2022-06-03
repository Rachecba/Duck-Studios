import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  flex-wrap: wrap;

  ${(props) => props.theme.breakpoints.down('lg')} {
    margin-top: 3rem;
    justify-content: unset;
    padding: 0 1rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Montserrat;

  ${(props) => props.theme.breakpoints.down('lg')} {
    padding-left: 1rem;
  }

  .subtitle {
    color: #ffffff;
    font-size: 19px;
    margin-top: 5rem;

    ${(props) => props.theme.breakpoints.down('lg')} {
      font-size: 16px;
      margin-top: 3rem;
    }

    span {
      color: #ffb610;
      text-transform: uppercase;
    }
  }
`

export const Features = styled.div`
  color: #e49f00;
  text-transform: uppercase;

  h1 {
    font-size: 50px;

    ${(props) => props.theme.breakpoints.down('lg')} {
      font-size: 30px;
    }
  }
`

export const SliderContainer = styled.div`
  color: white;
  font-family: Montserrat;
  font-size: 50px;
  font-weight: bold;
  margin-top: 1.5rem;

  ${(props) => props.theme.breakpoints.down('lg')} {
    font-size: 32px;
    margin-top: 0.5rem;
  }

  .mask {
    height: 1.2em;
    overflow: hidden;
    position: relative;
  }

  .mask span {
    display: block;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    transform: translateY(1.2em);
    padding-bottom: 6px;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    bacgrkound-repeat: no-repeat;
    white-space: nowrap;
  }

  .mask span[data-show] {
    transform: translateY(0);
    transition: transform 0.5s ease-in-out;
  }

  .mask span[data-up] {
    transform: translateY(-1.2em);
    transition: transform 0.5s ease-in-out;
  }

  .mask span:nth-child(1) {
    background-image: linear-gradient(45deg, #fff 50%, #fff);
  }

  .mask span:nth-child(2) {
    background-image: linear-gradient(45deg, #fff 50%, #fff);
  }

  .mask span:nth-child(3) {
    background-image: linear-gradient(45deg, #fff 50%, #fff);
  }

  .mask span:nth-child(4) {
    background-image: linear-gradient(45deg, #fff 50%, #fff);
  }
`

export const Buttons = styled.div`
  margin-top: 2rem;

  .services-button {
    background: #ce8f00;
    border-radius: 10px;
    padding: 0.4rem 2.5rem;
    color: white;
    font-family: Montserrat;
    text-transform: capitalize;
    margin-right: 1.5rem;
    font-size: 16px;
    border: solid 3px #ce8f00;

    ${(props) => props.theme.breakpoints.down('lg')} {
      font-size: 14px;
      border-radius: 10px;
      padding: 0.3rem 1rem;
      margin-right: 1rem;
    }
  }

  .portfolio-button {
    border-radius: 10px;
    padding: 0.4rem 2.5rem;
    color: white;
    font-family: Montserrat;
    text-transform: capitalize;
    font-size: 16px;
    color: white;
    border: solid 3px transparent;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(
        76deg,
        #fbda90 0%,
        #ffb610 24%,
        #8d6300 46%,
        #543c01 70%,
        #c88900 100%
      );
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #0b0b0b inset;
    transition: background-image 0.8s, box-shadow 0.8s;

    ${(props) => props.theme.breakpoints.down('lg')} {
      font-size: 14px;
      border-radius: 10px;
      padding: 0.3rem 1rem;
    }

    &:hover {
      background-image: linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0)
        ),
        linear-gradient(
          340deg,
          #fbda90 0%,
          #ffb610 24%,
          #8d6300 46%,
          #543c01 70%,
          #c88900 100%
        );

      box-shadow: unset;
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  img {
    width: 38rem;

    ${(props) => props.theme.breakpoints.up('xxl')} {
      width: 46.5rem;
    }

    ${(props) => props.theme.breakpoints.down('lg')} {
      width: 20rem;
    }
  }
`
