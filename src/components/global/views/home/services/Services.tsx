import Button from "@mui/material/Button/Button"
import React from "react"
import { servicesBackground, softwareIcon } from "../../../../../utils/constants/constants"
import * as Styled from './Services.style'

function Services() {

    return (
        <Styled.Container>
            <Styled.SectionTitle>
                <h1>Our Services</h1>
            </Styled.SectionTitle>
            <Styled.Title>
                <h1>We have <span>what you need</span></h1>
            </Styled.Title>
            <Styled.Services>
                 <Styled.Background>
                    {/* <img alt="services-background" src={ servicesBackground }/> */}
                </Styled.Background>
                <Styled.CardsContainer>
                    <Styled.Card>
                        <div className="icon">
                            <img alt="software" src={ softwareIcon }/>
                        </div>
                        <h1>Software</h1>
                        <p>Cuenta con el respaldo de Ingenieros de Software quienes te crean tu página web,
                        aplicación móvil o sistema. Entregamos productos de calidad que resalten el profesionalismo
                            y esencia de tu empresa.</p>
                        <Button>See more</Button>
                    </Styled.Card>
                    <Styled.Card>
                        <div className="icon">
                            <img alt="software" />
                        </div>
                        <h1>Software</h1>
                        <p>Cuenta con el respaldo de Ingenieros de Software quienes te crean tu página web,
                        aplicación móvil o sistema. Entregamos productos de calidad que resalten el profesionalismo
                        y esencia de tu empresa.</p>
                    </Styled.Card>
                    <Styled.Card>
                        <div className="icon">
                            <img alt="software" />
                        </div>
                        <h1>Software</h1>
                        <p>Cuenta con el respaldo de Ingenieros de Software quienes te crean tu página web,
                        aplicación móvil o sistema. Entregamos productos de calidad que resalten el profesionalismo
                        y esencia de tu empresa.</p>
                    </Styled.Card>
                </Styled.CardsContainer>
            </Styled.Services>
        </Styled.Container>
    )
}

export default Services