import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink
} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
      <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/' style={{color:"white"}}>
                      Airothon 4.0
                  </NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu style={{marginLeft:"50%"}}>
                      <NavItem>
                          <NavLinks to="about" style={{color:"white"}}>About</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="signup" style={{color:"white"}}>Sign Up</NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to="/signin">Sign In</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
      </>
  )
}

export default Navbar