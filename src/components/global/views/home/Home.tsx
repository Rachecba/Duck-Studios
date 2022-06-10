import React, { useEffect } from "react"
import AboutUs from "./aboutUs/AboutUs"
import Banner from "./banner/Banner"
import CAT from "./cat/CAT"
import FAQ from "./faq/FAQ"
import * as Styled from './Home.style'
import Portfolio from "./portfolio/Portfolio"
import Services from "./services/Services"
import Testimonials from "./testimonials/Testimonials"

function Home() {

    useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

    return (
        <Styled.ContainerWrap>
        <Banner />
        <Services />
        <AboutUs />
        <Portfolio />
        <CAT />
        <Testimonials />
        <FAQ />
      </Styled.ContainerWrap>
    )
}

export default Home