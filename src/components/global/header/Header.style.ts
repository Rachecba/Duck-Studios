import styled from 'styled-components'

export const NavBar = styled.div<{
  isOpen: boolean
}>`
  padding: 1rem 2rem;

  ${(props) => props.theme.breakpoints.down('lg')} {
    padding: 0;
    display: flex;
    flex-direction: row;

    .body-background {
      background-color: #000000e6;
      width: 100%;
      height: 100vh;
      display: flex;
      position: absolute;
      z-index: 5;
    }
  }

  z-index: 100;

  background: #0b0b0b;

  font-family: 'Montserrat', sans-serif;

  position: inherit;
  top: 0;
  width: 100%;
  transition: all ease 1s;
  display: block;

  #navMenu > span {
    display: block;
    width: 28px;
    height: 2px;
    border-radius: 9999px;
    background-color: white;
  }

  #navMenu > span:not(:last-child) {
    margin-bottom: 7px;
  }

  #navMenu,
  #navMenu > span {
    transition: all 0.4s ease-in-out;
  }

  #navMenu.active {
    transition-delay: 0.85;
    transform: rotate(45deg);
  }

  #navMenu.active > span:nth-child(2) {
    width: 0;
  }

  #navMenu.active > span:nth-child(1),
  #navMenu.active > span:nth-child(3) {
    transition-delay: 0.45;
  }

  #navMenu.active > span:nth-child(1) {
    transform: translateY(9px);
  }

  #navMenu.active > span:nth-child(3) {
    transform: translateY(-9px) rotate(90deg);
  }

  .background-navbar-mobile {
    ${(props) => props.theme.breakpoints.down('lg')} {
      background: #000 !important;
      height: 100vh !important;
      position: absolute;
      justify-content: start;
      align-items: start;
      z-index: 100;
      position: absolute;
      margin-left: 62%;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
      margin-left: 30%;
    }
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    flex-wrap: nowrap;
    justify-content: flex-end !important;
  }

  .navbar-collapse {
    flex-grow: unset;
    text-align: center;

    ${(props) => props.theme.breakpoints.down('lg')} {
      margin-top: 3rem;
    }
  }

  .navbar {
    padding: 0 !important;
    transition: all ease 1s;
    justify-content: space-between;
    width: 100%;

    ${(props) => props.theme.breakpoints.down('lg')} {
      width: ${(props) => (props.isOpen ? 'unset' : '100%')};
    }

    .navbar-toggler {
      color: white;

      &:focus {
        box-shadow: none !important;
      }
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
      border-radius: 2rem;
      font-weight: 600;
      background: #ffd98266 0% 0% no-repeat padding-box;
      border: 2px solid #e49f00;
      transition: 0.5s ease;

      &:hover {
        background-color: #e49f00;
      }
    }

    .contact-dropdown {
      margin-top: 0.5rem;

      ${(props) => props.theme.breakpoints.down('lg')} {
        margin-top: 1.5rem;
      }

      &:hover {
        border-bottom: none !important;
      }
    }

    img {
      width: 4rem !important;
      margin-left: 2rem;
      margin-top: 0.5rem;
      transition: all 1s ease;

      ${(props) => props.theme.breakpoints.down('md')} {
        margin-right: 0;
        margin-left: 0;
        width: 4rem !important;
      }

      ${(props) => props.theme.breakpoints.down('sm')} {
        width: 4rem !important;
      }
    }

    .activeNav {
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      transition: all ease 1s;

      .container-fluid {
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
          transition: 0.4s ease;

          ${(props) => props.theme.breakpoints.down('lg')} {
            border-bottom: unset !important;
          }
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
          width: 13rem !important;
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

      ${(props) => props.theme.breakpoints.down('lg')} {
        margin-right: 0;
      }

      &:hover {
        border-bottom: 3px solid white;
        transition: 0.4s ease;

        ${(props) => props.theme.breakpoints.down('lg')} {
          border-bottom: unset !important;
        }
      }
    }

    .nav-link {
      color: #bfbfbf;

      &:hover,
      &:focus,
      &:active {
        color: white;
      }
    }
  }

  .dropdown-menu {
    position: fixed !important;

    ${(props) => props.theme.breakpoints.down('lg')} {
      position: static !important;
    }
  }

  .dropdown-menu.show {
    animation: myAnim 1s ease 0s 1 normal forwards;

    ${(props) => props.theme.breakpoints.down('lg')} {
      text-align: center;
    }

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
        background-color: #171717;
      }
    }
  }

  .navbar-expand-md .navbar-collapse {
    margin-right: 0;
  }

  .current {
    .nav-item {
      border-bottom: 3px solid white;
      transition: 0.4s ease;

      ${(props) => props.theme.breakpoints.down('lg')} {
        border-bottom: unset !important;
      }
    }
  }

  .languageIcon {
    width: 2.3rem !important;
    margin: 0rem;
  }
`
