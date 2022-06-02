import React, { useEffect } from "react"
import Banner from "./banner/Banner"
import * as Styled from './Home.style'

function Home() {

    useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

    return (
        <Styled.ContainerWrap>
          <Banner/>
      </Styled.ContainerWrap>
    )
}

export default Home