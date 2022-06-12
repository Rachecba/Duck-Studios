import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/global/views/home/Home"
import Service from "./components/global/views/services/Service"
import { designMockup } from "./utils/constants/constants"

function Main() {

    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/graphic-design" element={ <Service heroTitle="We believe that" heroSpan=" creativity is what moves the world" heroSubtitle="We bring your ideas to life" heroImage={ designMockup }/>} />
        </Routes>
    )
}

export default Main