import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { news } from '../../../utils/constants/constants'
import * as Styled from './News.style'
import Header from '../../global/header/Header'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Blog from './Blog/Blog'
import {headerBlog} from '../../../utils/constants/constants'

function News() {    
    const [ref, inView] = useInView()
    const [className, setClassName] = React.useState('')

    useEffect(() => {
        if (inView) {
            setClassName('animate__animated animate__pulse')
        }
    }, [inView]);
    
      useEffect(() => {
          window.scrollTo(0, 0)
      }, [])

    return (
        <Styled.Container>
            <Styled.Banner>
                    <img alt={headerBlog.title} src={headerBlog.image} className='background-image'/>
                <Header />
                <Styled.BannerTitle>
                    <div className='text'>
                        <h1>{ headerBlog.title }</h1>
                        <p>{ headerBlog.description }</p>
                        <div className='button'>
                            <button onClick={() => { window.location.href = '/news/' + headerBlog.id}} className={className} ref={ref}>Leer artículo <ArrowForwardIcon /></button>
                        </div>
                    </div>
                </Styled.BannerTitle>
            </Styled.Banner>
            <Styled.PageTitle>
                <h1>Últimas noticias</h1>
            </Styled.PageTitle>
            <Styled.Blogs>
                {news.map((item) => {
                    return (
                        <>
                            <div className='blogContainer'>
                                <Blog
                                    id={ item.id }
                                    image={item.image}
                                    date={item.date}
                                    title={item.title}
                                    shortDescription={item.shortDescription}
                                />
                            </div>
                        </>
                    )
                })}
            </Styled.Blogs>
        </Styled.Container>
    )

}

export default News