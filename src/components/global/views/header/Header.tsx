import React, { useState } from "react";
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

import { GiHamburgerMenu } from "react-icons/gi";

import * as Styled from './Header.style'
import { Link } from "react-router-dom";

function Header({ position }: {position?: boolean}) {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setnavbar] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleActive = () => {
    if (window.scrollY >= 80) {
      setnavbar(true)
    } else {
      setnavbar(false)
    }
  }

  window.addEventListener('scroll', toggleActive);

  return (
    <Styled.NavBar background={isOpen ? 'black' : 'transparent'} position={position ? 'inherit' : 'fixed'}>
      <Navbar expand="lg" className= {navbar ? 'activeNav' : ''}>
        <NavbarBrand href="/"><img src="/assets/images/Logo.png" alt="Duck Studios" /></NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <span>
            <GiHamburgerMenu/>
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
              <DropdownMenu right>
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
              <DropdownMenu right>
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
              <NavHashLink to="/#contact" onClick={() => {setIsOpen(false) }}  smooth className='contact'>CONTACT US</NavHashLink>
            </NavItem>
          </Nav>
          <Styled.Copyright>
            <p>© 2022 Duck Studios. All rights reserved.</p>
          </Styled.Copyright>
        </Collapse>
      </Navbar>
    </Styled.NavBar>
  );
};

export default Header;
