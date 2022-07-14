import styled from 'styled-components'

export const Container = styled.div`
  font-family: '' Montserrat '', sans-serif;
  display: flex;
  flex-wrap: wrap;
  margin-top: 12rem;
  margin-bottom: 10rem;
`

export const Deco = styled.div`
  width: 25%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${(props) => props.theme.breakpoints.down('lg')} {
      object-fit: fill;
    }
  }
`

export const TextContainer = styled.div`
  margin-left: 3rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  align-items: center;

  ${(props) => props.theme.breakpoints.down('lg')} {
    width: 70%;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 100%;
    margin-left: 0;
  }
`

export const Title = styled.div`
  margin-bottom: 1rem;
`

export const Text = styled.div`
  p {
    font-size: 19px;
  }
`

export const Social = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items:center;
  font-size: 20px;
  width:90%;

  img {
    width: 2rem;
    margin-right: 1rem;
    ${(props) => props.theme.breakpoints.down('sm')} {
      width: 1.2rem;
      margin-right: 2px;
    }
  }

  li {
    display: block;
    margin-top: 1.3rem;
  }

  a {
    color: white;
    text-decoration: none;
    ${(props) => props.theme.breakpoints.down('sm')} {
      font-size:1rem;
    }

    .img{
      ${(props) => props.theme.breakpoints.down('sm')} {
        height:50px;
      }
    }
  }

  ul {
    padding-left: 0;
  }

  .contact {
    .css-i4bv87-MuiSvgIcon-root {
      width: 3rem;
      margin-right: 1rem;
      ${(props) => props.theme.breakpoints.down('sm')} {
        width: 2rem;
        margin-right: 2px;
      }
    }
  }
`
