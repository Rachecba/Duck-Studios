import { mainBlogs } from '../../../../../utils/constants/blogs'
import * as Styled from './blogs.style'
import Card from './Cards/Card'
import Button from "@mui/material/Button/Button"

function Blogs() {

    return (
        <Styled.Container id='blogs'>
            <Styled.SectionTitle>
                <h1>BLOGS</h1>
            </Styled.SectionTitle>
            <Styled.Title>
                <h1>Te contamos los secretos que siempre haz querido saber</h1>
            </Styled.Title>
            <Styled.TopButton>
                <Button onClick={ () => window.location.href='/blogs'}>Ver todos</Button>
            </Styled.TopButton>
            <Styled.Cards>
                {mainBlogs.map((item) => {
                    return (
                        <>
                            <Card
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                            />
                        </>
                    )
                 })}
            </Styled.Cards>
        </Styled.Container>
    )

}

export default Blogs