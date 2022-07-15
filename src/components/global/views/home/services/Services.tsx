import Button from "@mui/material/Button/Button"
import React from "react"
import { useTranslation } from "react-i18next";
import { designIcon, marketingIcon, softwareIcon } from "../../../../../utils/constants/constants"
import * as Styled from './Services.style'

function Services() {
    const { t, i18n, ready } = useTranslation(['home','global'], { useSuspense: true });
    return (
        <Styled.Container>
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
                        <Button className="button">{t('global:global.btnSeeMore')}</Button>
                    </Styled.Card>
                    <Styled.Card className="middle-card">
                        <div className="icon">
                            <img alt="marketing" src={ marketingIcon } className="marketing-icon"/>
                        </div>
                        <h1>{t('home.ourServices.marketing.title')}</h1>
                        <p>{t('home.ourServices.marketing.description')}</p>
                        <Button className="button">{t('global:global.btnSeeMore')}</Button>
                    </Styled.Card>
                    <Styled.Card className="end-card">
                        <div className="icon">
                            <img alt="design" src={ designIcon } className="design-icon"/>
                        </div>
                        <h1>{t('home.ourServices.graphicDesign.title')}</h1>
                        <p>{t('home.ourServices.graphicDesign.description')}</p>
                        <Button className="button">{t('global:global.btnSeeMore')}</Button>
                    </Styled.Card>
                </Styled.CardsContainer>
            </Styled.Services>
        </Styled.Container>
    )
}

export default Services