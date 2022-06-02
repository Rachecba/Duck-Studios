import Button from '@mui/material/Button/Button'
import * as Styled from './Banner.style'

function Banner() {

  setInterval (function () { 
    const show = document.querySelector('span[data-show]')
    const next = show?.nextElementSibling || document.querySelector('span:first-child')
    const up = document.querySelector('span[data-up]')

    if (up) { 
      up.removeAttribute('data-up')
    }

    show?.removeAttribute('data-show')
    show?.setAttribute('data-up', '')

    next?.setAttribute('data-show', '')
  }, 2000)

    return (
      <Styled.Container>
        <Styled.TextContainer>
          <Styled.Features>
            <h1>Creative.</h1>
            <h1>Awesome.</h1>
            <h1>Functional.</h1>
          </Styled.Features>
          <Styled.SliderContainer>
            <span data-show>SOFTWARE</span>
            <span>MARKETING</span>
            <span>GRAPHIC DESIGN</span>
          </Styled.SliderContainer>
          <h4 className='subtitle'>We <span>REALLY</span> are not just another Digital Agency</h4>
          <Styled.Buttons>
            <Button className='services-button'>Services</Button>
            <Button className='portfolio-button'>Portfolio</Button>
          </Styled.Buttons>
        </Styled.TextContainer>
        <Styled.ImageContainer>
            <img alt="mockup" src='https://firebasestorage.googleapis.com/v0/b/duck-studios-web.appspot.com/o/assets%2Fbanner-mockup.png?alt=media&token=1a97237c-c39a-4fb0-8e53-208a140fec15'/>
        </Styled.ImageContainer>
      </Styled.Container>
    )
}

export default Banner