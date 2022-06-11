import { Button } from "@mui/material"
import React from "react"
import { designBackground, marketingBackground, softwareBackground } from "../../../../../utils/constants/constants"
import * as Styled from './Portfolio.style'

function Portfolio() {

    return (
        <Styled.Container>
            <Styled.TitleContainer>
                <Styled.SectionTitle>
                    <h1>Portfolio</h1>
                </Styled.SectionTitle>
                <Styled.Title>
                    <h1>Our clients success,<span> is our success</span></h1>
                    </Styled.Title>
            </Styled.TitleContainer>
            <Styled.PortfolioContainer>
                <Styled.Card>
                    <img alt="software" src={ softwareBackground }/>
                    <div className="container">
                        <h1>Software</h1>
                        <Button className="button">See more</Button>
                    </div>
                </Styled.Card>
                <Styled.Card>
                   <img alt="design" src={ designBackground }/>
                    <div className="container">
                        <h1>Graphic Design</h1>
                        <Button className="button">See more</Button>
                    </div>
                </Styled.Card>
                <Styled.Card>
                   <img alt="marketing" src={ marketingBackground }/>
                    <div className="container">
                        <h1>Marketing</h1>
                        <Button className="button">See more</Button>
                    </div>
                </Styled.Card>
            </Styled.PortfolioContainer>
        </Styled.Container>
    )
}

export default Portfolio