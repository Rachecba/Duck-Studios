import styled from 'styled-components'


export const Container = styled.div`
  display:flex;
  padding:4rem;
  flex-direction:column;
  h1{
    color:#E3E3E3;
    font-size:6rem;
    font-family:Shippori Antique B1
  }
`

export const ParagraphsContainer = styled.div`
  display:flex;
  flex-direction:column;
  .row-reverse{
    flex-direction: row-reverse;
  }
`

export const OtherImagesContainer = styled.div`
  display:flex;
  flex-direction:column;
  margin:5rem;
  .img-other-images{
    height:20rem;
  }
`

export const VideoContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin-top:10rem;
  border-radius:20px;
  .video-size{
    width:80%;
  }
`

export const Paragraph = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-top:5rem;

  .img-paragraph{
    object-fit:scale-down;
    border-radius: 23px;
    width:45%;
  }

  .p-container{
    padding:4rem;
  }
  p{
    color:#E3E3E3;
    font-family:Montserrat;
    font-size:1.3rem;
    text-align:justify;
  }
`