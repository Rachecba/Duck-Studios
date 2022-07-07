import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 8rem;
  font-family: 'Montserrat';
`

export const SectionTitle = styled.div`
  text-align: center;
  color: #ffb610;
  text-transform: uppercase;

  h1 {
    font-weight: 300;
    font-size: 20px;
    letter-spacing: 1px;

    ${(props) => props.theme.breakpoints.down('lg')} {
      font-size: 18px;
    }
  }
`

export const Title = styled.div`
  text-align: center;

  h1 {
    color: white;
  }
`

export const Services = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-top: 2rem;
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/duck-studios-web.appspot.com/o/assets%2Fservices-background.png?alt=media&token=d6354987-b435-4d38-a641-26403b72ea44');
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;

`

export const CardsContainer = styled.div`
  z-index: 9;
  padding: 0 8rem;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height:100%;

  ${(props) => props.theme.breakpoints.down('lg')} {
    padding: 0 1rem;
    margin-top: 0rem;
  }


  .middle-card {
    border-right: 1px solid #141414;
    border-left: 1px solid #141414;

    ${(props) => props.theme.breakpoints.down('lg')} {
      border-top: 1px solid #141414;
      border-bottom: 1px solid #141414;
      border-right: unset;
      border-left: unset;
    }

    &:hover {
      border: solid 3px transparent !important;
    }
  }

  .top-card {
    border-radius: 11px 0px 0px 11px;

    ${(props) => props.theme.breakpoints.down('lg')} {
      border-radius: 11px 11px 0px 0px;
    }
  }

  .end-card {
    border-radius: 0px 11px 11px 0px;

    ${(props) => props.theme.breakpoints.down('lg')} {
      border-radius: 0px 0px 11px 11px;
    }
  }
`

export const Card = styled.div`
  background: #070707a8;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 5rem 3rem;
  border: solid 3px transparent;
  width: 33%;

  ${(props) => props.theme.breakpoints.down('lg')} {
    padding: 2rem 1.5rem;
    width: 100%;
  }

  @-moz-document url-prefix() {
    background: #070707f2;
  }

  &:hover {
    border-radius: 11px;
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
    box-shadow: 2px 1000px 1px #101010 inset;
  }

  text-align: center;
  color: white;

  h1 {
    text-transform: uppercase;
    font-size: 25px;
    margin-top: 1.5rem;

    ${(props) => props.theme.breakpoints.down('lg')} {
      font-size: 18px;
    }
  }

  p {
    margin-top: 1.5rem;
    font-weight: 300;

    ${(props) => props.theme.breakpoints.down('lg')} {
      font-size: 15px;
    }
  }

  img {
    width: 6rem;

    ${(props) => props.theme.breakpoints.down('lg')} {
      width: 5rem;
    }
  }

  .marketing-icon,
  .design-icon {
    width: 4.5rem;
    margin-top: -1.2rem;

    ${(props) => props.theme.breakpoints.down('lg')} {
      margin-top: 1rem;
    }
  }

  .button {
    background: #ce8f00;
    border-radius: 8px;
    padding: 0.3rem 1.5rem;
    color: white;
    text-transform: capitalize;
    margin-top: 1.5rem;

    ${(props) => props.theme.breakpoints.down('lg')} {
      font-size: 13px;
    }

    &:hover {
      box-shadow: 0px 0px 16px #815901;
      background: #ce8f00;
    }
  }
`
