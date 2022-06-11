import React from "react"
import { Link } from "react-router-dom"
import { logo } from "../../../utils/constants/constants"
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import * as Styled from './Footer.style'

function Footer() {

    const year = () => { 
        return new Date().getFullYear() 
    }

    return (
        <Styled.Container>
            <Styled.FooterContainer>
                <Styled.Logo>
                    <img src={ logo } alt="logo" />
                </Styled.Logo>
                <Styled.LinksContainer>
                <Styled.Services>
                    <h1>Services</h1>
                        <ul>
                            <li><Link to={'/'}>Marketing</Link></li>
                            <li><Link to={'/'}>Graphic Design</Link></li>
                            <li><Link to={'/'}>Software</Link></li>
                        </ul>
                </Styled.Services>
                <Styled.Contact>
                    <h1>Contact us!</h1>
                    <ul>
                        <li><span><MailIcon/></span> info@duckstudios.net</li>
                        <li><span><LocalPhoneIcon/></span> +506 8754-7781</li>
                    </ul>
                </Styled.Contact>
                <Styled.SM>
                    <h1>Follow us!</h1>
                    <ul>
                        <li><a href="https://www.facebook.com/duckstudioss"><span><FacebookIcon/></span> Duck Studios</a></li>
                        <li><a href="https://instagram.com/duck_studios_?igshid=YmMyMTA2M2Y="><span><InstagramIcon/></span> @duck_studios_</a></li>
                    </ul>
                    </Styled.SM>
                </Styled.LinksContainer>
            </Styled.FooterContainer>
                <Styled.CopyrightContainer>
                <p>© { year() } Duck Studios. All rights reserved</p>
                </Styled.CopyrightContainer>
        </Styled.Container>
    )
}

export default Footer