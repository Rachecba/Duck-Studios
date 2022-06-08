import React, { useEffect } from "react"
import { CATbackground, fbIcon, inIcon, instagramIcon } from "../../../../../utils/constants/constants"
import * as Styled from './CAT.style'

function CAT() {

    return (
        <Styled.Container>
            <Styled.Deco>
                <img src={ CATbackground } alt='deco'/>
            </Styled.Deco>
            <Styled.TextContainer>
                <Styled.Title>
                    <h1>We are swimming – in a sea of solutions</h1>
                </Styled.Title>
                <Styled.Text>
                    <p>
                        We will be the perfect match between a creative solution and your necessity.
                    </p>
                    <p>
                        Follow us on our social media to get more info!
                    </p>
                </Styled.Text>
                <Styled.Social>
                    <img alt='fb' src={ fbIcon }/>
                    <img alt='ig' src={ instagramIcon }/>
                    <img alt='in' src={ inIcon }/>
                </Styled.Social>
            </Styled.TextContainer>
        </Styled.Container>
    )
}

export default CAT