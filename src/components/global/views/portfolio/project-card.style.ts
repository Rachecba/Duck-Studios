import styled from 'styled-components'


export const Container = styled.div`
  display:flex;
  width:23rem;
  border-radius: 23px;
  height: 500px;
  overflow: hidden;
  flex-direction:column;
  border:2px solid black;
  margin:3rem 1.5rem;

  ${(props) => props.theme.breakpoints.down('lg')} {
    margin:3rem 1.5rem;
    width:20.5rem;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    margin:2rem 0.5rem;
  }
  
  position:relative;
  .background-container{
    height:100%;
  }

  .background-img{
  width:100%;
  object-fit:cover;
  height:501px;
 }
`

export const TitleContainer = styled.div`

position:absolute;
bottom:0;
width:100%;
padding:1rem;
background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7245491946778712) 44%, rgba(255,255,255,0) 100%);

h1{
  color:white;
  font-family:Montserrat;
  font-size:1.5rem;
  font-weight:600;
}

h2{
  color:white;
  font-family:Montserrat;
  font-size:1rem;
  text-transform:capitalize;
  font-weight:200;
}
`
