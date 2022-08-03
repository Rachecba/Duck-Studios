import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 4rem;
  flex-direction: column;

  .text-center {
    text-align: start;
  }

  .button {
    background: transparent;
    border-radius: 8px;
    padding: 0.3rem 1.5rem;
    color: white;
    margin-top: 1.5rem;
    transition: border 0.5s, background 0.8s;

    ${(props) => props.theme.breakpoints.down('lg')} {
      font-size: 13px;
    }

    &:hover {
      box-shadow: 0px 0px 16px #815901;
      background: #ce8f00;
      transition: border 0.5s, background 0.8s;
      border: 1px solid #ce8f00;
    }
  }

  ${(props) => props.theme.breakpoints.down('lg')} {
    padding: 1rem;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    padding: 1rem;
  }

  h1 {
    color: #e3e3e3;
    font-size: 6rem;
    font-family: Shippori Antique B1;
    ${(props) => props.theme.breakpoints.down('lg')} {
      font-size: 3rem;
      padding-left: 1rem;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
      font-size: 2.2rem;
      padding-left: 1rem;
    }
  }
`

export const ParagraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
  .row-reverse {
    flex-direction: row-reverse;
    ${(props) => props.theme.breakpoints.down('lg')} {
      flex-direction: column-reverse;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
      flex-direction: column-reverse;
    }
  }
`

export const OtherImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  h1 {
    color: white;
    font-size: 2.5rem;
    margin: 4rem 0;
    ${(props) => props.theme.breakpoints.down('lg')} {
      font-size: 2rem;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
      font-size: 2rem;
    }
  }
  .img-other-images {
    height: 15rem;
    width: 22rem;
    object-fit: cover;
    border-radius: 10px;
  }
`

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10rem 0 3rem 0;
  border-radius: 20px;

  ${(props) => props.theme.breakpoints.down('lg')} {
    margin: 0rem 0 3rem 0;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    margin: 0rem 0 3rem 0;
  }

  .video-size {
    width: 80%;
    ${(props) => props.theme.breakpoints.down('lg')} {
      width: 95%;
      margin-top: 7rem;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
      width: 95%;
      margin-top: 7rem;
    }
  }
`

export const Paragraph = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5rem;
  ${(props) => props.theme.breakpoints.down('lg')} {
    flex-direction: column;
    margin: 2rem 0;
    justify-content: center;
    align-items: center;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }
  .img-paragraph {
    border-radius: 23px;
    height: 24rem;
    width: 37rem;
    object-fit: cover;
    border-radius: 10px;
    ${(props) => props.theme.breakpoints.down('lg')} {
      width: 95%;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
      width: 95%;
    }
  }

  .p-container {
    padding: 4rem;
    ${(props) => props.theme.breakpoints.down('lg')} {
      padding: 1rem;
    }
    ${(props) => props.theme.breakpoints.down('sm')} {
      padding: 1rem;
    }
  }
  p {
    color: #e3e3e3;
    font-family: Montserrat;
    font-size: 1.3rem;
    text-align: justify;
    ${(props) => props.theme.breakpoints.down('sm')} {
      font-size: 1rem;
    }
  }
`
