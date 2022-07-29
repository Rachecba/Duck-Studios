import Button from '@mui/material/Button/Button'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga4';
import { bannerMockup } from '../../../../../utils/constants/constants'
import * as Styled from './Banner.style'

function Banner(serviceRef:any) {
  const { t, i18n, ready } = useTranslation('banner', { useSuspense: true });
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

  const scrollToServices = () => {
     ReactGA.event({
       category: 'Homepage: Services Button',
       action: `Click on banner services button`,
     });
    document.querySelector( '#services' )?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  }

  const scrollToPortfolio = () => {
     ReactGA.event({
       category: 'Homepage: Portfolio Button',
       action: `Click on banner portfolio button`,
     });
    document.querySelector( '#portfolio' )?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  }

  
  useEffect(() => {
    const interval = setInterval(() => {
    rotate()
  }, 2000);
  return () => clearInterval(interval);
}, []);

    return (
      <Styled.Container >
        <Styled.TextContainer >
          <Styled.Features className='animate__animated animate__fadeInLeft'>
            <h1>{t('banner.features.creative')}</h1>
            <h1>{t('banner.features.awesome')}</h1>
            <h1>{t('banner.features.functional')}</h1>
          </Styled.Features>
          <Styled.SliderContainer className='animate__animated animate__fadeInUp'>
            <div className='mask'>
              <span data-show>{t('banner.slider.software')}</span>
              <span>{t('banner.slider.marketing')}</span>
              <span>{t('banner.slider.graphicDesign')}</span>
            </div>
          </Styled.SliderContainer>
          <h4 className='subtitle'>{t('banner.slider.subtitle.we')} <span>{t('banner.slider.subtitle.really')}</span> {t('banner.slider.subtitle.text')}</h4>
          <Styled.Buttons>
            <Button onClick={scrollToServices} className='services-button'>{t('banner.btnServices')}</Button>
            <Button onClick={scrollToPortfolio} className='portfolio-button animate__animated animate__swing'>{t('banner.btnPortfolio')}</Button>
          </Styled.Buttons>
        </Styled.TextContainer>
        <Styled.ImageContainer className='animate__animated animate__slideInRight'>
          <img alt="mockup" src={ bannerMockup }/>
        </Styled.ImageContainer>
      </Styled.Container>
    )
}

export default Banner