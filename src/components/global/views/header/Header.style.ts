import styled from 'styled-components'

export const NavBar = styled.div<{
  background: string
  position: string
}>`

  z-index: 100;
  
  background: black;

  ${(props) => props.theme.breakpoints.down('md')} {
    background:  ${p => p.background} !important;
  }

  font-family: montserrat, sans-serif; 

  position:  ${p => p.position};
  top: 0;
  width: 100%;
  transition: all ease 1s;
  display: block;

  ${(props) => props.theme.breakpoints.up('lg')} {
    flex-wrap: nowrap;
    justify-content: flex-end !important;
  }

  .navbar-collapse {
    flex-grow: unset;
  }

  .navbar {
    padding: 0 !important;
    transition: all ease 1s;
  }

  .navbar-toggler {
    color: white;
  }

  .dropdown-item {
    text-transform: capitalize;
  }

  .navbar-brand {
    height: 5rem;

    ${(props) => props.theme.breakpoints.down('sm')} {
      height: 4rem;
    }
  }

  .dropdown-toggle::after {
    display: none !important;
  }

  a {
    text-decoration: none;
  }

  .contact {
    background-color: #bcbcbc6b;
    color: white !important;
    padding: 0.7rem 1rem !important;
    border-radius: 0.1rem;

    &:hover {
      background-color: #cc790c
    }
  }

  .contact-dropdown {

    margin-top: 0.5rem;
    
    ${(props) => props.theme.breakpoints.down('md')} {
      margin-top: 1rem;
    }

    &:hover {
      border-bottom: none !important;
    }
  }

  img {
    width: 17rem !important;
    height: 4.5rem !important;
    padding: 1rem;
    margin-left: 2rem;
    transition: all 1s ease;

    ${(props) => props.theme.breakpoints.down('md')} {
      margin-right: 0;
      margin-left: 0;
      width: 14rem !important;
      height: 4.2rem !important;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
      width: 14rem !important;;
      height: 4rem !important;
    }
  }

  .navbar-toggler:focus {
      box-shadow: 0 0 0 0.1rem !important;
  }

  .activeNav {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transition: all ease 1s;
    
    .container-fluid{
      background: #000000d4;
      transition: all ease 1s;
    }

    .navbar-toggler {
      ${(props) => props.theme.breakpoints.down('md')} {
        margin-bottom: 0rem !important;
      }
    }

    .nav-item {
      cursor: default !important;
      
      &:hover {
        border-bottom: 3px solid white;
      }
    }

    img {
      width: 14rem !important;
      height: 4.2rem !important;
      transition: all ease 1s;
      margin-top: 0.2rem;

      ${(props) => props.theme.breakpoints.down('md')} {
        width: 13rem !important;
        height: 2rem !important;
        margin-top: 0.5rem;
      }

      ${(props) => props.theme.breakpoints.down('sm')} {
        width: 13rem !important;;
        height: 2rem !important;
      }
    }

    ${(props) => props.theme.breakpoints.down('md')} {
      img {
        padding-top: 0rem;
        padding-bottom: 0rem;
      }

      .navbar-brand {
        padding-bottom: 3rem !important;
      }

    }
  }

  .navbar-expand-md .navbar-collapse {
    justify-content: end !important;
    margin-right: 7rem;

    ${(props) => props.theme.breakpoints.down('md')} {
      height: 100vh !important;
      margin-top: 2rem;
    }
  }

  .nav-item {
    margin-right: 3rem;
    text-transform: uppercase;
    line-height: 2;

    ${(props) => props.theme.breakpoints.down('md')} {
      margin-right: 0;
    }

    &:hover {
      border-bottom: 3px solid white;
    }

  }

  .nav-link {
    color: #BFBFBF;

    &:hover, &:focus, &:active {
      color: white;
    }

    ${(props) => props.theme.breakpoints.down('md')} {
      margin-left: 0.5rem;
    }
  }
  }

  .dropdown-menu.show {
    animation: myAnim 1s ease 0s 1 normal forwards;

    @keyframes myAnim {
      0% {
        opacity: 0;
        transform: rotateX(-100deg);
        transform-origin: top;
      }
    
      100% {
        opacity: 1;
        transform: rotateX(0deg);
        transform-origin: top;
      }
    }

    border: none;
    background-color: rgba(0, 0, 0, 0.54);

    .dropdown-item {
      color: white !important;
      
      &:hover {
        background-color: inherit;
      }
    }
  }

  .navbar-expand-md .navbar-collapse {
    margin-right: 0;
  }

  .current {
    .nav-item {
        border-bottom: 3px solid white;
    }
  }
`

export const Copyright = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  color: white;
  font-size: 13px;

  ${(props) => props.theme.breakpoints.up('md')} {
    display: none;
  }
`