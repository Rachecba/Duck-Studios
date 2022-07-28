import { Button } from "@mui/material"
import React from "react"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { designBackground, marketingBackground, softwareBackground } from "../../../../../utils/constants/constants"
import * as Styled from './Portfolio.style'
import ReactGA from 'react-ga4';

function Portfolio() {

    const { t, i18n, ready } = useTranslation(['home', 'global'], { useSuspense: true });
    
    const softwarePortfolioEvent = () => { 
        ReactGA.event({
            category: 'Homepage: Portfolio',
            action: `See Software Portfolio`,
        });
    }

    const marketingPortfolioEvent = () => { 
        ReactGA.event({
            category: 'Homepage: Portfolio',
            action: `See Marketing Portfolio`,
        });
    }

    const designPortfolioEvent = () => { 
        ReactGA.event({
            category: 'Homepage: Portfolio',
            action: `See Design Portfolio`,
        });
    }

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
                        <Link to={"/portfolio/software"}>
                        <Button className="button" onClick={softwarePortfolioEvent}>{t('global:global.btnSeeMore')}</Button>
                        </Link>
                    </div>
                </Styled.Card>
                <Styled.Card>
                   <img alt="design" src={ designBackground }/>
                    <div className="container">
                        <h1>{t('global:global.grapichDesign')}</h1>
                        <Link to={"/portfolio/grapichDesign"}>
                        <Button className="button" onClick={marketingPortfolioEvent}>{t('global:global.btnSeeMore')}</Button>
                        </Link>
                    </div>
                </Styled.Card>
                <Styled.Card>
                   <img alt="marketing" src={ marketingBackground }/>
                    <div className="container">
                        <h1>{t('global:global.marketing')}</h1>
                        <Link to={"/portfolio/marketing"}>
                        <Button className="button" onClick={designPortfolioEvent}>{t('global:global.btnSeeMore')}</Button>
                        </Link>
                    </div>
                </Styled.Card>
            </Styled.PortfolioContainer>
        </Styled.Container>
    )
}

export default Portfolio