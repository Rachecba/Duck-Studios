import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20rem;
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
`

export const TitleContainer = styled.div`
  text-align: center;
`

export const Slider = styled.div`
  width: 100%;
`

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 4rem;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 23px;
  }
`

export const Project = styled.div`
  width: 25%;
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

export const ProjectDescription = styled.div``
