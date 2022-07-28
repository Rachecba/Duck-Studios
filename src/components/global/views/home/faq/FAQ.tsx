import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { faq } from "../../../../../utils/constants/constants"
import * as Styled from './FAQ.style'
import ReactGA from 'react-ga4';

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

    const { t, i18n, ready } = useTranslation('faq', { useSuspense: true });

    return (
        <Styled.Container>
            <div className="title">
                <h1>{t('faq.title')}</h1>
            </div>
            <Styled.QuestionsContainer>
                { faq.map((item, index) => { 
                    return (
                        <>
                            <Styled.Question open={ index === selected} onClick={ () => onClick(index) }>
                                <div className="header">
                                    <h1>{t(`${item.question}.question`)}</h1>
                                </div>
                                { index === selected&& (<div className="answer animate__animated animate__fadeInLeft">
                                    <p>{t(`${item.question}.answer`)}</p>
                                </div>)}
                            </Styled.Question>
                        </>
                    )
                }) }
            </Styled.QuestionsContainer>
        </Styled.Container>
    )
}

export default FAQ