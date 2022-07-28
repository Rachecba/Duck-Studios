import React from "react"
import { Link } from "react-router-dom"
import { logo } from "../../../utils/constants/constants"
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import * as Styled from './Footer.style'
import { useTranslation } from "react-i18next";

function Footer() {

    const year = () => { 
        return new Date().getFullYear() 
    }
    const { t, i18n, ready } = useTranslation('footer', { useSuspense: true });

    return (
        <Styled.Container className="animate__animated animate__slideInUp">
            <Styled.FooterContainer>
                <Styled.Logo>
                    <img src={ logo } alt="logo" />
                </Styled.Logo>
                <Styled.LinksContainer>
                <Styled.Services>
                    <h1>{t('footer.services')}</h1>
                        <ul>
                            <li><Link to={'/'}>{t('global:global.marketing')}</Link></li>
                            <li><Link to={'/'}>{t('global:global.grapichDesign')}</Link></li>
                            <li><Link to={'/'}>{t('global:global.software')}</Link></li>
                        </ul>
                </Styled.Services>
                <Styled.Contact>
                    <h1>{t('footer.cat')}</h1>
                    <ul>
                        <li><span><MailIcon/></span> info@duckstudios.net</li>
                        <li><span><LocalPhoneIcon/></span> +506 8754-7781</li>
                    </ul>
                </Styled.Contact>
                <Styled.SM>
                    <h1>{t('footer.followUs')}</h1>
                    <ul>
                        <li><a href="https://www.facebook.com/duckstudioss"><span><FacebookIcon/></span> Duck Studios</a></li>
                        <li><a href="https://instagram.com/duck_studios_?igshid=YmMyMTA2M2Y="><span><InstagramIcon/></span> @duck_studios_</a></li>
                    </ul>
                    </Styled.SM>
                </Styled.LinksContainer>
            </Styled.FooterContainer>
                <Styled.CopyrightContainer>
                <p>© { year() } Duck Studios. <span>{t('footer.allRightsReserved')}</span></p>
                </Styled.CopyrightContainer>
        </Styled.Container>
    )
}

export default Footer