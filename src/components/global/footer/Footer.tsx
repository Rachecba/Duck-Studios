import React from "react"
import { Link } from "react-router-dom"
import { logo } from "../../../utils/constants/constants"
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import * as Styled from './Footer.style'
import { useTranslation } from "react-i18next";
import ReactGA from 'react-ga4';

function Footer() {

    const year = () => { 
        return new Date().getFullYear() 
    }
    const { t, i18n, ready } = useTranslation('footer', { useSuspense: true });

    const facebookEvent = () => { 
        ReactGA.event({
            category: 'Homepage: Social Media',
            action: `Go to Facebook page`,
        });
    }

    const instagramEvent = () => { 
        ReactGA.event({
            category: 'Homepage: Social Media',
            action: `Go to Instagram page`,
        });
    }

    const softwareServicesEvent = () => { 
        ReactGA.event({
            category: 'Homepage: Software Services',
            action: `See Software Services (footer)`,
        });
    }

    const marketingServicesEvent = () => { 
        ReactGA.event({
            category: 'Homepage: Marketing Services',
            action: `See Marketing Services (footer)`,
        });
    }

    const emailEvent = () => { 
        ReactGA.event({
            category: 'Homepage: Footer',
            action: `Contact email (footer)`,
        });
    }

    const phoneNumberEvent = () => { 
        ReactGA.event({
            category: 'Homepage: Footer',
            action: `Contact phone (footer)`,
        });
    }

    const designServicesEvent = () => { 
        ReactGA.event({
            category: 'Homepage: Design Services',
            action: `See Design Services (footer)`,
        });
    }
    


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
                            <li onClick={ marketingServicesEvent }><Link to={'/marketing'}>{t('global:global.marketing')}</Link></li>
                            <li onClick={ designServicesEvent }><Link to={'/graphic-design'}>{t('global:global.grapichDesign')}</Link></li>
                            <li onClick={ softwareServicesEvent }><Link to={'/software'}>{t('global:global.software')}</Link></li>
                        </ul>
                </Styled.Services>
                <Styled.Contact>
                    <h1>{t('footer.cat')}</h1>
                    <ul>
                        <li><span><MailIcon/></span> <a onClick={ emailEvent } href="mailto:info@duckstudios.net">info@duckstudios.net</a></li>
                        <li><span><LocalPhoneIcon/></span> <a onClick={phoneNumberEvent} href="tel:+50687547781">+506 8754-7781</a></li>
                    </ul>
                </Styled.Contact>
                <Styled.SM>
                    <h1>{t('footer.followUs')}</h1>
                    <ul>
                        <li><a href="https://www.facebook.com/duckstudioss" onClick={ facebookEvent }><span><FacebookIcon/></span> Duck Studios</a></li>
                        <li><a href="https://instagram.com/duck_studios_?igshid=YmMyMTA2M2Y=" onClick={ instagramEvent }><span><InstagramIcon/></span> @duck_studios_</a></li>
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