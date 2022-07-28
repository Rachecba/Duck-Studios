import { Button } from "@mui/material"
import React from "react"
import { useTranslation } from "react-i18next";
import { designBackground, marketingBackground, softwareBackground } from "../../../../../utils/constants/constants"
import * as Styled from './Portfolio.style'

function Portfolio() {

    const { t, i18n, ready } = useTranslation(['home','global'], { useSuspense: true });

    return (
        <Styled.Container id="portfolio">
            <Styled.TitleContainer>
                <Styled.SectionTitle>
                    <h1>{t('home.portfolio.title')}</h1>
                </Styled.SectionTitle>
                <Styled.Title>
                    <h1>{t('home.portfolio.subtitle1')}<span> {t('home.portfolio.subtitle2')}</span></h1>
                    </Styled.Title>
            </Styled.TitleContainer>
            <Styled.PortfolioContainer>
                <Styled.Card>
                    <img alt="software" src={ softwareBackground }/>
                    <div className="container">
                        <h1>{t('global:global.software')}</h1>
                        <Button className="button">{t('global:global.btnSeeMore')}</Button>
                    </div>
                </Styled.Card>
                <Styled.Card>
                   <img alt="design" src={ designBackground }/>
                    <div className="container">
                        <h1>{t('global:global.grapichDesign')}</h1>
                        <Button className="button">{t('global:global.btnSeeMore')}</Button>
                    </div>
                </Styled.Card>
                <Styled.Card>
                   <img alt="marketing" src={ marketingBackground }/>
                    <div className="container">
                        <h1>{t('global:global.marketing')}</h1>
                        <Button className="button">{t('global:global.btnSeeMore')}</Button>
                    </div>
                </Styled.Card>
            </Styled.PortfolioContainer>
        </Styled.Container>
    )
}

export default Portfolio