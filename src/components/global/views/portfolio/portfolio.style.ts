import styled from 'styled-components'


export const Container = styled.div`
  display:flex;
  padding:4rem;
  flex-direction:column;
  ${(props) => props.theme.breakpoints.down('lg')} {
    padding:2rem;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    padding:1rem;
    padding-top:3rem;
  }
`

export const ProjectsContainer = styled.div`
  display:flex;
  width:100%;
  flex-direction:row;
  justify-content:start;
  flex-wrap:wrap;
 
  ${(props) => props.theme.breakpoints.down('sm')} {
    justify-content:space-around;
  }
`

export const TitleContainer = styled.div`
  display:flex;
  flex-direction:row;

  .title-container{
    display:flex;
    flex-direction:column;
    .title-1 {
        font-family: Shippori Antique B1;
        font-weight: 600;
        color:black;
        font-size:9rem;
        -webkit-text-fill-color: black;
        -webkit-text-stroke-color: white;
        -webkit-text-stroke-width: 1px; 
        letter-spacing:5px;
        margin:0;
        ${(props) => props.theme.breakpoints.down('lg')} {
          font-size:5rem;
        }
        ${(props) => props.theme.breakpoints.down('sm')} {
          font-size:3rem;
          margin-top:-20px;
        }
    }
    .title-2-container{
      display:flex;
      flex-direction:row;
      justify-content:space-between;
    }
    .title-2 {
        font-family: Shippori Antique B1;
        font-weight: 400;
        color:#FFB610;
        font-size:9rem;
        margin:0;
        margin-top:-45px;
        ${(props) => props.theme.breakpoints.down('lg')} {
          font-size:5rem;
          margin-top:-20px;
        }
        ${(props) => props.theme.breakpoints.down('sm')} {
          font-size:3rem;
          margin-top:-10px;
        }
    }
    
  }

  .line-container{
    flex-direction:column;
    heigth:100%;
    justify-content:center;
    align-items:center;
    .line{
        width:200rem;
        border-bottom:2px solid white;
        height:50%;
        margin-left:3rem;
    }
  }
  
`