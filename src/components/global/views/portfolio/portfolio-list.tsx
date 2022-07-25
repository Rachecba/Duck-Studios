import { ReactChild, ReactFragment, ReactPortal } from "react";
import { useTranslation } from "react-i18next";
import { Props } from "./portfolio.props";
import * as Styled from './portfolio.style';
import ProjectCard from "./project-card";

function PortfolioList({ portfolio }: Props) {
  
    const title2 = 'DESIGN';
    const title2array = portfolio.title2.split(/(?!$)/u);
    const { t, i18n, ready } = useTranslation(['portfolio'], { useSuspense: true });

    return (
    <Styled.Container>
        <Styled.TitleContainer>
            <div className="title-container animate__animated animate__backInLeft">
                <h1 className="title-1">{portfolio.title}</h1>
                <h1 className="title-2-container">
                    {title2array.map((letter: string) => {
                        return (
                            <span key={letter} className="title-2">{letter}</span>
                        )
                    })}
                </h1>
            </div>
            <div className="line-container animate__animated animate__fadeInLeft">
                <h1 className="line"></h1>
            </div>
        </Styled.TitleContainer>
        <Styled.ProjectsContainer>
            {
                portfolio.projects.map((project: any)=>{
                   return <ProjectCard project={project} service={portfolio.service} key={project} ></ProjectCard>
                })
            }
        </Styled.ProjectsContainer>
    </Styled.Container>);
}

export default PortfolioList