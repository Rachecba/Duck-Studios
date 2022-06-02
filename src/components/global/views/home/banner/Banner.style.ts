import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Montserrat;

  .subtitle {
    color: #ffffff;
    font-size: 19px;
    margin-top: 4rem;

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
  }
`

export const SliderContainer = styled.div`
  height: 106px;
  position: relative;
  overflow: hidden;
  margin-top: var(--offset);

  span {
    display: block;
    box-sizing: border-box;
    position: absolute;
    top: 100px;
    padding-bottom: var(--offset);
    background-size: 100% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-repeat: no-repeat;
  }

  span[data-show] {
  }
`

export const Buttons = styled.div`
  margin-top: 2rem;

  .services-button {
    background: #ce8f00;
    box-shadow: 0px 0px 20px #573c00;
    border-radius: 10px;
    padding: 0.4rem 2.5rem;
    color: white;
    font-family: Montserrat;
    text-transform: capitalize;
    margin-right: 1.5rem;
    font-size: 16px;
    border: solid 3px #ce8f00;
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
  img {
    width: 38rem;

    ${(props) => props.theme.breakpoints.up('xxl')} {
      width: 46.5rem;
    }
  }
`
