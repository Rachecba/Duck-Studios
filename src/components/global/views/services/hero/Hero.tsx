import { Button } from "@mui/material"
import React, { useEffect } from "react"
import * as Styled from './Hero.style'
import { Props } from "./Hero.props";
import 'animate.css';
import { useTranslation } from "react-i18next";

function Hero({ title, span, subtitle, image }: Props) {

    const { t, i18n, ready } = useTranslation(['global','grapichDesign'], { useSuspense: true });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Styled.Container>
            <Styled.TextContainer className="animate__animated animate__fadeIn">
                <Styled.Features>
                    <h1 className="title">{t(title)}<span className="span span-animated">{t(span)}</span></h1>
                </Styled.Features>
                <h4 className='subtitle'>{t(subtitle)}</h4>
                <Styled.Buttons>
                    <Button className="services-button">{t('global:global.services')}</Button>
                    <Button className="portfolio-button animate__animated animate__swing">{t('global:global.portfolio')}</Button>
                </Styled.Buttons>
            </Styled.TextContainer>
            <Styled.ImageContainer className="animate__animated animate__slideInRight">
                <img alt="hero-img" src={image} className="img" />
            </Styled.ImageContainer>
        </Styled.Container>
    )
}

export default Hero