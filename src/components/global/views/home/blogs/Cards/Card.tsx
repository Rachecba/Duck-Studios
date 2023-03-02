import * as Styled from './Card.style'
import Button from "@mui/material/Button/Button"
import { Props } from './Cards.interface'

function Card({id, image, title, description }: Props) {

    return (
        <Styled.Container>
            <Styled.Banner backgroundImage={ image }/>
            <Styled.Description>
                <h1>{ title }</h1>
                <p>{ description }</p>
                <Styled.Button>
                    <Button onClick={() => { window.location.href = '/blogs/' + id}}>Leer más</Button>
                </Styled.Button>
            </Styled.Description>
        </Styled.Container>
    )
}

export default Card