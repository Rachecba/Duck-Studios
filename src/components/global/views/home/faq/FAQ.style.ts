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
`

export const QuestionsContainer = styled.div`
  width: 50%;
  margin: auto;

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
