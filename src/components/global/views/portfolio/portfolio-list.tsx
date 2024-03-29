import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Props } from "./portfolio.props";
import * as Styled from './portfolio.style';
import ProjectCard from "./project-card";
import ReactGA from 'react-ga4';
import { pageTitle } from "../../../../utils/constants/constants";

function PortfolioList({ portfolio, keyword }: Props) {
    
    const path = window.location.pathname

    useEffect(() => {
        ReactGA.send(path);
        document.title = pageTitle(path)
    }, [path]);

     useEffect(() => {
        ReactGA.send(path);
        document.title = pageTitle(path)
    }, []);
  
    const { t } = useTranslation(['softwarePortfolio','marketingPortfolio','graphicDesignPortfolio'], { useSuspense: true });
    const title2array = t(portfolio.title2).split(/(?!$)/u);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
    <Styled.Container>
        <Styled.TitleContainer>
            <div className="title-container animate__animated animate__backInLeft">
                <h1 className="title-1">{t(portfolio.title1)}</h1>
                <h1 className="title-2-container">
                    {title2array.map((letter: string,index) => {
                        return (
                            <span key={index} className="title-2">{letter}</span>
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
                portfolio.projects.map((project: any, index:number)=>{
                   return <ProjectCard project={project} service={portfolio.service} key={index} translateRoot={portfolio.translateRoot} ></ProjectCard>
                })
            }
            </Styled.ProjectsContainer>
            <h1 className="keyword">{ keyword }</h1>
    </Styled.Container>);
}

export default PortfolioList