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
import { logotipo, languageIcons } from "../../../utils/constants/constants";
import { calculateResolutionSize, resolutionSizesNames } from "../../../utils/constants/resolution";
import { useScreenSize } from "../../../utils/hooks/screenSize";
import { useTranslation } from 'react-i18next';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { withTranslation } from 'react-i18next';

function Header({ position }: { position?: boolean }) {
  const { t, i18n, ready } = useTranslation('header',{ useSuspense: true });

  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const windowDimension = useScreenSize();
  const size = calculateResolutionSize(windowDimension.winWidth);
  const toggle = () => { setIsOpen(!isOpen) };

  const getLangIcon = (lng:any) =>{
    return languageIcons.find( icon => icon.code === lng)?.icon;
  }

  useEffect(() => {
    // isOpen && size !== resolutionSizesNames.large ? disableBodyScroll(document) : enableBodyScroll(document);
    return () => {
      toggle();
    };
  }, [toggle]);

  const changeLanguage = (lng:any) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  }

  return (
    <Styled.NavBar isOpen={ isOpen }>
      <div className={isOpen ? 'body-background' : ''}></div>
      <Navbar expand="lg" className={isOpen ? 'background-navbar-mobile' : ''}>
        <NavbarBrand href="/"><img src={ logotipo } alt="Duck Studios" className="logo"/></NavbarBrand>
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
                {t('header.services')}
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                <Link to="/software" onClick={() => {setIsOpen(false) }}  className='nav-link'>Software</Link>
                </DropdownItem>
                <DropdownItem >
                <Link to="/graphic-design" onClick={() => {setIsOpen(false) }}  className='nav-link'>Graphic Design</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to="/marketing" onClick={() => {setIsOpen(false) }}  className='nav-link'>Marketing</Link>
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
            <NavItem className='contact-dropdown'>
              <NavHashLink to="/#contact" onClick={() => {setIsOpen(false) }}  smooth className='portfolio-button'><span>CONTACT US</span></NavHashLink>
            </NavItem>
            <UncontrolledDropdown inNavbar className="languageSelector">
              <DropdownToggle caret nav>
                <img src={ getLangIcon(language) } alt='selected language' className="languageIcon"/>
              </DropdownToggle>
              <DropdownMenu className="languageDropDown">
                <DropdownItem onClick={() => changeLanguage('es')} className='languageDropdownItem'>
                  <span>Español</span> <img src={ getLangIcon('es')} alt='es' className="languageIconSmall"/>
                </DropdownItem>
                <DropdownItem onClick={() => changeLanguage('en')} className='languageDropdownItem'>
                  <span>English</span> <img src={ getLangIcon('en')} alt='en' className="languageIconSmall"/>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </Styled.NavBar>
  );
};

export default Header;
