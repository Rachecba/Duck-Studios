import React, { useState } from "react"
import { faq } from "../../../../../utils/constants/constants"
import * as Styled from './FAQ.style'

function FAQ() {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(0)

    const onClick = (newSelected: number) => { 
        setIsOpen(!isOpen)
        setSelected(newSelected)
    }

    return (
        <Styled.Container>
            <div className="title">
                <h1>FAQs</h1>
            </div>
            <Styled.QuestionsContainer>
                { faq.map((item, index) => { 
                    return (
                        <>
                            <Styled.Question open={ index === selected} onClick={ () => onClick(index) }>
                                <div className="header">
                                    <h1>{ item.question }</h1>
                                </div>
                                <div className="answer">
                                    <p>{ item.answer }</p>
                                </div>
                            </Styled.Question>
                        </>
                    )
                }) }
            </Styled.QuestionsContainer>
        </Styled.Container>
    )
}

export default FAQ