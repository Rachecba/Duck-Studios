import Button from '@mui/material/Button/Button'
import { useEffect } from 'react'
import { bannerMockup } from '../../../../../utils/constants/constants'
import * as Styled from './Banner.style'

function Banner() {

  const rotate = () => { 
    const show = document.querySelector('.mask span[data-show]')
    const next = show?.nextElementSibling || document.querySelector('.mask span:first-child')
    const up = document.querySelector('.mask span[data-up]')

    if (up) { 
      up.removeAttribute('data-up')
    }

    show?.removeAttribute('data-show')
    show?.setAttribute('data-up', '')

    next?.setAttribute('data-show', '')
  }

  useEffect(() => {
    const interval = setInterval(() => {
    rotate()
  }, 2000);
  return () => clearInterval(interval);
}, []);

    return (
      <Styled.Container>
        <Styled.TextContainer>
          <Styled.Features>
            <h1>Creative.</h1>
            <h1>Awesome.</h1>
            <h1>Functional.</h1>
          </Styled.Features>
          <Styled.SliderContainer>
            <div className='mask'>
              <span data-show>SOFTWARE</span>
              <span>MARKETING</span>
              <span>GRAPHIC DESIGN</span>
            </div>
          </Styled.SliderContainer>
          <h4 className='subtitle'>We <span>REALLY</span> are not just another Digital Agency</h4>
          <Styled.Buttons>
            <Button className='services-button'>Services</Button>
            <Button className='portfolio-button'>Portfolio</Button>
          </Styled.Buttons>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <img alt="mockup" src={ bannerMockup }/>
        </Styled.ImageContainer>
      </Styled.Container>
    )
}

export default Banner