import styled from 'styled-components'

export const Container = styled.div`
  color: white;
  font-family: 'Montserrat';

  h1 {
    font-size: 23px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1.5rem;

    ${(props) => props.theme.breakpoints.down('sm')} {
      font-size: 19px;
    }
  }

  p {
    ${(props) => props.theme.breakpoints.down('sm')} {
      font-size: 14px;
    }
  }

  li {
    ${(props) => props.theme.breakpoints.down('sm')} {
      font-size: 15px;
    }
  }
`

export const FooterContainer = styled.div`
  background: #ffb610;
  padding: 5rem;
  display: flex;

  ${(props) => props.theme.breakpoints.down('lg')} {
    padding: 3rem;
    display: block;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    padding: 2rem;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;

  ${(props) => props.theme.breakpoints.down('lg')} {
    justify-content: center;
  }

  img {
    width: 10rem;

    ${(props) => props.theme.breakpoints.down('lg')} {
      width: 10rem;
      margin-bottom: 3rem;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
      width: 8rem;
      margin-bottom: 2rem;
    }
  }
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  ${(props) => props.theme.breakpoints.down('sm')} {
    display: block;
    text-align: center;
  }
`

export const Services = styled.div`
  list-style: none;

  ${(props) => props.theme.breakpoints.down('sm')} {
    margin-bottom: 3rem;
  }

  li {
    display: block;
    margin-top: 1.3rem;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: black;
    }
  }

  ul {
    padding-left: 0;
  }
`

export const Contact = styled.div`
  list-style: none;

  ${(props) => props.theme.breakpoints.down('sm')} {
    margin-bottom: 3rem;
  }

  li {
    display: block;
    margin-top: 1.3rem;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: black;
    }
  }

  ul {
    padding-left: 0;
  }
`

export const SM = styled.div`
  list-style: none;

  li {
    display: block;
    margin-top: 1.3rem;
  }

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: black;
    }
  }

  ul {
    padding-left: 0;
  }
`
export const CopyrightContainer = styled.div`
  background: #141414;
  display: flex;
  justify-content: center;
  font-family: Shippori Antique B1;

  p {
    margin-top: 0.9rem;
  }
`
