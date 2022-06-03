import React, { useEffect } from "react"
import Banner from "./banner/Banner"
import * as Styled from './Home.style'
import Services from "./services/Services"

function Home() {

    useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

    return (
        <Styled.ContainerWrap>
        <Banner />
        <Services/>
      </Styled.ContainerWrap>
    )
}

export default Home