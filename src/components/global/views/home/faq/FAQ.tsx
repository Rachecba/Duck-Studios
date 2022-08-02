import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { faq } from "../../../../../utils/constants/constants"
import * as Styled from './FAQ.style'
import ReactGA from 'react-ga4';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
function FAQ() {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(0)

    const onClick = (newSelected: number) => { 
        ReactGA.event({
            category: 'Homepage: FAQ',
            action: `Open question #${newSelected}`,
        });
        setIsOpen(!isOpen)
        setSelected(newSelected)
    }

    const goToQuestion = (id:string) => {
        setTimeout(() => {
        document.querySelector(id)?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        }, 500);
    }

    const { t, i18n, ready } = useTranslation('faq', { useSuspense: true });

    return (
        <Styled.Container>
            <div className="title">
                <h1>{t('faq.title')}</h1>
            </div>
            <Styled.QuestionsContainer>
    <section>
     <div className="container">
      <div className="accordion">
         { faq.map((item, index) => { 
             return (
                <div key={index} className="accordion-item" id={`question${index+1}`}>
                    <a className="accordion-link" href={`#question${index+1}`}>
                        <div className="flex" onClick={()=>goToQuestion(`#question${index+1}`)}>
                        <h3>{t(`${item.question}.question`)}</h3>
                        </div>
                        <div className="icon ion-md-arrow-forward">
                        <ExpandMoreIcon></ExpandMoreIcon>
                        </div>
                        <div className="icon ion-md-arrow-down">
                        <ExpandLessIcon></ExpandLessIcon>
                        </div>
                    </a>
                    <div className="answer">
                        <p>{t(`${item.question}.answer`)}</p>
                    </div>
                    <hr></hr>
                </div>
                     )
             }) 
         }
     </div>
    </div>
  </section>
            </Styled.QuestionsContainer>
        </Styled.Container>
    )
}

export default FAQ