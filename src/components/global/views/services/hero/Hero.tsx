import { Button } from "@mui/material"
import React, { useEffect } from "react"
import * as Styled from './Hero.style'
import { Props } from "./Hero.props";
import 'animate.css';
import { useTranslation } from "react-i18next";
import ReactGA from 'react-ga4';

function Hero({ title, span, subtitle, image }: Props) {

    const { t, i18n, ready } = useTranslation(['global','grapichDesign','software','marketing'], { useSuspense: true });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const scrollToServices = () => {
        ReactGA.event({
          category: `Service${window.location.pathname}: Services in page Button`,
          action: `Click on banner services button`,
        });
       document.querySelector( '#services' )?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
     }
   
     const scrollToPortfolio = () => {
        ReactGA.event({
          category: `Services ${window.location.pathname}: Portfolio in page Button`,
          action: `Click on banner portfolio button`,
        });
       document.querySelector( '#portfolio' )?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
     }

    return (
        <Styled.Container>
            <Styled.TextContainer className="animate__animated animate__fadeIn">
                <Styled.Features>
                    <h1 className="title">{t(title)}<span className="span span-animated">{t(span)}</span></h1>
                </Styled.Features>
                <h4 className='subtitle'>{t(subtitle)}</h4>
                <Styled.Buttons>
                    <Button onClick={scrollToServices} className="services-button">{t('global:global.services')}</Button>
                    <Button onClick={scrollToPortfolio} className="portfolio-button animate__animated animate__swing">{t('global:global.portfolio')}</Button>
                </Styled.Buttons>
            </Styled.TextContainer>
            <Styled.ImageContainer className="animate__animated animate__slideInRight">
                <img alt="hero-img" src={image} className="img" />
            </Styled.ImageContainer>
        </Styled.Container>
    )
}

export default Hero