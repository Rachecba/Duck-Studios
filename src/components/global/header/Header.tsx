import { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarBrand,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import { NavHashLink } from 'react-router-hash-link';
import * as Styled from './Header.style'
import { Link } from "react-router-dom";
import { logotipo } from "../../../utils/constants/constants";
import { calculateResolutionSize, resolutionSizesNames } from "../../../utils/constants/resolution";
import { useScreenSize } from "../../../utils/hooks/screenSize";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
// import i18n from '../../../../i18n';

function Header({ position }: { position?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [navbar, setnavbar] = useState(false);
  const windowDimension = useScreenSize();
  const size = calculateResolutionSize(windowDimension.winWidth);
  const toggle = () => { setIsOpen(!isOpen) };

  // const browserLanguage = () => { 
  //   const language = window.navigator.language;
  //   return language.split('-')[0]
  // }

  // const [language, setLanguage] = useState(browserLanguage)

  // const changeLanguage = (lng: string | undefined) => {
  //   i18n.changeLanguage(lng);
  // }

  // const current = (selected: string) => { 
  //   let x;
  //   languageIcons.map(item => { 
  //     if (item.code === selected)
  //       x = item.icon;
  //   })

  //   return x;
  // }

  // const icon = (language: string) => {
  //  let x;
  //   languageIcons.map(item => { 
  //     if (item.code === language)
  //       x = item.icon;
  //   })
  //   changeLanguage(language);

  //   return x;
  // }

  // useEffect(() => {
  //   isOpen && size !== resolutionSizesNames.large ? disableBodyScroll(document) : enableBodyScroll(document);
  //   return () => {
  //     toggle();
  //   };
  // }, [toggle]);

  return (
    <Styled.NavBar isOpen={ isOpen }>
      <div className={isOpen ? 'body-background' : ''}></div>
      <Navbar expand="lg" className={isOpen ? 'background-navbar-mobile' : ''}>
        <NavbarBrand href="/"><img src={ logotipo } alt="Duck Studios" /></NavbarBrand>
        <NavbarToggler onClick={ toggle }>
          <span>
            <div id="navMenu" onClick={ toggle } className={ isOpen ? "active" : ""}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/" onClick={() => {setIsOpen(false) }}  className='nav-link'>HOME</Link>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                SERVICES
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  Software
                </DropdownItem>
                <DropdownItem>
                  Graphic Design
                </DropdownItem>
                <DropdownItem>
                  Marketing
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                PORTFOLIO
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  Software
                </DropdownItem>
                <DropdownItem>
                  Graphic Design
                </DropdownItem>
                <DropdownItem>
                  Marketing
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
           {/* <UncontrolledDropdown inNavbar nav className="languageSelector">
              <DropdownToggle caret nav className="language">
                <img src={ current(language) } alt='selected language' className="languageIcon"/>
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem onClick={() => setLanguage('es')} className="languageIcon">
                  <img src={ icon('es')} alt='es'/>
                </DropdownItem>
                <DropdownItem onClick={() => setLanguage('en')} className="languageIcon">
                  <img src={ icon('en')} alt='en'/>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            <NavItem className='contact-dropdown'>
              <NavHashLink to="/#contact" onClick={() => {setIsOpen(false) }}  smooth className='contact'><span>CONTACT US</span></NavHashLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Styled.NavBar>
  );
};

export default Header;
