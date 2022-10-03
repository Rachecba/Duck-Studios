import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 4rem;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 7rem;
  font-family: 'Montserrat';
  background: transparent
    linear-gradient(140deg, #2a2a2a 0%, #121212 49%, #060606 100%) 0% 0%
    no-repeat padding-box;

  ${(props) => props.theme.breakpoints.down('sm')} {
    padding-left: 2rem;
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

export const Team = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3.5rem;
  justify-content: space-around;

  ${(props) => props.theme.breakpoints.down('lg')} {
    margin-top: 1.5rem;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    display: block;
  }
`

export const TeamMember = styled.div`
  padding: 2rem 0rem;
  background: #373737;
  border-radius: 34px;
  backdrop-filter: blur(30px);
  width: 27%;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
  margin-top: 3.5rem;
  height: auto;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  transition: transform 1s;

  .contact {
    text-align: center;

    ${(props) => props.theme.breakpoints.down('lg')} {
      width: 100%;
      justify-content: center;
      padding: 0;
    }

    img {
      width: 2.2rem;
    }
  }

  &:hover {
    transform: translateY(-20px);

    .sci li {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  .sci {
    position: absolute;
    bottom: -5px;
    display: flex;
  }

  .sci li {
    list-style: none;
    margin: 0 10px;
    transform: translateY(40px);
    transition: 0.5s;
    opacity: 0;
  }

  .sci li a {
    color: #fff;
    font-size: 20px;
  }

  ${(props) => props.theme.breakpoints.down('lg')} {
    width: 45%;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 100%;
  }
`

export const Image = styled.div`
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  img {
    width: 15rem;
  }
`

export const Description = styled.div`
  text-align: center;

  h3 {
    color: #ffb610;
    font: normal normal normal 23px/40px Shippori Antique B1;
  }

  h4 {
    margin-top: 0.7rem;
    font: normal normal normal 18px/24px Montserrat;
    color: #ffffff;
    text-transform: uppercase;
    margin-bottom: 0rem;
  }

  p {
    font: normal normal normal 18px/24px Montserrat;
    color: #aeaeae;
    transition: margin-bottom 1s;
  }

  ${(props) => props.theme.breakpoints.down('lg')} {
    p {
      transition: margin-bottom 1s;
      margin-bottom: 1.5rem;
    }
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    h3 {
      font: normal normal normal 21px/40px Shippori Antique B1;
    }

    h4 {
      font: normal normal normal 16px/24px Montserrat;
    }

    p {
      font: normal normal normal 16px/24px Montserrat;
    }
  }
`
