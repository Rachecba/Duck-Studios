import Button from "@mui/material/Button/Button"
import React from "react"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { designIcon, marketingIcon, softwareIcon } from "../../../../../utils/constants/constants"
import * as Styled from './Services.style'
import ReactGA from 'react-ga4';

function Services() {
    const { t, i18n, ready } = useTranslation(['home', 'global'], { useSuspense: true });
    
    const softwareServicesEvent = () => { 
        ReactGA.event({
            category: 'Homepage: Software Services',
            action: `See Software Services`,
        });
    }

    const marketingServicesEvent = () => { 
        ReactGA.event({
            category: 'Homepage: Marketing Services',
            action: `See Marketing Services`,
        });
    }

    const designServicesEvent = () => { 
        ReactGA.event({
            category: 'Homepage: Design Services',
            action: `See Design Services`,
        });
    }

    return (
        <Styled.Container id="services">
            <Styled.SectionTitle>
                <h1>{t('home.ourServices.title')}</h1>
            </Styled.SectionTitle>
            <Styled.Title>
                <h1><span>{t('home.ourServices.weHave')}</span> {t('home.ourServices.whatYouNeed')}</h1>
            </Styled.Title>
            <Styled.Services>
                 <Styled.Background/>
                <Styled.CardsContainer>
                    <Styled.Card className="top-card">
                        <div className="icon">
                            <img alt="software" src={ softwareIcon }/>
                        </div>
                        <h1>{t('home.ourServices.software.title')}</h1>
                        <p>{t('home.ourServices.software.description')}</p>
                        <Link to={"/software"}>
                        <Button className="button" onClick={softwareServicesEvent}>{t('global:global.btnSeeMore')}</Button>
                        </Link>
                    </Styled.Card>
                    <Styled.Card className="middle-card">
                        <div className="icon">
                            <img alt="marketing" src={ marketingIcon } className="marketing-icon"/>
                        </div>
                        <h1>{t('home.ourServices.marketing.title')}</h1>
                        <p>{t('home.ourServices.marketing.description')}</p>
                        <Link to={"/marketing"}>
                        <Button className="button" onClick={marketingServicesEvent}>{t('global:global.btnSeeMore')}</Button>
                        </Link>
                    </Styled.Card>
                    <Styled.Card className="end-card">
                        <div className="icon">
                            <img alt="design" src={ designIcon } className="design-icon"/>
                        </div>
                        <h1>{t('home.ourServices.graphicDesign.title')}</h1>
                        <p>{t('home.ourServices.graphicDesign.description')}</p>
                        <Link to={"/graphic-design"}>
                        <Button className="button" onClick={designServicesEvent}>{t('global:global.btnSeeMore')}</Button>
                        </Link>
                    </Styled.Card>
                </Styled.CardsContainer>
            </Styled.Services>
        </Styled.Container>
    )
}

export default Services