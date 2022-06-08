import styled from 'styled-components'

export const Container = styled.div`
  font-family: Montserrat;
  display: flex;
  flex-wrap: wrap;
  margin-top: 8rem;
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
  margin-left: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${(props) => props.theme.breakpoints.down('lg')} {
    width: 70%;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 70%;
    padding-right: 1rem;
  }
`

export const Title = styled.div`
  margin-bottom: 2rem;
`

export const Text = styled.div`
  p {
    font-size: 19px;
  }
`

export const Social = styled.div`
  margin-top: 1rem;

  img {
    width: 2rem;
    margin-right: 1rem;
  }
`
