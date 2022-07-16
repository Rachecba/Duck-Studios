import Button from "@mui/material/Button/Button"
import React from "react"
import { useTranslation } from "react-i18next";
import { Props } from "./OurServices.props"
import * as Styled from './OurServices.style'

function OurServices({ title, services }: Props) {
    
  const { t, i18n, ready } = useTranslation(['ourServices','global','grapichDesign','software','marketing'], { useSuspense: true });
    
    const cardPosition = (index: number, arrayLenght: number) => { 
        if (index === 0) {
            return 'top-card'
        } else { 
            if (index === arrayLenght)
                return 'end-card'
            else { 
                return 'middle-card'
            }
        }
    }

    return (
        <Styled.Container>
            <Styled.SectionTitle>
                <h1>{t('global:global.ourServices')}</h1>
            </Styled.SectionTitle>
            <Styled.Title>
                <h1>{t( title) }</h1>
            </Styled.Title>
            <Styled.Services className="portfolio-button animate__animated animate__fadeInUp">
                 <Styled.Background/>
                <Styled.CardsContainer>
                    { services.map((item, index) => { 
                        return (
                            <>
                                <Styled.Card className={ cardPosition(index, services.length)}>
                                    <div className="icon">
                                        <img alt="software" src={ item.icon }/>
                                    </div>
                                    <h1>{ t(item.title) }</h1>
                                    <p>{ t(item.description) }</p>
                                    <Button className="button">{t('global:global.btnSeeMore')}</Button>
                                </Styled.Card>
                            </>
                        )
                    })}
                </Styled.CardsContainer>
            </Styled.Services>
        </Styled.Container>
    )
}

export default OurServices