import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 8rem;
  font-family: 'Montserrat';

  .pointer {
    cursor: pointer;
  }

  .margin-center {
    text-align: center;
    margin-top: -1rem;
  }

  .social-icon {
    color: white;
    font-size: 20px;
    margin-right: 30px;
  }

  .see-more-btn {
    background: #ce8f00;
    border-radius: 8px;
    padding: 0.3rem 1.5rem;
    color: white;
    text-transform: capitalize;
    margin-top: 3rem;
    font-size: 17px;

    ${(props) => props.theme.breakpoints.down('lg')} {
      font-size: 17px;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
      margin-top: 0rem;
    }

    &:hover {
      box-shadow: 0px 0px 16px #815901;
      background: #ce8f00;
    }
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

export const TitleContainer = styled.div`
  text-align: center;
`

export const Slider = styled.div`
  width: 100%;

  .splide__arrow {
    background: unset;
  }

  .splide__arrow:hover:not(:disabled) {
    background: #00000042;
  }
`

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 4rem;

  ${(props) => props.theme.breakpoints.down('sm')} {
    flex-direction: column;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 23px;
  }
`

export const Project = styled.div`
  width: 25%;

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 100% !important;
    margin-bottom: 3.5rem;
  }

  .img-project {
    width: 100%;
    height: 15rem;
    object-fit: cover;

    ${(props) => props.theme.breakpoints.down('xxl')} {
      height: 20rem;
    }
    ${(props) => props.theme.breakpoints.down('lg')} {
      height: 20rem;
    }
  }
`

export const Description = styled.div`
  color: white;
`

export const ProjectTitle = styled.div`
  color: #ffb610;
  margin-top: 2rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`

export const ProjectLink = styled.div`
  margin-top: 0.5rem;

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0;
  }
  a {
    color: #0087de;
    font-size: 1.1rem;
    text-decoration: none;
  }
`
export const SocialMediaLinks = styled.div`
  display: flex;
  flex-directon: row;
  margin-top: 20px;
`

export const ProjectDescription = styled.div``
