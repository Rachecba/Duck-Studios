import React from "react"
import { CATbackground, fbIcon, instagramIcon } from "../../../../../utils/constants/constants"
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import * as Styled from './CAT.style'
import { useTranslation } from "react-i18next";
import ReactGA from 'react-ga4';

function CAT() {

    const { t, i18n, ready } = useTranslation(['ourServices', 'global', 'grapichDesign', 'software', 'marketing', 'cat'], { useSuspense: true });
    const path = window.location.pathname;

    const facebookEvent = () => { 
        ReactGA.event({
            category: `${path}: Social Media`,
            action: `Go to Facebook page`,
        });
    }

    const instagramEvent = () => { 
        ReactGA.event({
            category: `${path}: Social Media`,
            action: `Go to Instagram page`,
        });
    }

    const mailEvent = () => { 
        ReactGA.event({
            category: `${path}: Social Media`,
            action: `Click on email`,
        });
    }

    const phoneEvent = () => { 
        ReactGA.event({
            category: 'Homepage: Social Media',
            action: `Click on phone number`,
        });
    }
 
    return (
        <Styled.Container>
            <Styled.Deco>
                <img src={ CATbackground } alt='deco'/>
            </Styled.Deco>
            <Styled.TextContainer>
                <Styled.Title>
                    <h1>{t('cat:CAT.contactCat')}</h1>
                    <h1>{t('cat:CAT.regretCat')}</h1>
                </Styled.Title>
                <Styled.Social>
                    <div className="contact">
                        <ul>
                            <li><a href="mailto:info@duckstudios.net" onClick={mailEvent}><span><MailIcon/></span>info@duckstudios.net</a></li>
                            <li><a href="tel:+506 87547781" onClick={phoneEvent}><span><LocalPhoneIcon/></span>+506 8754-7781</a></li>
                        </ul>
                    </div>
                    <div className="social-media">
                        <ul>
                            <li><a href="https://www.facebook.com/duckstudioss" onClick={facebookEvent}><span><img alt='fb' src={ fbIcon }/></span> Duck Studios</a></li>
                            <li><a href="https://instagram.com/duck_studios_?igshid=YmMyMTA2M2Y=" onClick={instagramEvent}><span><img alt='ig' src={ instagramIcon }/></span> @duck_studios_</a></li>
                        </ul>
                    </div>
                </Styled.Social>
            </Styled.TextContainer>
        </Styled.Container>
    )
}

export default CAT