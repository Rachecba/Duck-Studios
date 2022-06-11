import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 6rem;
  font-family: 'Montserrat';
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

  span {
    color: #ffb610;
  }
`

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 5rem;

  ${(props) => props.theme.breakpoints.down('lg')} {
    margin-bottom: 1.5rem;
  }
`

export const PortfolioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 10rem;

  ${(props) => props.theme.breakpoints.down('lg')} {
    padding: 0 1rem;
  }
`

export const Card = styled.div`
  width: 25%;
  height: 80vh;
  border-radius: 13px;
  background-color: #000;
  outline: 1px solid rgba(255, 255, 255, 0.5);
  outline-offset: -8px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0);
  position: relative;
  overflow: hidden;

  ${(props) => props.theme.breakpoints.down('lg')} {
    width: 45%;
    height: 50vh;
    margin-top: 2rem;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 100%;
    height: 40vh;
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
    transition: transform 0.75s, opacity 0.75s;
  }

  &:hover img {
    transform: scale(1.15);
    opacity: 0.1;
  }

  h1 {
    position: absolute;
    font-size: 30px;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    color: white;
    font-weight: 600;
  }

  .button {
    background: #ce8f00;
    border-radius: 8px;
    padding: 0.3rem 1.5rem;
    color: white;
    text-transform: inherit;
    margin-top: 1.5rem;
    top: 2rem;

    ${(props) => props.theme.breakpoints.down('lg')} {
      font-size: 13px;
    }

    &:hover {
      box-shadow: 0px 0px 16px #e39c00;
      background: #ce8f00;
    }
  }

  .container {
    display: flex;
    justify-content: center;
    height: inherit;
    align-items: center;
  }
`
