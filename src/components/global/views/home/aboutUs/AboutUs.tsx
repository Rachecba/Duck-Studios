import React, { useEffect } from "react"
import { useTranslation } from "react-i18next";
import { aboutUsMockup } from "../../../../../utils/constants/constants"
import * as Styled from './AboutUs.style'

function AboutUs() {
    const { t, i18n, ready } = useTranslation(['home'], { useSuspense: true });
    useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

    return (
        <Styled.Container>
            <Styled.TextContainer>
                <Styled.SectionTitle>
                    <h1>{t('home.aboutUs.title')}</h1>
                </Styled.SectionTitle>
                <Styled.Title>
                    <h1>{t('home.aboutUs.subtitle')}</h1>
                </Styled.Title>
                <Styled.Text>
                    <p>
                    {t('home.aboutUs.description')}
                    </p>
                </Styled.Text>
            </Styled.TextContainer>
            <Styled.ImageContainer>
                <img alt="tablet mockup" src={ aboutUsMockup}/>
            </Styled.ImageContainer>
        </Styled.Container>
    )
}

export default AboutUs