import Button from "@mui/material/Button/Button"
import React from "react"
import { designIcon, marketingIcon, softwareIcon } from "../../../../../utils/constants/constants"
import * as Styled from './Services.style'

function Services() {

    return (
        <Styled.Container>
            <Styled.SectionTitle>
                <h1>Our Services</h1>
            </Styled.SectionTitle>
            <Styled.Title>
                <h1>We have <span>what you need</span></h1>
            </Styled.Title>
            <Styled.Services>
                 <Styled.Background/>
                <Styled.CardsContainer>
                    <Styled.Card className="top-card">
                        <div className="icon">
                            <img alt="software" src={ softwareIcon }/>
                        </div>
                        <h1>Software</h1>
                        <p>Count with the support of Software Engineers who create your website, mobile application or software. We deliver quality products that highlight the professionalism and essence of your company.</p>
                        <Button className="button">See more</Button>
                    </Styled.Card>
                    <Styled.Card className="middle-card">
                        <div className="icon">
                            <img alt="marketing" src={ marketingIcon } className="marketing-icon"/>
                        </div>
                        <h1>MARKETING</h1>
                        <p>We make your company recognized among your target audience, managing to attract more customers, and of course, that they continue to buy your product/service.</p>
                        <Button className="button">See more</Button>
                    </Styled.Card>
                    <Styled.Card className="end-card">
                        <div className="icon">
                            <img alt="design" src={ designIcon } className="design-icon"/>
                        </div>
                        <h1>GRAPHIC DESIGN</h1>
                        <p>We help you achieve a unique and striking brand design. That captures and transmits the essence of your brand. We managed to create art that will leave your audience impressed!</p>
                        <Button className="button">See more</Button>
                    </Styled.Card>
                </Styled.CardsContainer>
            </Styled.Services>
        </Styled.Container>
    )
}

export default Services