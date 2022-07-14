import React, { useEffect } from "react"
import { Props } from "./Portfolio.props"
import * as Styled from './Portfolio.style'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button, Link } from "@mui/material";
import { isTemplateSpan } from "typescript";

function Portfolio({ projects }: Props) {


    const renderSocialMedia = (socialMedia: any) => {
        switch (socialMedia.type) {
            case 'fb':
                return <a href={socialMedia.url} target="_blank" className="social-icon">
                    <FacebookRoundedIcon fontSize="large" />
                </a>
            case 'insta':
                return <a href={socialMedia.url} target="_blank" className="social-icon">
                    <InstagramIcon fontSize="large" />
                </a>
            case 'linked':
                return <a href={socialMedia.url} target="_blank" className="social-icon">
                    <LinkedInIcon fontSize="large" />
                </a>
        }
    }
    return (
        <Styled.Container>
            <Styled.TitleContainer>
                <Styled.SectionTitle>
                    <h1>Portfolio</h1>
                </Styled.SectionTitle>
                <Styled.Title>
                    <h1>We have proof we are the best</h1>
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
                                                    <img src={image} alt={item.projectTitle} />
                                                </SplideSlide>
                                            )
                                        })}
                                    </Splide>
                                </Styled.Slider>
                                <Styled.Description>
                                    <Styled.ProjectTitle><h1>{item.projectTitle}</h1></Styled.ProjectTitle>
                                    <Styled.ProjectDescription><p>{item.projectDescription}</p></Styled.ProjectDescription>
                                </Styled.Description>
                                {item.projectLink && (
                                    <Styled.Description>
                                        <Styled.ProjectLink><h3>Take a look at their {item.projectLink.type}</h3></Styled.ProjectLink>
                                        <Styled.ProjectLink><a href={item.projectLink.url}>{item.projectLink.name}</a></Styled.ProjectLink>
                                    </Styled.Description>
                                )}
                                {item.socialMedia && (
                                    <Styled.Description>
                                        <Styled.ProjectLink><h3>Take a look at their social media</h3></Styled.ProjectLink>
                                        <Styled.SocialMediaLinks>
                                            {item.socialMedia.map((item) => {
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
                <Button className="see-more-btn">See more</Button>
            </h1>
        </Styled.Container>
    )
}

export default Portfolio