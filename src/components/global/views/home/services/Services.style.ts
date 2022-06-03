import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 8rem;
  font-family: Montserrat;
`

export const SectionTitle = styled.div`
  text-align: center;
  color: #ffb610;
  text-transform: uppercase;

  h1 {
    font-weight: 300;
    font-size: 20px;
    letter-spacing: 1px;
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

export const Services = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-top: 5rem;
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
`

export const CardsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;

  display: flex;
`

export const Card = styled.div`
  background: #070707a8;
  border-radius: 11px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 3rem;
  margin-right: 1rem;
  margin-left: 1rem;

  @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    .blurred-container {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }

  text-align: center;
  color: white;

  h1 {
    text-transform: uppercase;
    font-size: 25px;
    margin-top: 1.5rem;
  }

  p {
    margin-top: 1.5rem;
    font-weight: 300;
  }

  img {
    width: 7rem;
  }
`
