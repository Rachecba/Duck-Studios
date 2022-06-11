import styled from 'styled-components'

export const Container = styled.div`
  padding-left: 3rem;
  font-family: 'Montserrat';
  display: flex;
  flex-wrap: wrap;

  ${(props) => props.theme.breakpoints.down('sm')} {
    margin-top: 33rem;
    padding-left: 2rem;
  }
`

export const TextContainer = styled.div`
  width: 41%;

  ${(props) => props.theme.breakpoints.down('lg')} {
    width: 100%;
    text-align: justify;
  }
`

export const SectionTitle = styled.div`
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
  h1 {
    color: white;
  }
`

export const Text = styled.div`
  margin-top: 3rem;
  color: white;

  p {
    font-weight: 300;

    ${(props) => props.theme.breakpoints.down('lg')} {
      padding-right: 3rem;
    }
  }

  &:before {
    content: '';
    height: 2px;
    background: #ffb610;
    width: 10rem;
    display: block;
    margin-bottom: 1.3rem;
  }
`

export const ImageContainer = styled.div`
  width: 59%;
  text-align: end;

  ${(props) => props.theme.breakpoints.down('lg')} {
    width: 100%;
  }

  img {
    width: 58rem;

    ${(props) => props.theme.breakpoints.up('xxl')} {
      width: 68rem;
    }

    ${(props) => props.theme.breakpoints.down('lg')} {
      width: 48rem;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
      width: 20rem;
    }
  }
`
