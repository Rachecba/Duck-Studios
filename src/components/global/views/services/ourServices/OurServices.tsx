import Button from "@mui/material/Button/Button"
import React from "react"
import { Props } from "./OurServices.props"
import * as Styled from './OurServices.style'

function OurServices({ title, services }: Props) {
    
    const cardPosition = (index: number, arrayLenght: number) => { 
        if (index === 0) {
            return 'top-card'
        } else { 
            if (index === arrayLenght)
                return 'end-card'
            else { 
                return 'middle-card'
            }
        }
    }

    return (
        <Styled.Container>
            <Styled.SectionTitle>
                <h1>Our Services</h1>
            </Styled.SectionTitle>
            <Styled.Title>
                <h1>{ title }</h1>
            </Styled.Title>
            <Styled.Services>
                 <Styled.Background/>
                <Styled.CardsContainer>
                    { services.map((item, index) => { 
                        return (
                            <>
                                <Styled.Card className={ cardPosition(index, services.length)}>
                                    <div className="icon">
                                        <img alt="software" src={ item.icon }/>
                                    </div>
                                    <h1>{ item.title }</h1>
                                    <p>{ item.description }</p>
                                    <Button className="button">See more</Button>
                                </Styled.Card>
                            </>
                        )
                    })}
                </Styled.CardsContainer>
            </Styled.Services>
        </Styled.Container>
    )
}

export default OurServices