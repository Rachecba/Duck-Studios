import React, { useEffect, useState } from "react"
import { Props } from "./Portfolio.props"
import * as Styled from './Portfolio.style'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import ReactGA from 'react-ga4';
import { Link } from "react-router-dom";

function Portfolio({ projects }: Props) {

    const { t, i18n, ready } = useTranslation(['portfolio', 'global', 'grapichDesign', 'software', 'marketing'], { useSuspense: true });
    const path = window.location.pathname;

    const portfolioEvent = () => { 
        ReactGA.event({
            category: `${path}: Portfolio`,
            action: `Click on see more ${path}`,
        });
    }

    const projectSocialMediaEvent = () => { 
        ReactGA.event({
            category: `${path}: Portfolio`,
            action: `Click on social media ${path}`,
        });
    }

    const projectWebEvent = () => { 
        ReactGA.event({
            category: `${path}: Portfolio`,
            action: `Click on see more ${path}`,
        });
    }

    const portfolioUrl = useState(`/portfolio${window.location.pathname}`);

    const renderSocialMedia = (socialMedia: any) => {
        switch (socialMedia.type) {
            case 'fb':
                return <a href={socialMedia.url} target="_blank" className="social-icon" rel="noreferrer" onClick={projectSocialMediaEvent}>
                    <FacebookRoundedIcon fontSize="large" />
                </a>
            case 'insta':
                return <a href={socialMedia.url} target="_blank" className="social-icon" rel="noreferrer" onClick={projectSocialMediaEvent}>
                    <InstagramIcon fontSize="large" />
                </a>
            case 'linked':
                return <a href={socialMedia.url} target="_blank" className="social-icon" rel="noreferrer" onClick={projectSocialMediaEvent}>
                    <LinkedInIcon fontSize="large" />
                </a>
        }
    }

    const portfolioDetail = () => {
        ReactGA.event({
          category: `Service${window.location.pathname}: View all portfolio Button`,
          action: `Click on view full portfolio services button`,
        });
       document.querySelector( '#services' )?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
     }

    return (
        <Styled.Container id="portfolio">
            <Styled.TitleContainer>
                <Styled.SectionTitle>
                    <h1>{t('global:global.portfolio')}</h1>
                </Styled.SectionTitle>
                <Styled.Title>
                    <h1>{t('portfolio:portfolio.subtitle')}</h1>
                </Styled.Title>
            </Styled.TitleContainer>
            <Styled.ProjectsContainer>
                {projects.map((item) => {
                    return (
                        <>
                            <Styled.Project>
                                <Styled.Slider>
                                    <Splide aria-label="Project images" options={{ rewind: true,arrows:item.images.length>1 }}>
                                        {item.images.map((image) => {
                                            return (
                                                <SplideSlide>
                                                    <img src={image} alt={item.projectTitle} className="img-project"/>
                                                </SplideSlide>
                                            )
                                        })}
                                    </Splide>
                                </Styled.Slider>
                                <Styled.Description>
                                    <Styled.ProjectTitle><h1>{t(item.projectTitle)}</h1></Styled.ProjectTitle>
                                    <Styled.ProjectDescription><p>{t(item.projectDescription)}</p></Styled.ProjectDescription>
                                </Styled.Description>
                                {item.projectLink && (
                                    <Styled.Description>
                                        <Styled.ProjectLink><h3>{t('portfolio:portfolio.appSpan')} {item.projectLink.type}</h3></Styled.ProjectLink>
                                        <Styled.ProjectLink><a href={item.projectLink.url} onClick={projectWebEvent}>{item.projectLink.name}</a></Styled.ProjectLink>
                                    </Styled.Description>
                                )}
                                {item.socialMedia && (
                                    <Styled.Description>
                                        <Styled.ProjectLink><h3> {t('portfolio:portfolio.socialMediaSpan')} </h3></Styled.ProjectLink>
                                        <Styled.SocialMediaLinks>
                                            {item.socialMedia.map((sm) => {
                                                return (
                                                    <div>
                                                        {renderSocialMedia(item)}
                                                    </div>
                                                )
                                            })}
                                        </Styled.SocialMediaLinks>
                                    </Styled.Description>
                                )}
                            </Styled.Project>
                        </>
                    )
                })}
            </Styled.ProjectsContainer>
            <h1 className="margin-center">
               <Link to={`/portfolio${window.location.pathname}`}><Button className="see-more-btn" onClick={portfolioDetail}>{t('global:global.btnSeeMore')}</Button></Link>
            </h1>
        </Styled.Container>
    )
}

export default Portfolio