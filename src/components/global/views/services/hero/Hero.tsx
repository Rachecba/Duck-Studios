import { Button } from "@mui/material"
import React, { useEffect } from "react"
import * as Styled from './Hero.style'
import { Props } from "./Hero.props";
import 'animate.css';

function Hero({ title, span, subtitle, image }: Props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Styled.Container>
            <Styled.TextContainer className="animate__animated animate__fadeIn">
                <Styled.Features>
                    <h1 className="title">{title}<span className="span span-animated">{span}</span></h1>
                </Styled.Features>
                <h4 className='subtitle'>{subtitle}</h4>
                <Styled.Buttons>
                    <Button className="services-button">Services</Button>
                    <Button className="portfolio-button animate__animated animate__swing">Portfolio</Button>
                </Styled.Buttons>
            </Styled.TextContainer>
            <Styled.ImageContainer className="animate__animated animate__slideInRight">
                <img alt="hero-img" src={image} className="img" />
            </Styled.ImageContainer>
        </Styled.Container>
    )
}

export default Hero