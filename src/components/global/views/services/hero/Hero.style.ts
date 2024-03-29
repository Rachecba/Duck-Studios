import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  flex-wrap: wrap;
  overflow: hidden;
  width: 100vw;
  height: 70vh;

  ${(props) => props.theme.breakpoints.down('lg')} {
    margin-top: 3rem;
    justify-content: unset;
    padding: 0 1rem;
    height:100%;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    height:100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Montserrat';
  width: 45%;
  padding-left: 2rem;

  ${(props) => props.theme.breakpoints.down('lg')} {
    padding-left: 1rem;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    width: 100%;
  }

  .subtitle {
    color: #ffffff;
    font-size: 19px;
    margin-top: 1rem;

    ${(props) => props.theme.breakpoints.down('lg')} {
      font-size: 16px;
      margin-top: 1rem;
    }

    span {
      color: #ffb610;
      text-transform: uppercase;
    }
  }
`

export const Features = styled.div`
  color: white;
  display: flex;

  h1 {
    font-size: 50px;
    font-weight: 600;

    ${(props) => props.theme.breakpoints.down('lg')} {
      font-size: 30px;
    }
  }

  .span {
    color: #e49f00;
  }

  .title {
    @keyframes a-ltr-after {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(101%);
      }
    }

    @keyframes a-ltr-before {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(200%);
      }
    }

    .span-animated:nth-of-type(1)::before,
    .span-animated:nth-of-type(1)::after {
      animation-delay: 1s;
    }

    .span-animated {
      position: relative;
      overflow: hidden;
      display: flex;
      line-height: 1.2;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: #e49f00;
        animation: a-ltr-after 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
        transform: translateX(-101%);
      }

      //   &::before {
      //     content: '';
      //     position: absolute;
      //     top: 0;
      //     right: 0;
      //     width: 100%;
      //     height: 100%;
      //     // background: var(--bg-color);
      //     animation: a-ltr-before 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
      //     transform: translateX(0);
      //   }
    }
  }
`

export const Buttons = styled.div`
  margin-top: 5rem;

  ${(props) => props.theme.breakpoints.down('lg')} {
    margin-top: 3rem;
  }

  .services-button {
    background: #ce8f00;
    border-radius: 10px;
    padding: 0.4rem 2.5rem;
    color: white;
    font-family: 'Montserrat';
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
    font-family: 'Montserrat';
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
  align-items:center;
  .img{
    object-fit:scale-down;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    margin-top:4rem;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    margin-top:1rem;
    width:100%;
  }

  img {
    width: 38rem;
    height:30rem;
    border-radius:10px;
    ${(props) => props.theme.breakpoints.up('xxl')} {
      width: 46.5rem;
      height:35rem;
    }

    ${(props) => props.theme.breakpoints.down('lg')} {
      width: 26rem;
      height:31rem;
    }

    ${(props) => props.theme.breakpoints.down('md')} {
      width: 20rem;
      height: 20rem
    }
  }
`
