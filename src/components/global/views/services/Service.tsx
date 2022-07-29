import React, { useEffect } from "react"

import CAT from "./cat/CAT"
import Hero from "./hero/Hero"
import OurServices from "./ourServices/OurServices"
import Portfolio from "./portfolio-sneak-peak/Portfolio"
import { Props } from "./Service.props"
import * as Styled from './Service.style'
import Testimonials from "./testimonials/Testimonials"
import ReactGA from 'react-ga4';
import { pageTitle } from "../../../../utils/constants/constants"

function Service({ heroTitle, heroSpan, heroSubtitle, heroImage, servicesTitle, designServices, designProjects, designTestimonials }: Props) {
    
    const path = window.location.pathname

    useEffect(() => {
        ReactGA.send(path);
        document.title = pageTitle(path)
    }, [path]);

     useEffect(() => {
        ReactGA.send(path);
        document.title = pageTitle(path)
    }, []);
    
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