import React, { useEffect } from "react"
import { aboutUsMockup } from "../../../../../utils/constants/constants"
import * as Styled from './AboutUs.style'

function AboutUs() {

    useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

    return (
        <Styled.Container>
            <Styled.TextContainer>
                <Styled.SectionTitle>
                    <h1>About Us</h1>
                </Styled.SectionTitle>
                <Styled.Title>
                    <h1>Why Us?</h1>
                </Styled.Title>
                <Styled.Text>
                    <p>Duck Studios was born when seeing the lack of creativity, innovation and good
                        technical practices that are currently in the market. We see how many companies
                        promise low-cost web pages, which are not made by engineers, and therefore are not secure pages,
                        nor do they meet technical standards. We also see how many others provide Marketing services,
                        without really having the respective knowledge and studies, focusing only on creating content
                        for networks and paying for advertising. We want to create real Software, real Marketing,
                        and add our clients' projects creativity and magic in the process.</p>
                </Styled.Text>
            </Styled.TextContainer>
            <Styled.ImageContainer>
                <img alt="tablet mockup" src={ aboutUsMockup}/>
            </Styled.ImageContainer>
        </Styled.Container>
    )
}

export default AboutUs