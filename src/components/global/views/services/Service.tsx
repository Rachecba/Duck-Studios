import React, { useEffect } from "react"
import { designProjects, designServices, designTestimonials } from "../../../../utils/constants/constants"
import CAT from "./cat/CAT"
import Hero from "./hero/Hero"
import OurServices from "./ourServices/OurServices"
import Portfolio from "./portfolio/Portfolio"
import { Props } from "./Service.props"
import * as Styled from './Service.style'
import Testimonials from "./testimonials/Testimonials"

function Service({ heroTitle, heroSpan, heroSubtitle, heroImage} : Props) {

    useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

    return (
        <Styled.Container>
            <Hero title={ heroTitle } span={ heroSpan } subtitle={ heroSubtitle } image={ heroImage } />
            <OurServices title='What do you want us to design?' services={ designServices } />
            <Portfolio projects={designProjects}/>
            <Testimonials testimonials={ designTestimonials } />
            <CAT />
        </Styled.Container>
    )
}

export default Service