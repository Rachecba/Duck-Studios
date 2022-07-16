import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/global/views/home/Home"
import Service from "./components/global/views/services/Service"
import { designMockup, marketingProjects, marketingServices, marketingTestimonials, softwareProjects, softwareServices, softwareTestimonials } from "./utils/constants/constants"
import { designProjects, designServices, designTestimonials } from "./utils/constants/constants"
function Main() {

    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/graphic-design" element={ <Service designProjects={designProjects} designServices={designServices} designTestimonials={designTestimonials} heroTitle="grapichDesign:grapichDesign.heroTitle" heroSpan="grapichDesign:grapichDesign.heroSpan" heroSubtitle="grapichDesign:grapichDesign.heroSubtitle" servicesTitle="grapichDesign:grapichDesign.services.title" heroImage={ designMockup }/>} />
            <Route path="/marketing" element={ <Service designProjects={marketingProjects} designServices={marketingServices} designTestimonials={marketingTestimonials} heroTitle="grapichDesign:grapichDesign.heroTitle" heroSpan="grapichDesign:grapichDesign.heroSpan" heroSubtitle="grapichDesign:grapichDesign.heroSubtitle" servicesTitle="grapichDesign:grapichDesign.services.title" heroImage={ designMockup }/>} />
            <Route path="/software" element={ <Service designProjects={softwareProjects} designServices={softwareServices} designTestimonials={softwareTestimonials} heroTitle="grapichDesign:grapichDesign.heroTitle" heroSpan="grapichDesign:grapichDesign.heroSpan" heroSubtitle="grapichDesign:grapichDesign.heroSubtitle" servicesTitle="grapichDesign:grapichDesign.services.title" heroImage={ designMockup }/>} />
        </Routes>
    )
}

export default Main