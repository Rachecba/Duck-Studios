import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { designProjects, designTestimonials, testimonials } from "../../../../utils/constants/constants";
import { Props } from "./project-card.props";
import * as Styled from './project-card.style';

function ProjectCard({ project, service, key , translateRoot}: Props) {
  
    const { t } = useTranslation(['softwarePortfolio','marketingPortfolio','graphicDesignPortfolio'], { useSuspense: true });

    const randomIntFromInterval = (min:number, max:number) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    const splideOptions = {  type:'fade',rewind: true,arrows:false,interval:randomIntFromInterval(3000,5000),pagination:false,autoplay:true, drag:false};

    return (
    <Styled.Container className="animate__animated animate__slideInUp">
        <Link to={`/portfolio/${service}/${project.urlName}`}>
        <Splide aria-label="Project images" options={splideOptions} className="background-container">
            {project.images.map((image:string) => {
                return (
                    <SplideSlide key={image}>
                        <img src={image} alt="project-image" className="background-img"/>
                    </SplideSlide>
                )
            })}
        </Splide>
        <Styled.TitleContainer>
           <h1>{t(`${translateRoot}:${translateRoot}.projects.${project.translateRoot}.title`)}</h1>
           <h2>{t(`${translateRoot}:${translateRoot}.projects.${project.translateRoot}.category`)}</h2>
        </Styled.TitleContainer>
        </Link>
    </Styled.Container>);
}

export default ProjectCard