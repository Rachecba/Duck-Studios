import React, { useEffect, useRef } from "react"
import AboutUs from "./aboutUs/AboutUs"
import Banner from "./banner/Banner"
import CAT from "./cat/CAT"
import FAQ from "./faq/FAQ"
import * as Styled from './Home.style'
import Portfolio from "./portfolio/Portfolio"
import Services from "./services/Services"
import Testimonials from "./testimonials/Testimonials"
import ReactGA from 'react-ga4';
import { pageTitle } from "../../../../utils/constants/constants"

function Home() {

  const path = window.location.pathname

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
    useEffect(() => {
      ReactGA.send('/homepage');
      document.title = pageTitle(path)
    }, []);

    useEffect(() => {
      ReactGA.send(path);
      document.title = pageTitle(path)
    }, [path]);

    return (
      <Styled.ContainerWrap>
        <Banner/>
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