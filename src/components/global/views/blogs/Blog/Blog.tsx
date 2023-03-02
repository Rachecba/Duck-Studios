import { Props } from './Blog.interface'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import * as Styled from './Blog.style'

function Blog({ id, image, title, shortDescription }: Props) {

    return (
        <Styled.Container>
            <Styled.ImageContainer>
                <img alt={title} src={ image } />
            </Styled.ImageContainer>
            <Styled.DescriptionContainer>
                <div className='about'>
                    <h1>{title}</h1>
                    <p>{shortDescription}</p>
                </div>
                <div className='buttonContainer'>
                    <button onClick={() => { window.location.href = '/news/' + id }}>Leer artículo <ArrowForwardIcon /></button>
                </div>
            </Styled.DescriptionContainer>
        </Styled.Container>
    )

}

export default Blog