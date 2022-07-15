import React from "react"
import { useTranslation } from "react-i18next";
import { CATbackground, fbIcon, instagramIcon } from "../../../../../utils/constants/constants"
import * as Styled from './CAT.style'

function CAT() {

    const { t, i18n, ready } = useTranslation(['CAT'], { useSuspense: true });
    
    return (
        <Styled.Container>
            <Styled.Deco>
                <img src={ CATbackground } alt='deco'/>
            </Styled.Deco>
            <Styled.TextContainer>
                <Styled.Title>
                    <h1>{t('CAT.title')}</h1>
                </Styled.Title>
                <Styled.Text>
                    <p>
                    {t('CAT.description1')}
                    </p>
                    <p>
                    {t('CAT.description2')}
                    </p>
                </Styled.Text>
                <Styled.Social>
                    <a href="https://www.facebook.com/duckstudioss"><img alt='fb' src={ fbIcon }/></a>
                    <a href="https://instagram.com/duck_studios_?igshid=YmMyMTA2M2Y="><img alt='ig' src={ instagramIcon }/></a>
                    {/* <img alt='in' src={ inIcon }/> */}
                </Styled.Social>
            </Styled.TextContainer>
        </Styled.Container>
    )
}

export default CAT