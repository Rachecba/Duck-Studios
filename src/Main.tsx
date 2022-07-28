import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/global/views/home/Home"
import ProjectDetail from "./components/global/views/portfolio/portfolio-detail"
import PortfolioList from "./components/global/views/portfolio/portfolio-list"

import Service from "./components/global/views/services/Service"
import { designMockup, grapichDesignPortfolio, marketingMockup, marketingPortfolio, marketingProjects, marketingServices, marketingTestimonials, softwareMockup, softwarePortfolio, softwareProjects, softwareServices, softwareTestimonials } from "./utils/constants/constants"
import { designProjects, designServices, designTestimonials } from "./utils/constants/constants"
function Main() {

    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/graphic-design" element={ <Service designProjects={designProjects} designServices={designServices} designTestimonials={designTestimonials} heroTitle="grapichDesign:grapichDesign.heroTitle" heroSpan="grapichDesign:grapichDesign.heroSpan" heroSubtitle="grapichDesign:grapichDesign.heroSubtitle" servicesTitle="grapichDesign:grapichDesign.services.title" heroImage={ designMockup }/>} />
            <Route path="/marketing" element={ <Service designProjects={marketingProjects} designServices={marketingServices} designTestimonials={marketingTestimonials} heroTitle="marketing:marketing.heroTitle" heroSpan="marketing:marketing.heroSpan" heroSubtitle="marketing:marketing.heroSubtitle" servicesTitle="marketing:marketing.services.title" heroImage={ marketingMockup }/>} />
            <Route path="/software" element={ <Service designProjects={softwareProjects} designServices={softwareServices} designTestimonials={softwareTestimonials} heroTitle="software:software.heroTitle" heroSpan="software:software.heroSpan" heroSubtitle="software:software.heroSubtitle" servicesTitle="software:software.services.title" heroImage={ softwareMockup }/>} />
            <Route path="/portfolio/marketing" element={ <PortfolioList portfolio={marketingPortfolio}/>} />
            <Route path="/portfolio/software" element={ <PortfolioList portfolio={softwarePortfolio}/>} />
            <Route path="/portfolio/graphic-design" element={ <PortfolioList portfolio={grapichDesignPortfolio}/>} />
            <Route path="/portfolio/:service/:urlName" element={ <ProjectDetail/>} />
        </Routes>
    )
}

export default Main