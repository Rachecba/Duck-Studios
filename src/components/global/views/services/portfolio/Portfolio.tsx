import React, { useEffect } from "react"
import { Props } from "./Portfolio.props"
import * as Styled from './Portfolio.style'

function Portfolio({ projects }: Props) {

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
                { projects.map((item) => { 
                    return (
                        <>
                            <Styled.Project>
                                <Styled.Slider>
                                    <img src={ item.image } alt={ item.projectTitle }/>
                                </Styled.Slider>
                                <Styled.Description>
                                    <Styled.ProjectTitle><h1>{ item.projectTitle }</h1></Styled.ProjectTitle>
                                    <Styled.ProjectDescription><p>{ item.projectDescription }</p></Styled.ProjectDescription>
                                </Styled.Description>
                            </Styled.Project>
                        </>
                    )
                })}
            </Styled.ProjectsContainer>
        </Styled.Container>
    )
}

export default Portfolio