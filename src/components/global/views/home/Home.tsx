import React, { useEffect } from "react"
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
import Team from "./team/Team"
import Blogs from "./blogs/blogs"

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
        <Team />
        <Portfolio />
        <CAT />
        <Testimonials />
        <Blogs />
        <FAQ />
      </Styled.ContainerWrap>
    )
}

export default Home