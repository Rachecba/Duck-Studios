import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Montserrat';
  color: white;
  background: transparent
    linear-gradient(123deg, #2a2a2a 0%, #121212 49%, #060606 100%) 0% 0%
    no-repeat padding-box;

  padding-top: 10rem;
  padding-bottom: 5rem;

  .title {
    text-align: center;
    margin-bottom: 2rem;
  }

  h3{
    font-weight:600;
    color:white;
  }

  /*Section used for centering process*/
  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .container{
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
  }
  
  .accordion-item{
    background-color: transparent;
    border-radius: .4rem;
    border: none!important;
  }
  
  .accordion-item hr{
    border: 0.5px solid white;
  }
  
  .accordion-link{
    font-size: 1.6rem;
    color: rgba(255,255,255,.8);
    text-decoration: none;
    background-color: transparent;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .accordion-link h3{
    font-weight:600;
    font-size: 1.1rem;
    color:white;
  }
  
  .accordion-link i{
    color: #e7d5ff;
    padding: .5rem;
    
  }
  
  .accordion-link ul{
    display:flex;
    align-items: flex-end;
    list-style-type: none;
    margin-left: 25px;
  }
  
  .accordion-link li{
    font-size: 10px;
    color: rgba(255, 255, 255, 0.4);
    padding: 0 0 1px 5px;
  }
  
  .accordion-link div{
    display: flex;
  }
  
  .accordion-link .ion-md-arrow-down{
    display: none;
  }
  
  .answer{
    max-height: 0;
    overflow: hidden;
    position: relative;
    background-color: transparent;
    transition: max-height 650ms;
  }
  
  
  .answer p{
    color: #fff;
    font-size: 15px;
    padding: 2rem;
    
  }
  
  .accordion-item:target .answer{
    max-height: 20rem;
  }
  
  .accordion-item:target .accordion-link .ion-md-arrow-forward{
    display: none
  }

  .accordion-item:target .accordion-link .flex h3{
    color: #FFB610!important;
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  .accordion-item:target .accordion-link .ion-md-arrow-down{
    display: block;
  }
  
`

export const QuestionsContainer = styled.div`
  width: 50%;
  margin: auto;

  ${(props) => props.theme.breakpoints.down('lg')} {
    width: 90%;
  }

  div:last-child {
    border-bottom: unset;
  }
`

export const Question = styled.div<{
  open: boolean
}>`
  padding-bottom: 1rem;
  padding-top: 2rem;
  border-bottom: 1px solid #6f6f6f;
  max-height: ${(props) => (props.theme.open ? '5rem' : 'auto')};
  overflow: hidden;
  transition: max-height 0.2s ease-out;

  &:hover {
    cursor: pointer;
  }

  p {
    font-size: 15px;
    display: ${(props) => (props.open ? 'block' : 'none')};
  }

  h1 {
    font-size: 22px;
    font-weight: 600;
    color: ${(props) => (props.open ? '#FFB610' : 'white')};
  }

  &:after {
    content: ${(props) => (props.open ? '-' : '+')};
    font-size: 13px;
    color: ${(props) => (props.open ? '#FFB610' : 'white')};
    float: right;
    margin-left: 5px;
  }
`
