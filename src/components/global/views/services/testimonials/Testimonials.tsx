import React from "react"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { useTranslation } from "react-i18next";
import { Props } from "./Testimonials.props";
import * as Styled from './Testimonials.style'

function Testimonials({ testimonials }: Props) {
     const AutoplaySlider = withAutoplay(AwesomeSlider);
     const { t, i18n, ready } = useTranslation(['ourServices','global','grapichDesign','software','marketing', 'cat', 'testimonials'], { useSuspense: true });
    return (
        <Styled.Container>
            <Styled.TitleContainer>
            <Styled.SectionTitle>
                <h1>{t('testimonials:testimonials.title')}</h1>
            </Styled.SectionTitle>
            <Styled.Title>
                <h1>{t('testimonials:testimonials.title2')}</h1>
                </Styled.Title>
            </Styled.TitleContainer>
            <Styled.CarouselContainer>
                <AutoplaySlider
                    play={ true }
                    cancelOnInteraction={ false } // should stop playing on user interaction
                    interval={ 6000 }
                    touchEnabled={ true }
                    bullets={ true }
                >
                    {testimonials.map((item,index) => {
                        return (
                            <div key={index} data-src={ item.image } />
                        )
                    }) }
                </AutoplaySlider>
            </Styled.CarouselContainer>
        </Styled.Container>
    )
}

export default Testimonials