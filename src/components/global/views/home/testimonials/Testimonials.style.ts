import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 15rem;
  font-family: Montserrat;
  margin-bottom: 10rem;
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

export const CarouselContainer = styled.div`
  text-align: center;
  display: block;
  margin-top: 4rem;

  .awssld__content {
    align-items: unset !important;
    background-color: #0b0b0b !important;
  }

  .awssld__content > img,
  .awssld__content > video {
    width: 50% !important;
    height: 120% !important;
    position: unset !important;
    top: unset !important;
    left: unset !important;
    object-fit: scale-down !important;

    ${(props) => props.theme.breakpoints.down('lg')} {
        width: 100% !important;
        height: 100% !important;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
        width: 95% !important;
        height: 100% !important;
    }
  }
  .carousel-item {
    float: none !important;
  }

  .full-width {
    width: 100%;
  }

  .awssld__controls__arrow-left:before,
  .awssld__controls__arrow-left:after,
  .awssld__controls__arrow-right:before,
  .awssld__controls__arrow-right:after {
    background-color: #ffff !important;
  }

  .awssld__startUp img {
    width: 15% !important;
    height: auto !important;
  }

  .awssld__container {
    padding-bottom: 30% !important;

    @media all and (max-width: 500px) {
      padding-bottom: calc(30% * 1.25) !important;
    }
  }

  .awssld__bar {
    background-color: #ffb610 !important;
  }

  @media only screen and (max-width: 600px) {
    .awssld__wrapper {
      height: 284px !important;
    }
  }

  .awssld__timer {
    background-color: rgb(80, 166, 224) !important;
  }

  .awssld__bullets button {
      rgb(80, 166, 224, 0.5) !important
  }
`
