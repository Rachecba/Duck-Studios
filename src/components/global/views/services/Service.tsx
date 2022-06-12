import React, { useEffect } from "react"
import Hero from "./hero/Hero"
import { Props } from "./Service.props"
import * as Styled from './Service.style'

function Service({ heroTitle, heroSpan, heroSubtitle, heroImage} : Props) {

    useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

    return (
        <Styled.Container>
            <Hero title={ heroTitle } span={ heroSpan } subtitle={ heroSubtitle } image={ heroImage}/> 
        </Styled.Container>
    )
}

export default Service