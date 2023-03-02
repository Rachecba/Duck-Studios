import styled from 'styled-components'

export const Container = styled.div``

export const Band = styled.div`
  align-items: center;
  background-color: #0053b6;
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;
  color: white;
  padding: 4rem;
  display: flex;
  padding-left: 8rem;
  padding-right: 8rem;

  ${(props) => props.theme.breakpoints.down('xl')} {
    padding-right: 2rem;
    padding-left: 3rem;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    display: block;
    margin-right: 0;
  }

  h1 {
    font-family: 'Mulish', sans-serif;
    font-size: 4.5rem;

    ${(props) => props.theme.breakpoints.down('md')} {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    margin-bottom: 2rem;
    font-size: 1.3rem;

    ${(props) => props.theme.breakpoints.down('md')} {
      font-size: 1rem;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
      text-align: justify;
    }
  }

  .title {
    margin-right: 7rem;
  }
`

export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 4rem;
  margin-right: 4rem;
  flex-wrap: wrap;

  ${(props) => props.theme.breakpoints.down('lg')} {
    margin: 0;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    margin-left: 1rem !important;
    margin-right: 1rem !important;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    margin-left: 1.5rem !important;
    margin-right: 1.5rem !important;
  }
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

  span {
    color: #ffb610;
  }
`
export const TopButton = styled.div`
  text-align: center;

  button {
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0.7rem 2rem !important;
    border-radius: 1rem;
    font-weight: 600;
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
