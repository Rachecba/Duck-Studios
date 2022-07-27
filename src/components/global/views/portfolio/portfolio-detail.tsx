import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { softwarePortfolio } from "../../../../utils/constants/constants";
import { Props } from "./project-card.props";
import * as Styled from './portfolio-detail.style';
import { Player } from 'video-react';
import "./video-react.css";
function ProjectDetail(props: any) {
  
    const { t, i18n, ready } = useTranslation(['portfolio','softwarePortfolio','marketingPortfolio','grapichDesignPortfolio'], { useSuspense: true });

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

    const params = useParams();
    const urlProject = params.urlName;
    const urlService = params.service;

    let projectDetail:any;

    switch (urlService) {
        case "software":
            projectDetail = softwarePortfolio.projects.find(project => project.urlName === urlProject);
            break;
        case "grapichDesign":
            
        break;
        case "marketing":
         
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
    </Styled.Container>);
}

export default ProjectDetail