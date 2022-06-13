import React from "react"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Props } from "./Testimonials.props";
import * as Styled from './Testimonials.style'

function Testimonials({ testimonials }: Props) {
     const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <Styled.Container>
            <Styled.TitleContainer>
            <Styled.SectionTitle>
                <h1>Testimonials</h1>
            </Styled.SectionTitle>
            <Styled.Title>
                <h1>We are not making it up</h1>
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
                    {testimonials.map((item) => {
                        return (
                            <div data-src={ item.image } />
                        )
                    }) }
                </AutoplaySlider>
            </Styled.CarouselContainer>
        </Styled.Container>
    )
}

export default Testimonials