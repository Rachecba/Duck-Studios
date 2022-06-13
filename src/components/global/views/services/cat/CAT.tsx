import React from "react"
import { CATbackground, fbIcon, instagramIcon } from "../../../../../utils/constants/constants"
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import * as Styled from './CAT.style'

function CAT() {

    return (
        <Styled.Container>
            <Styled.Deco>
                <img src={ CATbackground } alt='deco'/>
            </Styled.Deco>
            <Styled.TextContainer>
                <Styled.Title>
                    <h1>Contact Us,</h1>
                    <h1>You'll regret it if you don't ;)</h1>
                </Styled.Title>
                <Styled.Social>
                    <div className="contact">
                        <ul>
                            <li><a href="mailto:info@duckstudios.net"><span><MailIcon/></span>info@duckstudios.net</a></li>
                            <li><span><LocalPhoneIcon/></span>+506 8754-7781</li>
                        </ul>
                    </div>
                    <div className="social-media">
                        <ul>
                            <li><a href="https://www.facebook.com/duckstudioss"><span><img alt='fb' src={ fbIcon }/></span> Duck Studios</a></li>
                            <li><a href="https://instagram.com/duck_studios_?igshid=YmMyMTA2M2Y="><span><img alt='ig' src={ instagramIcon }/></span> @duck_studios_</a></li>
                        </ul>
                    </div>
                </Styled.Social>
            </Styled.TextContainer>
        </Styled.Container>
    )
}

export default CAT