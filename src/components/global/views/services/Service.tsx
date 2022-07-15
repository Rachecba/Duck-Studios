import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"

import CAT from "./cat/CAT"
import Hero from "./hero/Hero"
import OurServices from "./ourServices/OurServices"
import Portfolio from "./portfolio/Portfolio"
import { Props } from "./Service.props"
import * as Styled from './Service.style'
import Testimonials from "./testimonials/Testimonials"

function Service({ heroTitle, heroSpan, heroSubtitle, heroImage, servicesTitle, designServices, designProjects,designTestimonials } : Props) {

    

    useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

    return (
        <Styled.Container>
            <Hero title={ heroTitle } span={ heroSpan } subtitle={ heroSubtitle } image={ heroImage } />
            <OurServices title={servicesTitle} services={ designServices } />
            <Portfolio projects={designProjects}/>
            <Testimonials testimonials={ designTestimonials } />
            <CAT />
        </Styled.Container>
    )
}

export default Service