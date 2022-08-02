import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { grapichDesignPortfolio, marketingPortfolio, pageTitle, softwarePortfolio } from "../../../../utils/constants/constants";
import * as Styled from './portfolio-detail.style';
import { Player } from 'video-react';
import "./video-react.css";
import { useEffect } from "react";
import ReactGA from 'react-ga4';
import { Button } from "reactstrap";

function ProjectDetail(props: any) {

    const path = window.location.pathname

    useEffect(() => {
        ReactGA.send(path);
        document.title = pageTitle(path)
    }, [path]);

     useEffect(() => {
        ReactGA.send(path);
        document.title = pageTitle(path)
    }, []);
  
    const { t, i18n, ready } = useTranslation(['portfolio','softwarePortfolio','marketingPortfolio','grapichDesignPortfolio','global'], { useSuspense: true });

    const splideOptions = { gap: '3rem',arrows:true,pagination:false, rewind : true, perPage: 3,  autoWidth: true,
    breakpoints: {
        640: {
          perPage: 2,
          gap    : '.7rem',
        },
        480: {
          perPage: 1,
          gap    : '.7rem',
        },
    }}

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const params = useParams();
    const urlProject = params.urlName;
    const urlService = params.service;

    let projectDetail:any;

    switch (urlService) {
        case "software":
            projectDetail = softwarePortfolio.projects.find(project => project.urlName === urlProject);
            break;
        case "graphic-design":
            projectDetail = grapichDesignPortfolio.projects.find(project => project.urlName === urlProject);
        break;
        case "marketing":
            projectDetail = marketingPortfolio.projects.find(project => project.urlName === urlProject);
        break;
        default:
            break;
    }
    
    
    return (
    <Styled.Container>
     <h1 className="animate__animated animate__fadeInLeft">{t(projectDetail.title)}</h1>
      <Styled.ParagraphsContainer className="animate__animated animate__fadeInUp">
        {
            projectDetail.descriptions.map((description:any, index:number) =>{
                return (
                    <Styled.Paragraph  key={index} className={description.textDirection==='right'?'row-reverse':''}>
                        <img src={description.image} alt="project-image" className="img-paragraph" />
                        <div className="p-container">
                        { 
                        description.paragraphs.map((p:any,index:number)=>{
                          return <p key={index}>{t(p)}</p>
                        })
                        }
                        </div>
                    </Styled.Paragraph>
                )
            })
        }
      </Styled.ParagraphsContainer>

{
    projectDetail.otherImages.length>0 && (
        <Styled.OtherImagesContainer>
            <h1>{t('portfolio:portfolio.moreOfThisProject')}</h1>
            <Splide aria-label="Project images" options={splideOptions} className="background-container">
            {projectDetail.otherImages.map((image:string) => {
                return (
                    <SplideSlide key={image}>
                        <img src={image} alt="project-image" className="img-other-images"/>
                    </SplideSlide>
                )
            })}
        </Splide>
        </Styled.OtherImagesContainer>
    )
}

      { projectDetail.video.url && (
      <Styled.VideoContainer className="animate__animated animate__fadeInUp">
       <div className="video-size">
        <Player
            playsInline
            poster={projectDetail.video.poster}
            src={projectDetail.video.url}
        />
        </div>
       </Styled.VideoContainer>
      )
     } 
     <h1 className="text-center">
     <Link to={`/portfolio/${urlService}`}>
        <Button className="button">{t('global:global.btnSeeMoreProjects')}</Button>
     </Link>
     </h1>
    </Styled.Container>);
}

export default ProjectDetail